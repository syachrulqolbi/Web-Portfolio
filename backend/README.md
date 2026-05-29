# Backend Service

Node.js Express API gateway for the portfolio.

## Endpoints

- `GET /health`
- `POST /api/chatbot`
- `POST /api/stt`
- `POST /api/tts`

## Environment Variables

See `.env.example`.

`CHATBOT_API_URL` should point to:

```text
https://chatbot.sqnsportfolio.com/ask
```

The Google Speech-to-Text and Text-to-Speech clients use Cloud Run service account credentials. Do not copy `gcp-key.json` into the Docker image.
