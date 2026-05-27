const educationData = [
  {
    title: "Master of Data Science and Decision",
    subtitle: "University of Technology Sydney",
    date: "2023 - 2025",
    details: [
      "Achieved a Distinction grade with a capstone project on Sign Language Recognition, and was recognized with a Postgraduate Academic Excellence and International Scholarship Award.",
      {
        type: "image",
        src: "/assets/award_uts.jpg",
        alt: "UTS TD School Best Project Award",
      },
      {
        type: "caption",
        text: "Awarded Best Project in MDSI Innovation Labs 2024.",
      },
    ],
  },

  {
    title: "Machine Learning Pathway",
    subtitle: "Bangkit Academy by Google",
    date: "2021 - 2021",
    details: [
      "Successfully developed the Paddy Care App, an innovative solution for Paddy Leaf Disease Detection that seamlessly integrates Machine Learning, Mobile Development, and Cloud Computing. Contributed as part of a dynamic 6-member team (Lemon Drops) to bring this project to life.",
      {
        type: "image",
        src: "/assets/award_bangkit.jpg",
        alt: "Bangkit Certificate - Machine Learning Path",
      },
      {
        type: "caption",
        text: "Graduation certificate from Bangkit Academy, Machine Learning Pathway.",
      },
    ],
  },
  {
    title: "Bachelor of Mathematics",
    subtitle: "Padjadjaran University",
    date: "2017 - 2021",
    details: [
      "Graduated with a GPA of 3.39, actively involved in music societies, and awarded the PPA Reguler Scholarship. My research topic focused on Face Recognition, blending data science and computer vision.",
      {
        type: "image",
        src: "/assets/award_workshop_speaker.jpg",
        alt: "Workshop Data Science as Speaker",
      },
      {
        type: "caption",
        text: "Speaker at a Data Science Workshop, teaching data analysis and visualization using Python.",
      },
      {
        type: "image",
        src: "/assets/award_tutor.jpg",
        alt: "Academic Tutor Himatika FMIPA Unpad Certificate",
      },
      {
        type: "caption",
        text: "Academic tutor for Financial Mathematics and Probability Statistics, supporting fellow students in 2020.",
      },
    ],
  },
];

const experienceData = [
  {
    title: "Data Scientist",
    subtitle: "Telkom Indonesia",
    date: "2022 - 2024",
    details: [
      "Contributed to data-driven initiatives and process automation within Tribe Consumer Internal CED and MyIndihomeX. Projects focused on identifying high-demand areas for fixed-broadband services, analyzing customer profiles, and providing targeted sales recommendations. Tools used included Tableau, Airflow, and Langchain for chatbot development.",
      "Project Highlights:",
      {
        type: "list",
        items: [
          "Identified high-demand areas for internet fixed-broadband using spatial analysis.",
          "Analyzed customer profiles based on usage consumption to determine key characteristics.",
          "Developed the Smart Sales Project to identify target areas for focused sales efforts.",
          "Visualized internet demand and sales data in Tableau using spatial approaches.",
          "Managed and automated workflows with Airflow for process efficiency.",
          "Created a Langchain-powered chatbot to handle FAQs effectively.",
        ],
      },
    ],
  },
  {
    title: "Data Scientist Intern",
    subtitle: "Telkom Indonesia",
    date: "2021 - 2022",
    details: [
      "Placed in Tribe Consumer Internal CEDDuring my time in Tribe Consumer Internal CED, I contributed to data-driven projects focused on understanding customer behavior and boosting service quality.",
      "Project Highlight:",
      {
        type: "list",
        items: [
          "Developed a Churn Prediction Project, leveraging data-driven insights to proactively identify customers likely to churn, enabling strategic retention initiatives and fostering stronger customer relationships.",
        ],
      },
    ],
  },
  {
    title: "Research Assistant",
    subtitle:
      "Artificial Intelligence and Big Data Research Center Padjadjaran University",
    date: "2021 - 2021",
    details: [
      "Conducted research on COVID-19 detection using chest X-ray images and developed a paper that combined Inception ResNet-V2 for COVID-19 detection and Fisherface-based face recognition (PCA and LDA techniques). Successfully submitted this work to the ICAIBDA 2021 International Conference on Artificial Intelligence and Big Data Analysis.",
      {
        type: "image",
        src: "/assets/award_icaibda.jpg",
        alt: "ICAIBDA's Participant",
      },
      {
        type: "caption",
        text: "Presented projects on face recognition with SVM and COVID-19 detection with deep learning.",
      },
    ],
  },
  {
    title: "Laboratory Assistant",
    subtitle: "Department Mathematics Padjadjaran University",
    date: "2020 - 2021",
    details: [
      "Led the development of a website project for learning activities and provided instruction in programming languages such as C++, MySQL, SPSS, Maple, R, and Scilab. Additionally, I assessed students’ performance in mathematics, ensuring their understanding through practical assignments and tests.",
    ],
  },
];

export { educationData, experienceData };
