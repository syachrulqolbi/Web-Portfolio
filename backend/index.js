import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import ttsRoutes from "./routes/tts.js";
import sttRoutes from "./routes/stt.js";
import chatbotRoutes from "./routes/chatbot.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = (
  process.env.FRONTEND_ORIGINS ||
  "https://www.sqnsportfolio.com,https://sqnsportfolio.com,http://localhost:3000"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend-service",
    message: "Portfolio backend API is running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend-service",
  });
});

app.use("/api", ttsRoutes);
app.use("/api", sttRoutes);
app.use("/api", chatbotRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.path,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server running on port ${PORT}`);
});
