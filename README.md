# Syachrul Qolbi Portfolio Monorepo

Personal portfolio website and AI chatbot system.

## Live Services

- Website: https://www.sqnsportfolio.com
- Frontend service: `frontend-service`
- Node backend API: https://backend.sqnsportfolio.com
- Python chatbot API: https://chatbot.sqnsportfolio.com

## Architecture

```text
www.sqnsportfolio.com
        ↓
frontend/  → Vite + React + Nginx on Cloud Run
        ↓
backend/   → Node.js API gateway for /api/chatbot, /api/stt, /api/tts
        ↓
chatbot-service/ → Python FastAPI + LangGraph + Gemini + FAISS
```

## Project Structure

```text
Web-Portfolio/
├── frontend/          # React/Vite portfolio website
├── backend/           # Node.js API gateway, Speech-to-Text, Text-to-Speech
├── chatbot-service/   # Python AI chatbot service
├── .gitignore
└── README.md
```

## Local Development

### Frontend

```bash
cd frontend
npm install
npm run build
npm start
```

### Backend

```bash
cd backend
npm install
npm start
```

### Chatbot Service

```bash
cd chatbot-service
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8080
```

## Environment Variables

Do not commit real `.env`, `env.yaml`, service account keys, `node_modules`, build outputs, or generated FAISS indexes.

Safe examples are provided in:

```text
backend/.env.example
chatbot-service/.env.example
```

## Deployment Order

Deploy in this order:

```text
1. chatbot-service
2. backend-service
3. frontend-service
```

The frontend calls the Node backend at `backend.sqnsportfolio.com`. The backend forwards AI questions to `chatbot.sqnsportfolio.com/ask` and also handles STT/TTS.
