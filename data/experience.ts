// ─── Experience / Work History ────────────────────────────────────────────────

export type Experience = {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  type: "Full-time" | "Contract" | "Freelance" | "Internship";
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "nirvesh",
    company: "Nirvesh Enterprises Private Limited",
    role: "Full Stack Developer (MERN)",
    type: "Full-time",
    location: "Hyderabad, Telangana (Hybrid)",
    startDate: "May 2024",
    endDate: "Present",
    description:
      "Developed and maintained scalable full-stack web applications, owning the full development lifecycle from concept to deployment.",
    achievements: [
      "Architected microservices-based backend systems with event-driven communication using Apache Kafka.",
      "Implemented Redis caching strategies for high-traffic endpoints, reducing database load.",
      "Optimized application performance through code splitting, lazy loading, and query optimization, improving load times by up to 60%.",
      "Deployed and managed production applications on Hostinger VPS and configured Linux server environments.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Kafka", "Redis", "Linux"],
  },
  {
    id: "augsidius",
    company: "Augsidius Health",
    role: "Full Stack Developer",
    type: "Freelance",
    location: "Hyderabad, Telangana (On-site)",
    startDate: "Jan 2024",
    endDate: "May 2024",
    description:
      "Built responsive, accessible user interfaces and integrated REST APIs to power dynamic content.",
    achievements: [
      "Built responsive, accessible user interfaces using Next.js and Tailwind CSS.",
      "Developed and integrated REST APIs using Express.js to power dynamic content and real-time data display.",
      "Improved website performance through optimized asset loading and efficient API calls.",
      "Developed reusable, modular frontend components, reducing development time for future feature additions.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Express.js", "REST API"],
  },
  {
    id: "freelance-dev",
    company: "Freelance",
    role: "Full Stack Developer",
    type: "Freelance",
    location: "Hyderabad, Telangana (Remote)",
    startDate: "May 2022",
    endDate: "Apr 2023",
    description:
      "Designed and delivered custom frontend solutions for freelance clients using JavaScript, React.js, and Express.js backed APIs.",
    achievements: [
      "Designed and delivered custom frontend solutions for freelance clients.",
      "Translated client requirements and design mockups into functional, cross-browser-compatible web pages.",
      "Managed end-to-end freelance project delivery, including client communication, scoping, and timely deployment.",
    ],
    tech: ["JavaScript", "React.js", "Express.js"],
  },
];
