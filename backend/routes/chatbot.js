import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const CHATBOT_API_URL =
  process.env.CHATBOT_API_URL || "https://chatbot.sqnsportfolio.com/ask";

const TTS_API_URL = process.env.TTS_API_URL || "http://localhost:8080/api/tts";

router.post("/chatbot", async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages)) {
    return res.status(400).json({ success: false, error: "Invalid 'messages' array." });
  }

  const lastUser = [...messages].reverse().find((message) => message.role === "user");
  const question = lastUser?.parts?.[0]?.text ?? "";

  if (!question.trim()) {
    return res.status(400).json({ success: false, error: "Question is required." });
  }

  try {
    const { data: chatbotResponse } = await axios.post(CHATBOT_API_URL, { question });
    const botText = chatbotResponse.text || chatbotResponse.answer || "No response";

    let audioUrl = null;

    try {
      const { data: audioBuffer } = await axios.post(
        TTS_API_URL,
        { text: botText },
        { responseType: "arraybuffer" }
      );

      const audioBase64 = Buffer.from(audioBuffer, "binary").toString("base64");
      audioUrl = `data:audio/mpeg;base64,${audioBase64}`;
    } catch (ttsError) {
      console.error("TTS error:", ttsError?.response?.data || ttsError.message);
    }

    return res.json({ success: true, text: botText, audioUrl });
  } catch (error) {
    console.error("Chatbot proxy error:", error?.response?.data || error.message);
    return res.status(500).json({ success: false, error: "Chatbot service error." });
  }
});

export default router;
