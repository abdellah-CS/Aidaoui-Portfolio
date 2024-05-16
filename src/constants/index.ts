import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  khadmoney,
  portfolio,
  threejs,
  world,
  wordpress,
  apextech,
  khadmoneyacademy,
  apextech1,
  apextech2,
  apextech3,
  apextech4,
  apextech5,
  khadmoney1,
  khadmoney2,
  khadmoney3,
  khadmoney4,
  khadmoney5,
  homework, 
  homework1, 
  homework2, 
  homework3,
  homework4, 
  homework5, 
  homework6, 
  homework7
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
];

const technologiesOne: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const technologiesTwo: TTechnology[] = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
];

const experiences: TExperience[] = [
  {
    title: "Instructor - ReactJS Frontend Course",
    companyName: "Khadmoney Academy",
    icon: khadmoney,
    iconBg: "rgb(29, 24, 54)",
    date: "February 2024 - Until Now",
    points: [
      "Designed and delivered comprehensive curriculum for ReactJS frontend development course.",
      "Provided guidance and support to students through code reviews, & Evaluated student progress and provided constructive feedback",
     ],
  },
  {
    title: "Full Stack Web Developer",
    companyName: "Khadmoney",
    icon: khadmoney,
    iconBg: "rgb(29, 24, 54)",
    date: "2023 - Until Now",
    points: [
      "Developed scalable and responsive web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      "Built engaging UIs with React.js, employing modern frontend techniques.",
      "Engineered Node.js and Express.js APIs for efficient client-server interaction and data handling.",
     ],
  },
  {
    title: "Full Stack Web Developer",
    companyName: "Freelance",
    icon: world,
    iconBg: "white",
    date: "2023 - Until Now",
    points: [
      "Developing and maintaining web applications using the MERN Technologies.",
      "Developing and maintaining Wordpress websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
     ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    image: apextech,
    name: "APEX TECH",
    category: "Wordpress",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    techs: ["Woocommerce", "PHP", "MySQL"],
    websiteImages: [apextech1, apextech2, apextech3,apextech5, apextech4],
    client: "Aidaoui Abdellah",
    websiteLink: "https://apextech.rf.gd",
    sourceCodeLink: "https://github.com/",
  },
  {
    image: homework,
    name: "My Homework",
    category: "MERN Stack Web Application",
    description:
      "Web application for Streamline homework management, courses organization, provide feedback, view marks, and communicate effortlessly between teachers and students",
    techs: ["ExpressJS", "NodeJS", "ReactJS", "MongoDB", "Redux"],
    websiteImages: [homework1, homework2, homework3,homework4, homework5, homework6, homework7],
    client: "Mohammed Mouzaoui",
    websiteLink: null,
    sourceCodeLink: "https://github.com/",
  },
  {
    image: portfolio,
    name: "My Portfolio",
    category: "API Powered Frontend Website",
    description:
      "Web application for Streamline homework management, courses organization, provide feedback, view marks, and communicate effortlessly between teachers and students",
    techs: ["ReactJS", "TypeScript", "ThreeJS", "Tailwind CSS"],
    websiteImages: null,
    client: "(A Developer)",
    websiteLink: "/",
    sourceCodeLink: "https://github.com/",
  },
  {
    image: khadmoneyacademy,
    name: "Khadmoney Academy",
    category: "Wordpress",
    description:
      "Crafted a Learning Management System akin to Udemy, enriched with event collaboration capabilities. Elevated website UX/UI for seamless navigation and engagement.",
    techs: ["Woocommerce", "PHP", "MySQL"],
    websiteImages: [khadmoney1, khadmoney2, khadmoney3,khadmoney4, khadmoney5],
    client: "Mohammed Mouzaoui",
    websiteLink: "https://khadmoneyacademy.com",
    sourceCodeLink: null,
  },
];

export { services, technologiesOne, technologiesTwo, experiences, testimonials, projects };
