import express from "express";
import textToSpeech from "@google-cloud/text-to-speech";
import path from "path";

const router = express.Router();

// Initialize TTS client
const ttsClient = new textToSpeech.TextToSpeechClient({
  keyFilename: path.join("./gcp-key.json"),
});

router.post("/tts", async (req, res) => {
  try {
    const { text } = req.body;

    const [response] = await ttsClient.synthesizeSpeech({
      input: { text },
      voice: {
        languageCode: "en-US",
        name: "en-US-Wavenet-B",
        ssmlGender: "MALE",
      },
      audioConfig: { audioEncoding: "MP3" },
    });

    res.set("Content-Type", "audio/mpeg");
    res.send(response.audioContent);
  } catch (error) {
    console.error("Error in /api/tts:", error);
    res.status(500).json({ error: "Failed to synthesize speech" });
  }
});

export default router;