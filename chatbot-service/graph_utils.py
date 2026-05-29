from __future__ import annotations

import os
from typing import List, TypedDict

from langchain.prompts import PromptTemplate
from langchain_community.vectorstores import FAISS
from langgraph.graph import StateGraph

PERSONA_NAME = os.getenv("PERSONA_NAME", "Syachrul Qolbi Nur Septi")
MAX_TURNS = int(os.getenv("MAX_TURNS", "8"))

CONTACT = {
    "email": os.getenv("CONTACT_EMAIL", "syachrulqolbinursepti@gmail.com"),
    "city": os.getenv("CONTACT_CITY", "Sydney, Australia"),
    "website": os.getenv("CONTACT_WEBSITE", "https://www.sqnsportfolio.com"),
    "linkedin": os.getenv("CONTACT_LINKEDIN", "https://www.linkedin.com/in/syachrulqolbi/"),
    "github": os.getenv("CONTACT_GITHUB", "https://github.com/syachrulqolbi"),
}

PROMPT = PromptTemplate.from_template(
    f"""You are {PERSONA_NAME}. Reply in first person.

Previous conversation:
{{history}}

Current question: {{question}}

Relevant context:
{{context}}

Your concise answer:
"""
)

_CONTACT_KEYS = {
    "phone": ("phone", "number", "mobile", "whatsapp"),
    "email": ("email", "e-mail", "mail"),
    "website": ("website", "site", "portfolio"),
    "linkedin": ("linkedin",),
    "github": ("github",),
    "city": ("city", "location", "where are you"),
}


def _direct_contact_answer(query: str) -> str | None:
    q_lower = query.lower()
    for field, triggers in _CONTACT_KEYS.items():
        if any(trigger in q_lower for trigger in triggers) and CONTACT.get(field):
            return f"My {field} is {CONTACT[field]}."
    return None


def build_chat_graph(store: FAISS, llm):
    """Build a LangGraph chatbot with retrieval and generation steps."""

    class ChatState(TypedDict):
        messages: List[dict]
        new_user_message: str
        context: list
        response: str

    def add_user(state: ChatState) -> ChatState:
        if text := state.pop("new_user_message", "").strip():
            state["messages"].append({"role": "user", "content": text})
        return state

    def retrieve(state: ChatState) -> ChatState:
        state["context"] = store.similarity_search(state["messages"][-1]["content"], k=4)
        return state

    def generate(state: ChatState) -> ChatState:
        question = state["messages"][-1]["content"]

        if reply := _direct_contact_answer(question):
            state["messages"].append({"role": "assistant", "content": reply})
            state["response"] = reply
            return state

        if not state["context"]:
            redirect_prompt = (
                "You are a friendly personal-portfolio chatbot. "
                "The user asked an out-of-scope question:\n"
                f"{question}\n\n"
                "Politely explain you only answer questions about Syachrul's "
                "professional profile, projects, skills, background, and contact information. "
                "Reply in first person, one or two short sentences."
            )
            redirect = llm.invoke(redirect_prompt).content
            state["messages"].append({"role": "assistant", "content": redirect})
            state["response"] = redirect
            return state

        pairs = [
            (state["messages"][i]["content"], state["messages"][i + 1]["content"])
            for i in range(0, len(state["messages"]) - 1, 2)
        ]
        history = "\n".join(f"Q: {q}\nA: {a}" for q, a in pairs[-MAX_TURNS:])
        context_text = "\n\n".join(doc.page_content for doc in state["context"])
        answer = llm.invoke(
            PROMPT.format(question=question, context=context_text, history=history)
        ).content

        state["messages"].append({"role": "assistant", "content": answer})
        state["response"] = answer
        return state

    graph = StateGraph(ChatState)
    graph.add_node("add_user", add_user)
    graph.add_node("retrieve", retrieve)
    graph.add_node("generate", generate)

    graph.set_entry_point("add_user")
    graph.add_edge("add_user", "retrieve")
    graph.add_edge("retrieve", "generate")

    return graph.compile()
