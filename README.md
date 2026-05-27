# Syachrul Qolbi Portfolio Website

Personal portfolio website showcasing my background, skills, data science projects, machine learning work, and AI-powered web application experience.

## Live Website

https://www.sqnsportfolio.com

## Backend API

https://backend.sqnsportfolio.com

## Overview

This portfolio is a React + Vite frontend for my personal data science portfolio. It includes project showcases, skills, services, contact information, and an AI FAQ chatbot interface connected to a backend API.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Docker
- Nginx
- Google Cloud Run

## Main Features

- Responsive personal portfolio website
- Project showcase with detailed modal views
- Skills and services sections
- Contact section
- AI FAQ chatbot frontend integration
- Production Docker setup for Cloud Run

## Running Locally

```bash
cd frontend
npm install
npm start
```

The website runs at:

```text
http://localhost:3000
```

## Environment Variables

Create a local `.env` file inside `frontend/`:

```env
VITE_API_BASE_URL=https://backend.sqnsportfolio.com
```

Do not commit `.env` files.

## Build

```bash
cd frontend
npm run build
```

## Docker Build

```bash
cd frontend
docker build -t portfolio-frontend .
```

## Notes

Backend/chatbot API files are kept in this repository for integration, but secrets, `node_modules`, build outputs, and local environment files are excluded from Git.
