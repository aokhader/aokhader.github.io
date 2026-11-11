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
  resumeUrl: "/Abdulaziz_Software_Engineer.pdf",
  /** Name the browser saves the resume under, rather than the generic "resume.pdf". */
  resumeFilename: "Abdulaziz_Khader_Resume.pdf",
  github: "https://github.com/aokhader",
  linkedin: "https://www.linkedin.com/in/abdulaziz-khader/",
  meta: {
    role: "ML / Full-stack Engineer",
    education: "UC San Diego — B.S. Computer Engineering '26, math minor",
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
  /** Screenshot under public/projects — falls back to the tiled name panel when absent. */
  image?: string;
  code?: string;
  /** Overrides the default "CODE ↗" link label (e.g. a PR rather than a repo). */
  codeLabel?: string;
};

export const featuredProjects: Project[] = [
  // Drop screenshots at public/projects/remem.jpg and ringdown.jpg to take these two off the tiled panel.
  {
    name: "Remem",
    meta: "OCT 2026 · ★ BEST OVERALL PROJECT · DS3 HACK DAY",
    desc: "A wearable visual-memory search engine: a forehead-worn iPhone streams JPEG frames to a laptop, where EmbeddingGemma 2 embeds every frame and every question into one 768-dimensional space, so asking where your keys are returns the newest frame they appear in and how long ago it was seen. Capture through ingest was mine — live frames, ffmpeg MP4 replay, and EXIF-dated camera-roll imports landing in one JPEG-plus-SQLite store behind a bounded queue that drops the oldest frame, never the newest. Every frame is indexed and searched on the laptop: no cloud APIs, no audio recorded.",
    tags: ["Python", "FastAPI", "EmbeddingGemma", "SQLite"],
    code: "https://github.com/aokhader/Remem",
  },
  {
    name: "RingDown",
    meta: "OCT 2026 · ★ 2ND PLACE · C0MPILED-16",
    desc: "A voice-driven ambulance routing system that cuts hospital offload delays: a paramedic speaks a patient report into a handset, faster-whisper transcribes and spaCy redacts names, addresses and birth dates on the laptop, and only redacted text reaches the decision model, whose confidence bands route each report to act, one clarifying question, or a human hand-off. Hospital choice stays in plain code — capability filter, Mapbox drive time, and expected wait counting ambulances already headed there — before Twilio phones the charge nurse with a spoken heads-up. Across 48 scripted reports it handled 79% alone at 100% accuracy and a 605 ms median. I built the voice path and the medic handset.",
    tags: ["Python", "FastAPI", "Whisper", "Twilio"],
    // Links to the demo video rather than the repo, which is private.
    code: "https://drive.google.com/file/d/1InQrpE9ljma-7VNy7mG2wxkSuteOlyAm/view",
    codeLabel: "DEMO VIDEO ↗",
  },
  {
    name: "Building Blocks",
    meta: "SEP — NOV 2026 · REAL-TIME COLLABORATIVE CANVAS",
    desc: "A real-time collaborative workspace for system design: React Flow over Liveblocks gives a shared canvas with live cursors, presence and multiplayer editing, and an AI agent turns a plain-English prompt into nodes and edges written straight into the room. Generation runs as a durable Trigger.dev background task so a long agent call survives a reload, Clerk handles auth, and Prisma over Postgres holds projects, collaborators and the Markdown specs the finished graph compiles into. Ships with a starter library of monolith, microservice, event-driven and serverless templates.",
    tags: ["Trigger.dev", "Clerk", "Liveblocks", "Prisma"],
    image: "/projects/building-blocks.png",
    code: "https://github.com/aokhader/BuildingBlocks",
  },
  {
    name: "RoboRanger",
    meta: "APR — MAY 2026 · ★ BEST EDGE AI + BEST ELEVENLABS · DATAHACKS 2026",
    desc: "An edge AI wildlife identification robot on an Arduino Uno Q: a MobileNetV3-Large TFLite classifier (75%+ accuracy across 51 species, calibrated with temperature scaling and TTA) paired with a quantized SmolLM2-360M via llama.cpp for fully offline inference. RAG over sqlite-vec with cosine-similarity thresholding gates hallucinations, and a networked mode streams to an ElevenLabs agent for conversational narration. Won against 100+ teams.",
    tags: ["Python", "C++", "TFLite", "llama.cpp"],
    image: "/projects/roboranger.jpg",
    code: "https://github.com/aokhader/RoboRanger",
  },
  {
    name: "GPS IMU Fusion",
    meta: "MAY — JUN 2026 · ★ MERGED INTO THE OFFICIAL DONKEYCAR",
    desc: "A 5-state Extended Kalman Filter fusing Adafruit BNO08X IMU data with u-blox C099-F9P GPS to eliminate dead-reckoning drift on a self-driving car. Refactored the vehicle's sensor pipeline into vectorized tuples and built backward-compatibility layers so legacy MPU6050/9250 sensors route into the new EKF without crashing the vehicle loop. Shipped upstream into DonkeyCar, the open-source self-driving platform.",
    tags: ["Python", "ROS", "Keras", "Embedded"],
    image: "/projects/gps-imu-fusion.jpg",
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
    name: "Open Your Eyes",
    desc: "2D rogue-like dungeon crawler built around a vision-loss mechanic — Player's Choice at TritonWare GameJam",
    code: "https://github.com/aokhader/OpenYourEyes",
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
  "★ Best Overall Project — DS3 Hack Day",
  "★ 2nd Place — c0mpiled-16",
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
