from fastapi import FastAPI
from pydantic import BaseModel
from chatbot import ask

app = FastAPI(title="Portfolio Chatbot Service")


class AskRequest(BaseModel):
    question: str


@app.get("/ping")
def ping():
    return {"status": "ok", "service": "chatbot-service"}


@app.get("/")
def root():
    return {"status": "ok", "message": "Portfolio chatbot service is running"}


@app.post("/ask")
def ask_post(payload: AskRequest):
    answer = ask(payload.question)
    return {"answer": answer}


@app.get("/ask")
def ask_get(question: str):
    answer = ask(question)
    return {"answer": answer}