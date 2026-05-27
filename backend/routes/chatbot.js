// routes/chatbot.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const EXTERNAL_URL = "https://chatbot.sqnsportfolio.com/ask";

router.post("/chatbot", async (req, res) => {
  const { messages } = req.body;
  if (!Array.isArray(messages)) {
    return res.status(400).json({ success: false, error: "Invalid 'messages' array." });
  }

  // get the last user sentence
  const lastUser = [...messages].reverse().find(m => m.role === "user");
  const question  = lastUser?.parts?.[0]?.text ?? "";

  try {
    // 1️⃣  Cloud-Run LLM
    const { data: bot } = await axios.get(EXTERNAL_URL, {
      params: { question }
    });

    const botText = bot.text || bot.answer || "No response";

    // 2️⃣  Text-to-Speech (unchanged)
    const { data: audioBuf } = await axios.post(
      process.env.TTS_API_URL,           // already configured
      { text: botText },
      { responseType: "arraybuffer" }
    );
    const audioBase64 = Buffer.from(audioBuf, "binary").toString("base64");

    // 3️⃣  Send back to React
    res.json({ success: true, text: botText, audioUrl: `data:audio/mpeg;base64,${audioBase64}` });
  } catch (err) {
    console.error("Chatbot proxy error:", err?.response?.data || err.message);
    res.status(500).json({ success: false, error: "Chatbot service error." });
  }
});

export default router;