import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import speech from "@google-cloud/speech";

const router = express.Router();
const client = new speech.SpeechClient();
const upload = multer({ dest: "uploads/" });

router.post("/stt", upload.single("audio"), async (req, res) => {
  try {
    const audioFilePath = path.join(req.file.destination, req.file.filename);
    const file = fs.readFileSync(audioFilePath);
    const audioBytes = file.toString("base64");

    const audio = { content: audioBytes };
    const config = {
      encoding: "WEBM_OPUS",
      sampleRateHertz: 48000,
      languageCode: "en-US",
    };

    const request = { audio, config };
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map((result) => result.alternatives[0].transcript)
      .join("\n");

    fs.unlinkSync(audioFilePath);

    res.json({ transcript: transcription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to transcribe audio" });
  }
});

export default router;
