import { useEffect, useRef, useState, useCallback } from "react";
import { toast } from "react-toastify";
import ChatbotIcon  from "./ChatbotIcon";
import ChatForm     from "./ChatForm";
import ChatMessage  from "./ChatMessage";
import "./chatbot.css";

/* ────────────────────────────────────────────────────────────── */
/* Helper: detect iOS (Safari autoplay restriction)              */
const isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

const Chatbot = ({ showChatbot, setShowChatbot }) => {
  /* refs */
  const chatBodyRef     = useRef(null);
  const currentAudioRef = useRef(null);

  /* state */
  const [chatHistory, setChatHistory] = useState([
    { role: "user", text: "Hi Syachrul 👋" }
  ]);
  const [isLoading,   setIsLoading]   = useState(false);   // cold-start spinner
  const [pendingAudio, setPendingAudio] = useState(null);  // iOS manual-play

  /* utils */
  const stopCurrentAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
  };

  /* ────────────────────────────────────────────────────────── */
  const generateBotResponse = useCallback(async (history) => {
    stopCurrentAudio();

    /* 1️⃣  show ONE “Thinking…” bubble */
    setChatHistory(prev =>
      prev.length && prev[prev.length - 1].text === "Thinking..."
        ? prev
        : [...prev, { role: "model", text: "Thinking..." }]
    );

    const swapThinkingFor = (text, isError = false) => {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "Thinking..."),
        { role: "model", text, isError }
      ]);
    };

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://backend.sqnsportfolio.com";
      const res = await fetch(`${API_BASE_URL}/api/chatbot`, {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body   : JSON.stringify({
          messages: history.map(({ role, text }) => ({
            role,
            parts: [{ text }]
          }))
        })
      });

      const raw  = await res.text();
      const data = JSON.parse(raw);

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Chatbot service returned error.");
      }

      /* 2️⃣  replace placeholder */
      swapThinkingFor(data.text?.trim() || "No response from chatbot.");

      /* 3️⃣  Text-to-Speech */
      if (data.audioUrl) {
        const audio = new Audio(data.audioUrl);
        audio.setAttribute("playsinline", "");   // iOS must-have

        let played = false;
        try {
          if (isiOS) {
            await audio.play();                 // may throw
            played = true;
          } else {
            audio.play();
            played = true;
          }
        } catch (e) {
          if (e.name !== "NotAllowedError") throw e;
        }

        if (played) {
          currentAudioRef.current = audio;
        } else {
          // iOS blocked autoplay – ask user to tap ▶
          setPendingAudio(audio);
          toast.info("Tap ▶ to hear the reply");
        }
      } else {
        toast.warn("Audio unavailable for this reply.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Oops! Something went wrong.");
      swapThinkingFor(
        "Sorry, something went wrong. Please try again later.",
        true
      );
    }
  }, []);

  /* Cold-start on first open */
  useEffect(() => {
    if (showChatbot && chatHistory.length === 1) {
      (async () => {
        setIsLoading(true);
        await generateBotResponse(chatHistory);
        setIsLoading(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showChatbot]);

  /* auto-scroll */
  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [chatHistory]);

  /* ───────── JSX ───────── */
  return (
    <div
      id="chatbot-container"
      className={`container ${showChatbot ? "show-chatbot" : ""}`}
    >
      <div className="chatbot-popup">
        {/* header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatbot(prev => !prev)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* body */}
        {isLoading ? (
          <div className="chatbot-loading-container"><div className="loader" /></div>
        ) : (
          <div ref={chatBodyRef} className="chat-body">
            {chatHistory.map((chat, idx) => (
              <ChatMessage key={idx} chat={chat} />
            ))}
          </div>
        )}

        {/* footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />

          {/* ▶ button appears only when iOS blocked autoplay */}
          {pendingAudio && (
            <button
              className="material-symbols-rounded play-audio"
              title="Play reply"
              onClick={async () => {
                try {
                  await pendingAudio.play();
                  currentAudioRef.current = pendingAudio;
                  setPendingAudio(null);
                } catch {
                  toast.error("Still couldn’t play audio.");
                }
              }}
            >
              play_arrow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;