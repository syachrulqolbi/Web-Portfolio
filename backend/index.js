import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ttsRoutes from "./routes/tts.js";
import sttRoutes from "./routes/stt.js";
import chatbotRoutes from "./routes/chatbot.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: ["https://www.sqnsportfolio.com", "https://sqnsportfolio.com", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(
  express.json({
    strict: true,
    verify: (req, res, buf) => {
      try {
        JSON.parse(buf);
      } catch (e) {
        res.status(400).json({ success: false, error: "Invalid JSON format" });
        throw Error("Invalid JSON");
      }
    },
  })
);

app.use("/api", ttsRoutes);
app.use("/api", sttRoutes); 
app.use("/api", chatbotRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
