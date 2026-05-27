import { useRef, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "./chatbot.css";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef      = useRef(null);
  const recogRef      = useRef(null);
  const [isListening, setListening] = useState(false);

  /* ---------- helper: push user text & ask bot ---------- */
  const pushAndAsk = useCallback(
    (text) => {
      const cleaned = text.trim();
      if (!cleaned) return;

      const nextHistory = [
        ...chatHistory,
        { role: "user", text: cleaned }
      ];

      /* 1️⃣ show user bubble immediately */
      setChatHistory(nextHistory);

      /* 2️⃣ Chatbot.jsx will append ONE “Thinking…” bubble */
      generateBotResponse(nextHistory);
    },
    [chatHistory, generateBotResponse, setChatHistory]
  );

  /* ---------- mic control ---------- */
  const startListening = () => {
    if (!SpeechRecognition) {
      toast.error("Speech recognition isn’t supported in this browser.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.lang            = "en-US";
    recog.interimResults  = false;
    recog.maxAlternatives = 1;

    recog.onstart = () => setListening(true);

    recog.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      pushAndAsk(transcript);     // send it
      recog.stop();               // 💡 stop immediately
    };

    recog.onerror = (e) => {
      console.error("Mic error:", e.error);
      toast.warn(`Mic error: ${e.error}`);
      setListening(false);
    };

    recog.onend = () => setListening(false);

    recogRef.current = recog;
    recog.start();
  };

  const stopListening = () => {
    recogRef.current?.stop();
    setListening(false);
  };

  /* ---------- UI events ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    const txt = inputRef.current.value;
    inputRef.current.value = "";
    pushAndAsk(txt);
  };

  const handleMicClick = () => {
    isListening ? stopListening() : startListening();
  };

  /* ---------- JSX ---------- */
  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        placeholder={isListening ? "Listening…" : "Message…"}
        disabled={isListening}
        className="message-input"
      />

      {/* Mic button – id matches CSS, turns red while recording */}
      <button
        type="button"
        id="mic-button"
        title={isListening ? "Stop" : "Speak"}
        onClick={handleMicClick}
        className={`material-symbols-rounded ${isListening ? "recording" : ""}`}
      >
        {isListening ? "mic_off" : "mic"}
      </button>

      {/* Send button */}
      <button type="submit" id="send-message" className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;