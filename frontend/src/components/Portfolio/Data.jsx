import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import Work6 from "../../assets/work6.jpg";
import Work7 from "../../assets/work7.jpg";
import Work8 from "../../assets/work8.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Sign Language Recognition (Maintenance)",
    category: "app",
    demo: false,
    repo: true,
    href_demo: "https://sqnsportfolio.com/signlanguagerecognition",
    href_repo: "https://github.com/syachrulqolbi/Sign-Language-Recognition",
    details: [
      {
        type: "paragraph",
        text: "Real-time sign language recognition using deep learning.",
      },
      {
        type: "paragraph",
        text: "Built with Python, OpenCV, and TensorFlow using Transformer model.",
      },
      {
        type: "list",
        items: [
          "Trained on a custom ASL dataset.",
          "Achieved 95% test accuracy.",
          "Web-based deployment with React frontend.",
        ],
      },
      {
        type: "image",
        src: "/assets/snapshot_sign_language_app.jpg",
        alt: "Sign Language Recognition Demo",
      },
      {
        type: "caption",
        text: "A snapshot of the web app recognizing ASL signs in real time.",
      },
    ],
  },
  {
    id: 2,
    image: Work2,
    title: "SDGs Interlinkages Visualization",
    category: "workplace",
    demo: true,
    repo: false,
    href_demo:
      "https://sdgdiagnostics.data.undp.org/IDN/synergies-and-tradeoffs",
    href_repo: "",
    details: [
      {
        type: "paragraph",
        text: "An interactive tool to visualize synergies and trade-offs between different SDGs in Indonesia.",
      },
      {
        type: "paragraph",
        text: "Built using javascript and RESTful APIs to display dynamic data insights.",
      },
      {
        type: "list",
        items: [
          "Supports policymakers in decision-making.",
          "Highlights critical SDG relationships.",
          "Intuitive and user-friendly interface.",
        ],
      },
      {
        type: "image",
        src: "/assets/snapshot_sdgs_viz.jpg",
        alt: "SDG Visualization Snapshot",
      },
      {
        type: "caption",
        text: "A snapshot showcasing the interactive SDG visualization.",
      },
    ],
  },
  {
    id: 3,
    image: Work3,
    title: "Face Recognition System",
    category: "research",
    demo: false,
    repo: true,
    href_demo: "",
    href_repo:
      "https://github.com/syachrulqolbi/Face-Recognition-System-with-Fisherface-Method-and-Support-Vector-Machine",
    details: [
      {
        type: "paragraph",
        text: "Face recognition system based on Fisherface method with SVM classifier.",
      },
      {
        type: "paragraph",
        text: "Provides high accuracy in distinguishing facial features.",
      },
      {
        type: "list",
        items: [
          "Custom dataset of facial images.",
          "Utilizes PCA and LDA techniques for feature reduction.",
          "Open-source implementation for future enhancements.",
        ],
      },
    ],
  },
  {
    id: 4,
    image: Work4,
    title: "COVID-19 Chest X-Ray Detection",
    category: "research",
    demo: false,
    repo: true,
    href_demo: "",
    href_repo:
      "https://github.com/syachrulqolbi/COVID-19-Detection-from-Chest-X-Ray-Images-Using-Deep-Learning",
    details: [
      {
        type: "paragraph",
        text: "Deep learning model to detect COVID-19 from chest X-ray images.",
      },
      {
        type: "paragraph",
        text: "Based on InceptionResNet-V2 for feature extraction and classification.",
      },
      {
        type: "list",
        items: [
          "Trained on open-source medical datasets.",
          "Achieves high sensitivity and specificity.",
          "Supports radiologists in diagnostic workflows.",
        ],
      },
    ],
  },
  {
    id: 5,
    image: Work5,
    title: "Payment Behaviour Analysis",
    category: "workplace",
    demo: false,
    repo: false,
    href_demo: "",
    href_repo: "",
    details: [
      {
        type: "paragraph",
        text: "An in-depth analysis of customer payment behaviors to enhance collection strategies and reduce risk.",
      },
      {
        type: "paragraph",
        text: "Leveraged classification models and time series forecasting to identify late-payment trends and high-risk customer profiles.",
      },
      {
        type: "list",
        items: [
          "Segmented customers based on their payment patterns and risk levels.",
          "Identified high-risk customers likely to make late payments.",
          "Implemented churn prediction to proactively address customer retention challenges.",
        ],
      },
    ],
  },
  {
    id: 6,
    image: Work6,
    title: "Paddy Leaf Disease Detection",
    category: "app",
    demo: false,
    repo: true,
    href_demo: "",
    href_repo: "https://github.com/Lemon-Drops-Bangkit",
    details: [
      {
        type: "paragraph",
        text: "Mobile app to detect paddy leaf diseases using machine learning.",
      },
      {
        type: "paragraph",
        text: "Collaborative project under Bangkit Academy program.",
      },
      {
        type: "list",
        items: [
          "Trained on paddy leaf disease images dataset.",
          "Provides instant disease classification in the field.",
          "Empowers farmers with actionable insights.",
        ],
      },
    ],
  },
  {
    id: 7,
    image: Work7, 
    title: "Chatbot FAQ (Serina)",
    category: "workplace",
    demo: false,
    repo: false,
    href_demo: "",
    href_repo: "",
    details: [
      {
        type: "paragraph",
        text: "Developed a secure, AI-powered chatbot named Serina for Telkom Indonesia using LangChain, Pinecone, and ChatGPT.",
      },
      {
        type: "paragraph",
        text: "Serina handles frequently asked questions (FAQ) and payment detail inquiries while ensuring no confidential data is shared externally.",
      },
      {
        type: "list",
        items: [
          "Integrated LangChain to manage conversational flows and knowledge retrieval.",
          "Utilized Pinecone as a vector database for fast, relevant responses to user queries.",
          "Implemented ChatGPT to enhance natural language understanding and response generation.",
          "Focused on strict data security measures to prevent sharing confidential information.",
        ],
      },
    ],
  },
  {
    id: 8,
    image: Work8,
    title: "Chatbot FAQ - Personal Website",
    category: "app",
    demo: true,
    repo: false,
    href_demo: "https://www.sqnsportfolio.com",
    href_repo: "",
    details: [
      {
        type: "paragraph",
        text: "An intelligent FAQ chatbot integrated into my personal website to interactively answer questions about my background, projects, and contact details.",
      },
      {
        type: "paragraph",
        text: "This project demonstrates end-to-end LLM deployment, integrating large language models with a scalable backend architecture to enable real-time, context-aware conversational interactions.",
      },
      {
        type: "list",
        items: [
          "Implemented LangGraph for managing dynamic conversation state and flow control.",
          "Integrated Gemini via LangChain to handle semantic understanding and question answering.",
          "Used FastAPI for API routing and chatbot orchestration.",
          "Built Docker containers to streamline deployment and maintain cross-environment compatibility.",
          "Deployed the API to Google Cloud Run (GCP) for scalable and secure access.",
          "Used Python and NodeJS for backend",
          "Frontend built with React, enabling users to interact with the chatbot via speech or text.",
          "Enabled audio transcription using Google Cloud Speech-to-Text and Text-To-Speech for natural feedback.",
        ],
      },
    ],
  }
];

// projects
export const projectsNav = [
  { name: "all" },
  { name: "research" },
  { name: "app" },
  { name: "workplace" },
];
