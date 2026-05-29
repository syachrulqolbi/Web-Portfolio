import express from "express";
import textToSpeech from "@google-cloud/text-to-speech";

const router = express.Router();
const ttsClient = new textToSpeech.TextToSpeechClient();

router.post("/tts", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "Text is required." });
    }

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
    return res.send(response.audioContent);
  } catch (error) {
    console.error("Error in /api/tts:", error);
    return res.status(500).json({ error: "Failed to synthesize speech" });
  }
});

export default router;
