import React from "react";
import ChatbotIcon from "../chatbot/ChatbotIcon";

const Data = ({ setShowChatbot }) => {
  const handleAskMeClick = (e) => {
    e.preventDefault();
    setShowChatbot((prev) => !prev);
  };

  return (
    <div className="home__data">
      <h1 className="home__title">Syachrul Qolbi Nur Septi</h1>
      <h3 className="home__subtitle">Data Scientist</h3>
      <p className="home__description">
        Data Scientist with two years of experience in the telecommunications
        industry, holding a Master of Data Science from the University of
        Technology Sydney. Skilled in leveraging technologies such as Python,
        MySQL, Tableau, and Airflow to drive insights and develop innovative
        solutions. Particularly strong in data mining, machine learning, and
        deep learning, with a growing interest in generative AI. Seeking
        opportunities to apply advanced data science techniques and contribute
        to impactful projects.
      </p>

      <a
        href="#chatbot"
        className="button button--flex"
        onClick={handleAskMeClick}
        title="Powered by Gemini – your AI FAQ companion!"
      >
        Ask Me
        <ChatbotIcon
          width={24}
          height={24}
          fill="#fff"
          style={{ marginLeft: "0.5rem" }}
          className="button__icon"
        />
      </a>
    </div>
  );
};

export default Data;
