import React, { useState } from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Chatbot from './components/chatbot/Chatbot';

// 🟢 Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <Header />

      <main className='main'>
        <Home setShowChatbot={setShowChatbot} />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />

      {/* Chatbot */}
      <Chatbot showChatbot={showChatbot} setShowChatbot={setShowChatbot} />

      {/* Toast Container for global notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;