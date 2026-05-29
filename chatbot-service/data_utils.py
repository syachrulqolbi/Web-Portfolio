from __future__ import annotations

import os
import shutil
import tempfile
from typing import List

import requests
from langchain_community.document_loaders import PyPDFLoader, UnstructuredURLLoader
from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

CV_URL = os.environ["CV_URL"]
LINKEDIN_URL = os.getenv("LINKEDIN_URL", "https://www.linkedin.com/in/syachrulqolbi/")
INDEX_DIR = os.getenv("INDEX_DIR", "/tmp/chatbot-portfolio-index")


def _download_pdf(url: str) -> str:
    with requests.get(url, stream=True, timeout=60) as response, tempfile.NamedTemporaryFile(
        delete=False, suffix=".pdf"
    ) as tmp:
        response.raise_for_status()
        shutil.copyfileobj(response.raw, tmp)
        return tmp.name


def split_docs(docs):
    return RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200).split_documents(docs)


def build_corpus() -> List:
    pdf = _download_pdf(CV_URL)
    try:
        docs = PyPDFLoader(pdf).load()
    finally:
        os.remove(pdf)

    try:
        docs += UnstructuredURLLoader([LINKEDIN_URL]).load()
    except Exception as exc:
        print(f"LinkedIn fetch failed: {exc}", flush=True)

    return split_docs(docs)


def get_store(embeddings: GoogleGenerativeAIEmbeddings) -> FAISS:
    if os.path.isdir(INDEX_DIR) and os.listdir(INDEX_DIR):
        print("Loading existing FAISS index...", flush=True)
        return FAISS.load_local(INDEX_DIR, embeddings, allow_dangerous_deserialization=True)

    print("Building FAISS index...", flush=True)
    docs = build_corpus()

    if not docs:
        raise RuntimeError("No documents were loaded for chatbot retrieval.")

    store = FAISS.from_documents(docs, embeddings)
    store.save_local(INDEX_DIR)
    print("FAISS index ready.", flush=True)
    return store