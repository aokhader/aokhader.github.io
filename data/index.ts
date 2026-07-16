// Single source of truth for all site content.
// Sourced from Abdulaziz's resume (July 2026) + earlier roles kept from LinkedIn.

export const site = {
  name: "Abdulaziz Khader",
  firstName: "Abdulaziz",
  role: "Software Engineer",
  headline: "I build software that makes algorithms visible",
  subhead:
    "Computer Engineering at UC San Diego, building machine-learning systems that ship — from enterprise LLM tooling to models running offline on edge hardware.",
  motto: "build some. break some more. repeat.",
  location: "San Diego, CA",
  email: "akhader@ucsd.edu",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/aokhader",
  linkedin: "https://www.linkedin.com/in/abdulaziz-khader/",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export type Experience = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  current?: boolean;
  bullets: string[];
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "BMC Software",
    title: "Software Engineering Intern",
    dates: "Jun 2025 — Aug 2025",
    location: "Santa Clara, CA",
    bullets: [
      "Created an AIOps tool that integrates customers' ServiceNow data with BMC's existing products into a universal hub — a 17%+ projected revenue increase and 100,000+ expected new users.",
      "Used LangChain and LangGraph to process customer databases through CRUD tools over ServiceNow's REST API; hosted and optimized an ASGI web server for 60% faster real-time updates.",
      "Built a semantic model to dynamically parse data configurations, redesigning 1,000+ lines of code into a tool factory that extends to other products such as Salesforce.",
    ],
  },
  {
    company: "Product Manager Accelerator",
    title: "Software Engineering Intern",
    dates: "Sep 2024 — Dec 2024",
    location: "Remote",
    bullets: [
      "Built a full-stack web app integrating reinforcement learning with a scalable database to evaluate chess games and surface move patterns and historical trends.",
      "Integrated frontend workflows with Flask REST APIs, LangChain, and Google Gemini for seamless delivery of chess insights, improving analysis response time.",
      "Deployed a Supabase database of chess positions, cutting duplicate lookups and retrieval latency by 40%.",
    ],
    link: "https://github.com/aokhader/chessmate",
  },
  {
    company: "Ocelot",
    title: "AI Studio Fellow",
    dates: "Aug 2024 — Dec 2024",
    location: "Remote",
    bullets: [
      "Improved tone accuracy 30% over a GPT-2 baseline by building a sentiment-conditioned LLM for student mental-health conversations, scoring 4.1/5.0 on appropriateness in human evaluation.",
      "Cut a 7B-parameter model's memory footprint from 14 GB to 3.5 GB with 4-bit quantization while preserving 98% model quality, enabling real-time inference on local hardware via Gradio.",
      "Accelerated the development cycle 82% through CUDA optimization — training from 8 hours down to 30 minutes across 5,600+ multi-domain samples with a stratified evaluation framework.",
    ],
    link: "https://github.com/aokhader/OcelotBot",
  },
  {
    company: "Break Through Tech AI at UCLA",
    title: "AI Fellow",
    dates: "2023 — 2024",
    bullets: [
      "Implemented machine and deep learning models, including CNNs and ensemble methods, through an industry-partnered AI studio program.",
    ],
  },
  {
    company: "UC San Diego",
    title: "Instructional Assistant",
    dates: "2023 — 2024",
    bullets: [
      "Assisted in the instruction and assessment of 800+ students in advanced topics using C.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  dates?: string;
  award?: string;
  featured?: boolean;
  repo?: string;
  live?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "RoboRanger",
    award: "Best Edge AI & ElevenLabs Award",
    featured: true,
    dates: "Apr 2026 — Present",
    description:
      "A fully offline field guide on an Arduino Uno Q: a MobileNetV3 image classifier paired with a quantized SmolLM2-360M LLM and a RAG pipeline over sqlite-vec — everything under 1B parameters on the edge, with an LLM-assisted data curation pipeline and a networked ElevenLabs voice fallback.",
    tech: ["Python", "C++", "TFLite", "llama.cpp", "RAG"],
    repo: "https://github.com/aokhader/RoboRanger",
  },
  {
    title: "YouPresent",
    award: "Presented at AWE XR 2025",
    featured: true,
    dates: "Apr 2025 — Feb 2026",
    description:
      "A Unity VR app for practicing public speaking: Google Gemini analyzes gaze, hand motion, and delivery in real time, and an AI-driven coach with a rigged, reactive audience turns it into personalized feedback — including recordings with your own speaker avatar.",
    tech: ["Unity", "C#", "Meta XR", "Google Gemini"],
  },
  {
    title: "Visual Graph Algorithms",
    description:
      "Graph algorithms such as BFS and strongly connected components, implemented in C++ and visualized step by step in the browser.",
    tech: ["C++", "React", "TypeScript"],
    repo: "https://github.com/aokhader/GraphAlgorithms",
    image: "/Graphs_2.png",
  },
  {
    title: "DevJournal",
    description:
      "Full-stack developer journal for tracking daily progress, with tasks and action items surfaced in a calendar view.",
    tech: ["JavaScript", "HTML", "CSS", "Figma"],
    repo: "https://github.com/cse110-sp24-group21/cse110-sp24-group21",
    image: "/DevJournal.png",
  },
  {
    title: "Huffman Coding Encryption",
    description:
      "File compression and encryption with the Huffman coding algorithm — up to 25% less space on smaller files.",
    tech: ["C++", "Algorithms"],
    image: "/Huffman.png",
  },
  {
    title: "YouTubeOffline",
    description:
      "Command-line YouTube video downloader built with PyTube and MoviePy — pass links in a text file or straight into the terminal.",
    tech: ["Python", "PyTube", "MoviePy"],
    repo: "https://github.com/aokhader/YouTubeOffLine",
    image: "/YTOffline.png",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "C/C++", "C#", "Go", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    label: "ML & LLMs",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "LangChain",
      "LangGraph",
      "CUDA",
      "NLTK",
      "spaCy",
    ],
  },
  {
    label: "Serving & Edge",
    items: ["llama.cpp", "Ollama", "vLLM", "FastAPI", "TFLite"],
  },
  {
    label: "Web & Infra",
    items: ["React", "Next.js", "MySQL", "GCP", "Docker", "Puppeteer"],
  },
];

export const education = {
  school: "University of California, San Diego",
  degree: "B.S. Computer Engineering · Minor in Mathematics",
  dates: "June 2026 · GPA 3.7/4.0",
  seal: "/UCSD_Seal.png",
};

export const about = {
  paragraphs: [
    "I'm a computer engineering student at UC San Diego (with a math minor) who likes the moment an abstract model becomes something you can use — a chess coach that explains your blunders, a VR audience that reacts to your talk, a field guide answering questions offline from a microcontroller.",
    "Most recently that meant a summer at BMC Software building LLM-powered AIOps tooling with LangChain and LangGraph. I care about the whole path from model to product: quantization, retrieval, serving, and the application people actually touch.",
  ],
};
