// ─── Skills Data ─────────────────────────────────────────────────────────────

export type Skill = {
  name: string;
  level: "expert" | "proficient" | "familiar";
  icon?: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Building responsive, modern UIs",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "JavaScript (ES6+)", level: "expert" },
      { name: "TypeScript", level: "proficient" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "HTML5", level: "expert" },
      { name: "CSS3", level: "expert" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Database",
    description: "Scalable APIs, microservices & caching",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "MongoDB", level: "expert" },
      { name: "Redis", level: "proficient" },
      { name: "Apache Kafka", level: "proficient" },
      { name: "Mongoose", level: "expert" },
      { name: "REST API", level: "expert" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    description: "Deployment, CI/CD & developer tools",
    skills: [
      { name: "Linux / Bash", level: "proficient" },
      { name: "Git & GitHub", level: "expert" },
      { name: "Hostinger VPS", level: "proficient" },
      { name: "Postman", level: "expert" },
      { name: "Google Gemini AI", level: "proficient" },
      { name: "Recharts", level: "proficient" },
    ],
  },
];

// Flat tech marquee list (used in About section)
export const techMarquee = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB",
  "Redis", "Apache Kafka", "Tailwind CSS", "Linux", "Git", "GitHub",
  "Hostinger VPS", "Google Gemini AI", "Recharts"
];
