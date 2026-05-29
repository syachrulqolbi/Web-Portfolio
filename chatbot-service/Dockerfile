FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV VIRTUAL_ENV=/home/appuser/venv
ENV PATH="/home/appuser/venv/bin:$PATH"

WORKDIR /app

RUN useradd --create-home --shell /bin/bash appuser

COPY requirements.txt .

RUN chown -R appuser:appuser /app

USER appuser

RUN python -m venv $VIRTUAL_ENV \
    && python -m pip install --upgrade pip==26.1.1 \
    && python -m pip install --no-cache-dir -r requirements.txt

COPY --chown=appuser:appuser . .

EXPOSE 8080

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8080}"]
