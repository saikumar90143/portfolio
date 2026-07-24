// ─── Projects Data ────────────────────────────────────────────────────────────
// Add / remove projects here. Components will update automatically.

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: "frontend" | "backend" | "fullstack" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  featured: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    id: "leanverse",
    title: "Leanverse",
    description:
      "A full-stack web platform delivering lean methodology tools and resources for modern teams.",
    longDescription:
      "Leanverse is a production full-stack application built to help teams apply lean principles in their workflows. Features include user authentication, dynamic content management, and a responsive dashboard experience.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://leanverse.in",
    githubUrl: "https://github.com/saikumar90143/leanverse",
    imageUrl: "/projects/leanverse.jpg",
    featured: true,
    year: 2024,
  },
  {
    id: "drivein-goa",
    title: "Drive in Goa",
    description:
      "A sleek car rental booking website for Goa tourism — built for speed, clarity, and conversions.",
    longDescription:
      "A fully responsive frontend for a Goa-based car rental service. Designed with a focus on UX clarity and conversion — clean booking flow, vehicle listings, and contact integration.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "frontend",
    liveUrl: "https://driveingoa.in",
    githubUrl: "https://github.com/saikumar90143/goa-car-rental",
    imageUrl: "/projects/driveingoa.jpg",
    featured: true,
    year: 2024,
  },
  {
    id: "elitereviews",
    title: "EliteReviews",
    description:
      "A full-stack review platform where users discover, share, and trust real product opinions.",
    longDescription:
      "EliteReviews is a production full-stack platform enabling users to submit, browse, and vote on product reviews. Features user accounts, review CRUD, rating aggregation, and a clean public-facing discovery interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    category: "fullstack",
    liveUrl: "https://elitereviews.in",
    githubUrl: "https://github.com/saikumar90143/affilate-review-blog",
    imageUrl: "/projects/elitereviews.jpg",
    featured: true,
    year: 2024,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const categories = [
  { label: "All",        value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Frontend",   value: "frontend" },
] as const;
