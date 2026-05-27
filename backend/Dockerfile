# Use Node.js LTS version
FROM node:20

# Create and set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install ffmpeg for audio processing
#RUN apt-get update && apt-get install -y ffmpeg

# Copy the rest of your application
COPY . .

# Copy Google credentials (adjust filename)
COPY gcp-key.json /workspace/gcp-key.json

# Expose the port Cloud Run expects
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]
