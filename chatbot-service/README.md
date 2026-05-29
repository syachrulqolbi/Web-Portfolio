# Chatbot Service

Python FastAPI service for the portfolio chatbot.

## Endpoints

- `GET /ping`
- `GET /ask?question=...`
- `POST /ask` with `{ "question": "..." }`

## Environment Variables

See `.env.example`.

Use Secret Manager for `GOOGLE_API_KEY` in Cloud Run. Do not commit `env.yaml`, `.env`, API keys, or generated FAISS indexes.
