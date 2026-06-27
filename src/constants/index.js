import {
  exp,
  c,
  react,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  trinity ,
  NotesStoreapp,
  ECommerceProduct,
  OnlineVotingApplication,
  threejs,
  WeatherDataAnalysis,
  CLOUDSTREAMING,
  abhinav ,
  chatApplication,
  OrangeItech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Java", icon: java },
  { title: "React", icon: react },
  { title: "C++", icon: cpp },
  { title: "C", icon: c },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Full stack Java developer Course",
    company_name: "in Orange Itech",
    icon: OrangeItech,
    iconBg: "#161329",
    date: "2023 - 2024",
    points: [
      "I have successfully completed a Full Stack Java Developer course at Orange Itech, gaining expertise in both front-end and back-end technologies",
      "This training has equipped me with practical skills to build and manage end-to-end web applications efficiently.",
    ],
  },
  {
  title: "internship",
    company_name: "Definitics Software Solutions Pvt Ltd",
    icon: exp ,
    iconBg: "#161329",
    date: "2025",
    points: [
      "I am part of Definitics Software Solutions Pvt Ltd, a Pune-based company ",
      "he firm delivers lean, agile IT services with expertise in software product development, incubation, UX design, and test engineering.",
    ],
  },

  {
    title: "BCA",
    company_name: "Abhinav Education Society's College of Arts and Commerce",
    icon: abhinav ,
    iconBg: "#161329",
    date: "2022 -  2024",
    points: [
      "I have completed my Bachelor of Computer Applications (BCA) at Abhinav Education Society's College of Arts and Commerce, where I built a strong foundation in computer science and programming.",
      "This academic journey has enhanced my technical skills and prepared me for advanced studies and professional opportunities in IT.",
    ],
  },
  {
    title: "MCA",
    company_name: "Trinity College ",
    icon: trinity ,
    iconBg: "#161329",
    date: " 2025 -  2026",
    points: [
      "I am currently pursuing my Master of Computer Applications (MCA) at Trinity College, where I am deepening my knowledge of advanced computer science concepts and professional practices.",
      "This ongoing study is helping me strengthen my expertise in software development and prepare for a successful career in the IT industry.",
    ],
  },
];

export const projects = [
  {
    name: "Notes Store App",
    description:
      "A simple and effective Notes Management Web Application developed using Java (Servlets/JSP) and HTML/CSS. This project allows users to create, view, and delete notes through a browser interface.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: NotesStoreapp,
    source_code_link: "https://github.com/sarthak425/Notes-Store-app",
  },
  {
    name: "E Commerce Product",
    description:
      "E-Commerce Product Catalog (React + Spring Boot) This project is a full-stack E-Commerce Product Catalog Application built using React for the frontend and Spring Boot for the backend. It allows users to browse, filter, and search through products, view them by categories, and manage a simple cart interface.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Css", color: "pink-text-gradient" },
    ],
    image: ECommerceProduct,
    source_code_link: "https://github.com/sarthak425/E-Commerce-Product",
  },
  {
    name: "Weather Data Analysis",
    description:
      "The Weather Data Analysis Dashboard is a frontend data analytics application built using React that processes and visualizes weather data of major Indian cities. The application reads weather records from a CSV file, cleans and structures the data, and performs statistical analysis on parameters such as temperature, humidity, wind speed, and precipitation.",
    tags: [
      { name: "JavaScript ", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "HTML5", color: "pink-text-gradient" },
    ],
    image: WeatherDataAnalysis,
    source_code_link:
      "https://github.com/sarthak425/Weather-Data-Analysis-Dashboard",
  },
  {
    name: "Online Voting Application",
    description:
      "A full-stack Voting Application that allows users to create polls, vote on options, and view real-time results. The backend is built with Spring Boot, and the frontend is developed using [React or Angular — replace this].",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },],
    image: OnlineVotingApplication,
    source_code_link: "https://github.com/sarthak425/Online-Voting-Application-Spring-Boot-Angular-",
  },
  {
    name: "Chat Application",
    description:
      "This project is a simple real-time chat application built with Spring Boot, WebSockets, SockJS, STOMP, and Bootstrap for frontend styling. It allows users to exchange messages instantly in a responsive web interface.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Spring Boot 3.5", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: chatApplication,
    source_code_link: "https://github.com/sarthak425/chat-Application-using-Spring-Boot-and-WebSockets",
  },
  {
    name: "Cloud Streeaming",
    description:
      "CLOUD-STREAMING project is a web-based movie management system built with Java and HTML, allowing users to  search, and watch movies. It’s essentially a demo of a streaming-style platform, similar in concept to Netflix or Amazon Prime",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "Css", color: "pink-text-gradient" },
    ],

    image: CLOUDSTREAMING,
    source_code_link: "https://github.com/sarthak425/CLOUD-STREAMING",
  },
];
