// =========================
// CARE STEP
// =========================

import carestep from "../assets/images/projects/care-step/carestep.png";

// =========================
// EXPENSE TRACKER
// =========================

import expense1 from "../assets/images/projects/expense-tracker/expense1.png";
import expense2 from "../assets/images/projects/expense-tracker/expense2.png";
import expense3 from "../assets/images/projects/expense-tracker/expense3.png";

// =========================
// INSIGHT FORGE
// =========================

import insightForge1 from "../assets/images/projects/insight-forge/InsightForge1.png";
import insightForge2 from "../assets/images/projects/insight-forge/InsightForge2.png";
import insightForge3 from "../assets/images/projects/insight-forge/InsightForge3.png";
import insightForge4 from "../assets/images/projects/insight-forge/InsightForge4.png";

// =========================
// SCOUTFLOW AI
// =========================

import scoutFlow1 from "../assets/images/projects/scoutflow/ScoutFlow1.png";
import scoutFlow2 from "../assets/images/projects/scoutflow/ScoutFlow2.png";
import scoutFlow3 from "../assets/images/projects/scoutflow/ScoutFlow3.png";
import scoutFlow4 from "../assets/images/projects/scoutflow/ScoutFlow4.png";
import scoutFlow5 from "../assets/images/projects/scoutflow/ScoutFlow5.png";
import scoutFlow6 from "../assets/images/projects/scoutflow/ScoutFlow6.png";

const projects = [

  // =====================================
  // SCOUTFLOW AI
  // =====================================

  {
    id: 1,

    title: "ScoutFlow AI",

    category: "AI Automation Platform",

    description:
      "An AI-powered workflow automation and scouting platform designed for intelligent task orchestration, monitoring, and conversational workflows.",

    tech: [
      "AI Automation",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "MongoDB",
    ],

    featured: true,

    github: "https://github.com/SD2202/scoutflow-ai",

    live: "https://scout-flow-frontend.vercel.app/",

    images: [
      scoutFlow1,
      scoutFlow2,
      scoutFlow3,
      scoutFlow4,
      scoutFlow5,
      scoutFlow6,
    ],
  },

  // =====================================
  // INSIGHT FORGE
  // =====================================

  {
    id: 2,

    title: "Insight Forge",

    category: "Analytics Platform",

    description:
      "A futuristic analytics dashboard focused on insights, monitoring systems, and real-time data visualization with a cinematic dark UI.",

    tech: [
      "React",
      "Analytics",
      "Tailwind CSS",
      "Data Visualization",
    ],

    featured: false,

    github: "https://github.com/SD2202/insight-forge",

    live: "https://insight-forge.vercel.app",

    images: [
      insightForge1,
      insightForge2,
      insightForge3,
      insightForge4,
    ],
  },

  // =====================================
  // EXPENSE TRACKER
  // =====================================

  {
    id: 3,

    title: "Expense Tracker",

    category: "Finance Dashboard",

    description:
      "A smart expense management dashboard with authentication, analytics visualization, transaction tracking, and financial insights.",

    tech: [
      "React",
      "Chart.js",
      "Tailwind CSS",
      "Firebase",
    ],

    featured: false,

    github: "https://github.com/SD2202/expense-tracker",

    live: "https://expensetracker221.netlify.app/",

    images: [
      expense1,
      expense2,
      expense3,
    ],
  },

  // =====================================
  // CARE STEP
  // =====================================

  {
    id: 4,

    title: "Care Step",

    category: "Healthcare Platform",

    description:
      "A modern healthcare web platform focused on accessible patient services, clean UI experience, and appointment-based interactions.",

    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],

    featured: false,

    github: "https://github.com/SD2202/care-step",

    live: "https://carestep-healthcare.netlify.app/",

    images: [
      carestep,
    ],
  },

];

export default projects;