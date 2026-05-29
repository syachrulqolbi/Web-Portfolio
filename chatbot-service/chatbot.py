from __future__ import annotations

import os
from threading import Lock

from langchain.chat_models import init_chat_model
from langchain_google_genai import GoogleGenerativeAIEmbeddings

from data_utils import get_store
from graph_utils import build_chat_graph

GOOGLE_API_KEY = os.environ["GOOGLE_API_KEY"].strip()
MAX_TURNS = int(os.getenv("MAX_TURNS", "8"))

_init_lock = Lock()
_initialized = False

llm = None
embeddings = None
store = None
chat_graph = None
chat_memory: list[tuple[str, str]] = []


def _initialize_chatbot() -> None:
    global _initialized, llm, embeddings, store, chat_graph

    if _initialized:
        return

    with _init_lock:
        if _initialized:
            return

        print("Initializing chatbot resources...", flush=True)

        llm = init_chat_model(
            os.getenv("CHAT_MODEL", "gemini-2.0-flash-lite"),
            model_provider="google_genai",
            google_api_key=GOOGLE_API_KEY,
        )

        embeddings = GoogleGenerativeAIEmbeddings(
            model="models/gemini-embedding-001",
            google_api_key=GOOGLE_API_KEY,
        )

        store = get_store(embeddings)
        chat_graph = build_chat_graph(store, llm)

        _initialized = True
        print("Chatbot resources ready.", flush=True)


def ask(question: str) -> str:
    global chat_memory

    _initialize_chatbot()

    messages = []
    for q, a in chat_memory[-MAX_TURNS:]:
        messages.extend(
            [
                {"role": "user", "content": q},
                {"role": "assistant", "content": a},
            ]
        )

    init_state = {
        "messages": messages,
        "new_user_message": question,
        "context": [],
        "response": "",
    }

    answer = chat_graph.invoke(init_state)["response"]
    chat_memory.append((question, answer))
    return answer

