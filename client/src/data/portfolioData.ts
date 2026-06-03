export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export type PortfolioPost = {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
};

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  skills?: string[];
};

export const portfolioData = {
  name: "Sreesailam Mourya Veer",
  email: "mourya@example.com",
  photo: "/home-profile.png",
  aboutPhoto: "/about-profile.png",
  tagline:
    "AI/ML Enthusiast | Cloud Computing | Agentic AI | LangChain, LangGraph, LlamaIndex",
  subTagline: "Building autonomous AI systems and multi-agent architectures.",
  about:
    "Highly motivated professional with a strong foundation in Artificial Intelligence, Machine Learning, and Cloud Computing. I specialize in Agentic AI and building Multi-Agent Architectures using modern frameworks like LangChain, LangGraph, and LlamaIndex.",
  aboutDetails: [
    "My technical toolkit includes Python, Java, TensorFlow, and PyTorch, alongside a deep understanding of Data Structures and Algorithms.",
    "I am certified across major cloud platforms including AWS Generative AI Foundations, Microsoft Azure AI Fundamentals, Oracle Cloud Infrastructure Foundations, and Google Cloud networking.",
    "I am passionate about developing autonomous AI systems that can solve complex real-world problems. With a background in Full Stack Development and hands-on experience from a Google AI-ML Virtual Internship, I am eager to contribute to the next generation of intelligent software solutions.",
  ],
  skills: [
    "n8n",
    "LlamaIndex",
    "LangGraph",
    "LangChain",
    "TensorFlow",
    "PyTorch",
    "Multi-agent Architecture",
    "Agentic AI",
    "Cloud Computing",
    "Python",
    "Java",
    "Data Structures and Algorithms",
  ],
  certifications: [
    {
      title: "AI Deployment & Automation",
      issuer: "EduSkills Academy",
      issued: "Jun 2026",
      credentialId: "2026-FE1 B824CEO",
      skills: ["TensorFlow", "Multi-agent Architecture"],
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      issued: "Apr 2026",
    },
    {
      title: "AWS Academy Graduate - Generative AI Foundations",
      issuer: "Amazon Web Services (AWS)",
      issued: "Dec 2025",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      issued: "Oct 2025",
      credentialId: "102926451OCI25FNDCFA",
    },
    {
      title: "Connecting Cloud Networks with NCC (Google Cloud Skill Badge)",
      issuer: "Google Cloud Skills Boost",
      issued: "Sep 2025",
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "All India Council for Technical Education (AICTE)",
      issued: "Jul 2025",
      credentialId: "efa7baa18af06f079687d59004a9c4bf",
      skills: ["TensorFlow", "PyTorch"],
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      issued: "Jan 2025",
    },
    {
      title: "Python Full Stack Development Certification",
      issuer: "EduSkills",
      issued: "Dec 2024",
      credentialId: "23685a9fdef5d72de73ae3ee8c08675a",
    },
  ] satisfies Certification[],
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  blogPosts: [
    {
      id: 1,
      title: "Designing Multi-Agent AI Systems",
      slug: "designing-multi-agent-ai-systems",
      date: "2026-06-02",
      excerpt:
        "Notes on composing specialized agents, shared memory, orchestration, and evaluation loops for real-world AI workflows.",
    },
    {
      id: 2,
      title: "LangChain, LangGraph, and LlamaIndex in Practice",
      slug: "langchain-langgraph-llamaindex-in-practice",
      date: "2026-06-02",
      excerpt:
        "A practical comparison of modern agentic AI frameworks and where each one fits in a production-ready architecture.",
    },
    {
      id: 3,
      title: "Cloud Foundations for AI Deployment",
      slug: "cloud-foundations-for-ai-deployment",
      date: "2026-06-02",
      excerpt:
        "How AWS, Azure, Oracle Cloud, and Google Cloud concepts shape scalable AI deployment and automation strategies.",
    },
  ] satisfies PortfolioPost[],
  projects: [
    {
      id: 1,
      title: "AlphaTrace 🎮",
      description:
        "Production-style teaching platform for alpha-beta search algorithms. Features replayable game tree search traces, interactive pruning explanations, minimax visualization, and real-time game state management.",
      tech: ["Python", "FastAPI", "React", "Tailwind", "Game AI"],
      github: "https://github.com/Mouryaveer/AlphaTrace",
    },
    {
      id: 2,
      title: "TraceX-AI 🚀",
      description:
        "AI-powered search engine for detecting sports media piracy. Uses CLIP embeddings and FAISS vector similarity for media fingerprinting, platform identification, and automatic DMCA legal suggestion generation.",
      tech: ["TypeScript", "Python", "FastAPI", "React", "CLIP", "FAISS", "OpenCV"],
      github: "https://github.com/Mouryaveer/TraceX-AI",
    },
    {
      id: 3,
      title: "ProjectX 🛠️",
      description:
        "Smart legal document analyzer with a 4-agent AI workflow (LLM, Risk, Search, Recommendation). Supports PDF/DOCX/TXT parsing, semantic retrieval, risk detection, and manual algorithm implementations.",
      tech: ["Python", "FastAPI", "React", "LangGraph", "FAISS", "JWT"],
      github: "https://github.com/Mouryaveer/ProjectX",
    },
    {
      id: 4,
      title: "legal-review-studio ⚖️",
      description:
        "AI-powered legal document analyzer for extracting clauses, obligations, risk signals, and entities. Supports RAG-based Q&A, multi-document comparison, PDF report generation, and offline or LLM-enhanced modes.",
      tech: ["Python", "FastAPI", "React", "Vite", "LLM", "RAG"],
      github: "https://github.com/SreesailamMouryaVeer/legal-review-studio",
    },
    {
      id: 5,
      title: "Note-Agent 📝",
      description:
        "AI-powered note assistant with LangGraph agent flow for drafting, rewriting, and summarizing notes. Integrates Google Gemini AI, FastAPI backend, safe file handling, and a simple browser UI with Vercel-ready deployment.",
      tech: ["Python", "FastAPI", "LangChain", "LangGraph", "Google Gemini", "Jinja2"],
      github: "https://github.com/SreesailamMouryaVeer/Note-Agent",
    },
    {
      id: 6,
      title: "BANK 💰",
      description:
        "Comprehensive Banking Management System with an AI-powered Financial Advisor. Features fraud detection via statistical analysis, SHA-256/AES security, multithreading, role-based access (Admin, Employee, Customer), EMI calculation, and full audit logging across 10+ database tables.",
      tech: ["Java", "Swing/AWT", "MySQL", "JDBC"],
      github: "https://github.com/SreesailamMouryaVeer/BANK",
    },
    {
      id: 7,
      title: "BANKING 📱",
      description:
        "Banking Portal REST API built with Spring Boot and Spring Security. Features JWT authentication, PIN management, cash deposits/withdrawals, fund transfers, transaction history tracking, and global exception handling.",
      tech: ["Spring Boot", "Spring Security", "MySQL", "REST API", "JWT"],
      github: "https://github.com/SreesailamMouryaVeer/BANKING",
    },
    {
      id: 8,
      title: "CampusConnect 🎓",
      description:
        "Enterprise-grade campus recruitment platform for managing student placements and job postings. Features role-based access (Admin, Student, Company), CGPA-based eligibility, analytics dashboards, and 3NF normalized database design.",
      tech: ["Python", "Flask", "SQLAlchemy", "JWT", "MySQL", "SQLite"],
      github: "https://github.com/SreesailamMouryaVeer/CampusConnect",
    },
    {
      id: 9,
      title: "KnapSack Simulation 🎒",
      description:
        "Interactive web-based simulation platform for the Knapsack Problem for DAA classroom demonstrations. Visualizes 0/1 DP, Fractional Greedy, and Brute Force algorithms with animated DP tables, speed control, and complexity analysis.",
      tech: ["Python", "FastAPI", "HTML5", "CSS3", "JavaScript", "Chart.js"],
      github: "https://github.com/SreesailamMouryaVeer/KnapSack-Simulation",
    },
    {
      id: 10,
      title: "Cloud Resource Monitoring Dashboard ☁️",
      description:
        "Real-time monitoring dashboard for cloud infrastructure tracking CPU, memory, storage, and network usage. Includes interactive metrics cards, performance analytics, alert management, and database-driven visualization.",
      tech: ["Python", "Flask", "MySQL", "SQLAlchemy", "Chart.js"],
      github: "https://github.com/Mouryaveer/Cloud-Resource-Monitoring-Dashboard",
    },
    {
      id: 11,
      title: "Facial Recognition 👤",
      description:
        "Face recognition system for detecting and identifying faces using HOG features and dlib. Supports encoding known faces, comparing with configurable tolerance, drawing bounding boxes, and displaying matched names.",
      tech: ["Python", "OpenCV", "face_recognition", "NumPy", "HOG"],
      github: "https://github.com/Mouryaveer/Facial-Recognition",
    },
    {
      id: 12,
      title: "Blogging Web 📝",
      description:
        "A clean blogging platform with a frontend-focused structure for content management and publication, built with modern HTML5 and CSS3.",
      tech: ["HTML", "Python", "CSS", "Shell"],
      github: "https://github.com/Mouryaveer/Blogging-Web",
    },
  ] as Project[],
};
