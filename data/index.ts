// Single source of truth for all site content — "Player Two, hybrid" (3a).

export const site = {
  name: "Abdulaziz Khader",
  role: "ML / Full-stack Engineer",
  tagline:
    "ML engineer who ships the whole stack — from enterprise AIOps agents at BMC down to a 360M-parameter LLM answering questions offline on an Arduino.",
  heroEyebrow: "// PLAYER 2 HAS ENTERED THE CHAT · SAN DIEGO, CA",
  location: "San Diego, CA",
  email: "akhader@ucsd.edu",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/aokhader",
  linkedin: "https://www.linkedin.com/in/abdulaziz-khader/",
  meta: {
    role: "ML / Full-stack Engineer",
    education: "UC San Diego — Computer Engineering '26, math minor",
    status: "OPEN TO NEW-GRAD ROLES · JUNE 2026",
  },
  marquee: "BUILD SOME ★ BREAK SOME MORE ★ REPEAT ★ CLOUD TO ARDUINO ★ NO TUTORIALS WERE FOLLOWED ★",
};

export const navLinks = [
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "OFF HOURS", href: "#offhours" },
  { name: "CONTACT", href: "#contact" },
];

export type Experience = {
  meta: string;
  company: string;
  title: string;
  desc: string;
  metrics: string[];
};

export const experiences: Experience[] = [
  {
    meta: "JUN–AUG 2025 · SANTA CLARA, CA",
    company: "BMC Software",
    title: "SWE Intern",
    desc: "Built an AIOps hub folding customers' ServiceNow data into BMC's product line — LangChain/LangGraph CRUD tooling over the REST API, an ASGI server pushing real-time updates, and 1000+ lines refactored into a reusable tool factory.",
    metrics: ["+17% projected revenue", "+100K expected users", "60% faster updates"],
  },
  {
    meta: "SEP–DEC 2024 · REMOTE",
    company: "PM Accelerator",
    title: "SWE Intern",
    desc: "Full-stack chess coach: reinforcement learning evaluates your games and surfaces recurring mistakes, served through Flask REST APIs + Gemini with a Supabase position store.",
    metrics: ["−40% retrieval latency", "RL + Gemini insights"],
  },
  {
    meta: "AUG–DEC 2024 · REMOTE",
    company: "Ocelot",
    title: "AI Studio Fellow",
    desc: "Sentiment-conditioned LLM for student mental-health conversations — +30% tone accuracy over GPT-2, 4.1/5 human eval. Quantized a 7B model to 4-bit for real-time local inference.",
    metrics: ["14 GB → 3.5 GB", "training 8 h → 30 min (CUDA)"],
  },
  {
    meta: "UC SAN DIEGO · CSE · ONGOING",
    company: "UC San Diego",
    title: "Instructional Assistant",
    desc: "Instruction and assessment for 800+ students in advanced systems programming in C — labs, office hours, and the occasional 2am forum answer.",
    metrics: ["labs · office hours · grading"],
  },
];

export type Project = {
  name: string;
  meta: string;
  desc: string;
  tags: string[];
  code: string;
};

export const featuredProjects: Project[] = [
  {
    name: "RoboRanger",
    meta: "APR 2026–PRESENT · ★ BEST EDGE AI & ELEVENLABS AWARD",
    desc: "A fully offline field guide on an Arduino Uno Q: MobileNetV3 vision + a quantized SmolLM2-360M via llama.cpp, RAG over sqlite-vec with similarity gating against hallucinations. Borrows an ElevenLabs voice when Wi-Fi appears.",
    tags: ["Python", "C++", "TFLite", "llama.cpp"],
    code: "https://github.com/aokhader/RoboRanger",
  },
  {
    name: "YouPresent",
    meta: "APR 2025–FEB 2026 · DEMOED AT AWE XR 2025",
    desc: "A Unity VR stage for public-speaking practice: Gemini reads gaze, hands and delivery in real time while a rigged AI coach — and a politely bored audience — give personalized feedback. Records you as your own avatar.",
    tags: ["Unity", "C#", "Meta XR", "Gemini"],
    code: "https://github.com/aokhader",
  },
];

export type EarlierProject = {
  name: string;
  desc: string;
  code: string;
};

export const earlierProjects: EarlierProject[] = [
  {
    name: "Visual Graph Algorithms",
    desc: "BFS, SCC and friends in C++, animated in the browser",
    code: "https://github.com/aokhader/GraphAlgorithms",
  },
  {
    name: "Huffman Coding",
    desc: "Compression + encryption in C++ — 25% smaller small files",
    code: "https://github.com/aokhader/HuffmanCoding",
  },
  {
    name: "DevJournal",
    desc: "Full-stack developer journal + task calendar, team of 10",
    code: "https://github.com/cse110-sp24-group21/cse110-sp24-group21",
  },
  {
    name: "YouTubeOffline",
    desc: "CLI YouTube downloader — PyTube + MoviePy",
    code: "https://github.com/aokhader/YouTubeOffLine",
  },
];

export type SkillGroup = {
  label: string;
  tint: "cream" | "peach" | "olive";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "LANGUAGES",
    tint: "cream",
    items: ["Python", "C / C++", "TypeScript", "Go", "C#", "Java", "SQL"],
  },
  {
    label: "ML SYSTEMS",
    tint: "peach",
    items: ["LangChain / LangGraph", "PyTorch", "TensorFlow / Keras", "CUDA", "llama.cpp / Ollama / vLLM"],
  },
  {
    label: "WEB & INFRA",
    tint: "olive",
    items: ["React / Next.js", "FastAPI", "Docker", "GCP", "MySQL"],
  },
];

export type OffHour = { name: string; blurb: string };

export const offHours: OffHour[] = [
  { name: "Reading", blurb: "Perpetually mid-novel. The queue only grows." },
  { name: "Games", blurb: "Plays them. Builds them. Hence this whole page." },
  { name: "Soccer", blurb: "Weekend fixture. Midfield, mostly honest tackles." },
  { name: "Yo-yo", blurb: "String tricks. You met the physics version up top." },
  { name: "Bo staff", blurb: "Yes, really. Ask for a demo in the interview." },
];

export const achievements = [
  "★ Best Edge AI & ElevenLabs award",
  "★ Demoed at AWE XR 2025",
  "★ 800+ students taught",
];

export const contact = {
  eyebrow: "// CONTACT",
  heading: "Let’s talk.",
  copy: "One email gets you an engineer who documents everything, demos on time — and yes, still brings the yo-yo.",
  footer: "© 2026 ABDULAZIZ KHADER · HANDCRAFTED · NO TUTORIAL WAS FOLLOWED IN THE MAKING OF THIS SITE",
};
