FROM node:22-alpine

WORKDIR /app

RUN npm install -g npm@11.15.0 \
    && npm config set update-notifier false \
    && npm config set fund false \
    && npm config set audit false

COPY package*.json ./

RUN npm ci --omit=dev --no-audit --no-fund

COPY --chown=node:node . .

USER node

EXPOSE 8080

CMD ["node", "index.js"]
