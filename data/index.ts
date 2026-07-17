// Single source of truth for all site content — "Player Two, hybrid" (3a).
// Experiences & projects synced from linkedin.com/in/abdulaziz-khader (Jul 2026).

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
    education: "UC San Diego — B.S. Computer Engineering '26, math minor · 3.7 GPA",
    status: "OPEN TO NEW-GRAD SWE / ML ROLES",
  },
  marquee: "BUILD SOME ★ BREAK SOME MORE ★ REPEAT ★ CLOUD TO ARDUINO ★ SHIP IT ★",
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
    meta: "APR — OCT 2025 · UC SAN DIEGO",
    company: "System Energy Efficiency Lab",
    title: "Researcher",
    desc: "Optimizing LLMs to run on a new type of DRAM at UCSD's SEELab, working across model sizes from 1B to 7B parameters.",
    metrics: ["1B — 7B parameter models", "DRAM / LLM optimization"],
  },
  {
    meta: "JUN — AUG 2025 · SANTA CLARA, CA",
    company: "BMC Software",
    title: "Software Engineering Intern",
    desc: "Built a new AIOps tool on the GenAI team folding customers' ServiceNow data into BMC's product line — LangChain/LangGraph CRUD tooling over ServiceNow's REST API, an ASGI server pushing real-time updates, and a semantic model that dynamically parses data configurations. Refactored 1000+ lines into a reusable tool factory that extends to products like Salesforce.",
    metrics: ["+17% projected revenue", "+100K expected users", "60% faster updates"],
  },
  {
    meta: "SEP — DEC 2024 · REMOTE",
    company: "Product Manager Accelerator",
    title: "Software Engineer Intern",
    desc: "Built a full-stack web app integrating reinforcement learning with a scalable database to evaluate players' chess games and surface move patterns and historical trends, wiring frontend workflows to Flask REST APIs, LangChain, and Google Gemini.",
    metrics: ["−40% retrieval latency", "Supabase position store"],
  },
  {
    meta: "AUG — DEC 2024 · REMOTE",
    company: "Ocelot",
    title: "AI Studio Fellow",
    desc: "Built a sentiment-conditioned LLM for student mental-health conversations, validated through a 50-sample human evaluation. Optimized a 7B-parameter deployment to run in real time on local hardware, and compressed the training cycle through CUDA optimization across 5,600+ multi-domain samples.",
    metrics: [
      "84% tone accuracy (+30% vs GPT-2)",
      "4.1/5.0 human eval",
      "14 GB → 3.5 GB (4-bit)",
      "training 8 h → 30 min",
    ],
  },
  {
    meta: "MAY — AUG 2024 · AI & ML FELLOWSHIP",
    company: "Break Through Tech",
    title: "AI & ML Fellow",
    desc: "Implemented machine learning and neural network models across ensemble regression, computer vision for digit classification, and NLP. Built a Deep Averaging Network for sentiment analysis on 2,000+ book reviews with a TF-IDF vectorizer, then benchmarked it against logistic regression and LSTM models using AUC ROC.",
    metrics: ["85% testing accuracy", "2,000+ book reviews"],
  },
  {
    meta: "MAY — AUG 2024 · SUMMER RESEARCH",
    company: "Think Neuro, Inc.",
    title: "Summer Research Intern",
    desc: "Researched how far neurofeedback can enhance physical rehabilitation for patients with weak or no motor function. Extracted 100+ papers from Web of Science and analyzed them in R, producing bibliometric and sentiment graphs, then presented a poster of the findings at the Think Neuro Summer Symposium.",
    metrics: ["100+ papers analyzed in R", "presented to 1000+ people"],
  },
  {
    meta: "SEP 2023 — JUN 2024 · UC SAN DIEGO",
    company: "UC San Diego",
    title: "Instructional Assistant",
    desc: "Mentored 800+ students through computer systems and software tools — C pointers, dynamic memory allocation, and bitwise operations — tutoring one-on-one, assembling assignments, and proctoring and grading exams.",
    metrics: ["800+ students mentored", "1000+ exams graded", "100% positive feedback"],
  },
  {
    meta: "OCT 2023 — MAY 2024 · UC SAN DIEGO",
    company: "Triton Robocup",
    title: "Mechatronics Engineer",
    desc: "Embedded systems development in C on a 32-bit ARM Cortex-M STM32. Programmed and debugged electronic speed controllers for brushless DC motor control, UART with interrupts for Raspberry Pi data, I2C for IMU reads, and CAN bus for motor commands and encoder feedback. Sensor-fused accelerometer and gyroscope data with a Kalman filter to kill drift.",
    metrics: ["STM32 / ARM Cortex-M", "Kalman filter sensor fusion"],
  },
];

/** Roles listed on LinkedIn without a write-up — shown as a compact row. */
export type AlsoRole = { company: string; title: string; dates: string };

export const alsoRoles: AlsoRole[] = [
  { company: "Triton XR", title: "Events Board Director", dates: "Jan — Jun 2026" },
  { company: "Headstarter AI", title: "Software Engineering Fellow", dates: "Jul — Aug 2024" },
];

export type Project = {
  name: string;
  meta: string;
  desc: string;
  tags: string[];
  code?: string;
  /** Overrides the default "CODE ↗" link label (e.g. a PR rather than a repo). */
  codeLabel?: string;
};

export const featuredProjects: Project[] = [
  {
    name: "RoboRanger",
    meta: "APR — MAY 2026 · ★ BEST EDGE AI + BEST ELEVENLABS · DATAHACKS 2026",
    desc: "An edge AI wildlife identification robot on an Arduino Uno Q: a MobileNetV3-Large TFLite classifier (75%+ accuracy across 51 species, calibrated with temperature scaling and TTA) paired with a quantized SmolLM2-360M via llama.cpp for fully offline inference. RAG over sqlite-vec with cosine-similarity thresholding gates hallucinations, and a networked mode streams to an ElevenLabs agent for conversational narration. Won against 100+ teams.",
    tags: ["Python", "C++", "TFLite", "llama.cpp"],
    code: "https://github.com/aokhader/RoboRanger",
  },
  {
    name: "GPS IMU Fusion",
    meta: "MAY — JUN 2026 · ★ MERGED INTO THE OFFICIAL DONKEYCAR",
    desc: "A 5-state Extended Kalman Filter fusing Adafruit BNO08X IMU data with u-blox C099-F9P GPS to eliminate dead-reckoning drift on a self-driving car. Refactored the vehicle's sensor pipeline into vectorized tuples and built backward-compatibility layers so legacy MPU6050/9250 sensors route into the new EKF without crashing the vehicle loop. Shipped upstream into DonkeyCar, the open-source self-driving platform.",
    tags: ["Python", "ROS", "Keras", "Embedded"],
    code: "https://github.com/autorope/donkeycar/pull/1237",
    codeLabel: "VIEW PR ↗",
  },
  {
    name: "YouPresent",
    meta: "APR 2025 — FEB 2026 · DEMOED AT AWE XR 2025",
    desc: "A Unity VR project for building public-speaking confidence by simulating a conference stage. Google Gemini reads the presenter's gaze and hand motions to generate coaching feedback, an Adobe Mixamo audience applauds at the end, and a recording camera lets you rewatch yourself as your own avatar from the audience's seat.",
    tags: ["Unity", "C#", "Meta XR", "Gemini"],
    code: "https://github.com/UnityVRProjects/YouPresent",
  },
  {
    name: "Open Your Eyes",
    meta: "OCT 2025 — FEB 2026 · ★ PLAYER'S CHOICE · TRITONWARE GAMEJAM",
    desc: "A 2D rogue-like dungeon crawler built in Unity around a vision-loss mechanic, with a storyline about discovering yourself and regaining your sight. Designed multiple levels and enemy types, and showcased it against 30+ teams at the TritonWare GameJam.",
    tags: ["Unity", "C#", "Game Design"],
    code: "https://github.com/aokhader/OpenYourEyes",
  },
];

export type EarlierProject = {
  name: string;
  desc: string;
  code?: string;
};

export const earlierProjects: EarlierProject[] = [
  {
    name: "BLAIR-MM",
    desc: "Multimodal recommender — RoBERTa + CLIP ViT dual-encoder, ~6× Recall@10 over TF-IDF",
    code: "https://github.com/aokhader/BLAIR-MultiModal",
  },
  {
    name: "Custom Microprocessor",
    desc: "8-bit RISC CPU and a custom ISA in SystemVerilog, validated by RTL simulation",
    code: "https://github.com/aokhader/CustomMicroprocessor",
  },
  {
    name: "BTTAI AJL Kaggle",
    desc: "ViT16 fine-tuned on HAM1000 for equitable skin-cancer detection — 12/75 on the leaderboard",
    code: "https://github.com/aokhader/ucla_ajl_team2",
  },
  {
    name: "YouTubeOffline",
    desc: "CLI YouTube downloader — PyTube + MoviePy",
    code: "https://github.com/aokhader/YouTubeOffLine",
  },
  {
    name: "Visual Graph Algorithms",
    desc: "BFS, SCC and friends in C++, animated step by step in the browser",
    code: "https://github.com/aokhader/GraphAlgorithms",
  },
  {
    name: "Huffman Coding",
    desc: "Compression + encryption in C++ — 25% smaller small files",
    code: "https://github.com/aokhader/HuffmanCoding",
  },
  {
    name: "DevJournal",
    desc: "Led a team of 12 building a local-first journaling platform with CI/CD and end-to-end tests",
    code: "https://github.com/cse110-sp24-group21/cse110-sp24-group21",
  },
  {
    name: "Prediction Model",
    desc: "Published research at the University of Bologna — K-Means clustering to predict poem authorship in Montale's Diario Postumo, 85% accuracy",
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
  "★ Best Edge AI & ElevenLabs — DataHacks 2026",
  "★ Player's Choice — TritonWare GameJam",
  "★ Demoed at AWE XR 2025",
  "★ 800+ students taught",
];

export const contact = {
  eyebrow: "// CONTACT",
  heading: "Let’s talk.",
  copy: "One email gets you an engineer who documents everything, demos on time — and yes, still brings the yo-yo.",
  footer: "© 2026 ABDULAZIZ KHADER · HANDCRAFTED IN SAN DIEGO",
};
