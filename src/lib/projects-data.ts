export type ProjectColor = "primary" | "accent";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDesignSystem {
  colors: Array<{ name: string; value: string; usage: string }>;
  typography: string[];
}

export interface ProjectCaseStudy {
  projectType: string;
  duration: string;
  role: string;
  bannerTagline: string;
  problemStatement: string;
  targetUsers: string[];
  researchInsights: string[];
  solution: string[];
  designSystem: ProjectDesignSystem;
  features: ProjectFeature[];
  screens: string[];
  beforeAfter: Array<{ before: string; after: string }>;
  outcome: string[];
  learnings: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: ProjectColor;
  logic: string;
  highlights: string[];
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "wealth-advisor",
    title: "Wealth Advisor",
    subtitle: "UI/UX Case Study - Intelligent Financial Planning Dashboard",
    description:
      "A minimal, data-driven financial planning platform that helps beginner investors and working professionals track assets, analyze risk, and make confident long-term investment decisions.",
    tags: ["Figma", "React.js", "Tailwind CSS", "Three.js", "UI/UX", "Full Stack"],
    color: "primary",
    logic:
      "Research showed users prefer visual summaries over technical tables. The dashboard prioritizes net worth, assets, and liabilities first, then guides users through risk profiling and investment insights with simplified terminology.",
    highlights: ["Net Worth Dashboard", "Risk Assessment", "Investment Insights", "Quick Financial Inputs"],
    caseStudy: {
      projectType: "UI/UX + Full Stack Project",
      duration: "3-4 Weeks",
      role: "UX Designer + Backend Developer",
      bannerTagline: "Intelligent Financial Planning Dashboard",
      problemStatement:
        "Existing financial platforms are often too complex for beginners, overloaded with technical data, and weak in visual hierarchy. Users struggle to understand their financial position and make confident investment decisions.",
      targetUsers: [
        "Beginner investors",
        "Working professionals (age 22-40)",
        "Users planning SIPs, savings, and long-term investments",
      ],
      researchInsights: [
        "Users prefer visual summaries over raw numbers.",
        "Too many charts increase cognitive overload.",
        "Trust grows when data is explained through guided insights.",
      ],
      solution: [
        "Designed a minimal financial dashboard with clear information hierarchy.",
        "Prioritized net worth, assets, and liabilities as first-view metrics.",
        "Built a guided risk analysis flow to simplify decisions.",
        "Rewrote technical financial terms into plain user language.",
      ],
      designSystem: {
        colors: [
          { name: "Midnight", value: "#0F172A", usage: "Background and surface contrast" },
          { name: "Violet Pulse", value: "#A855F7", usage: "Primary actions and key metrics" },
          { name: "Cyan Insight", value: "#22D3EE", usage: "Charts and positive signals" },
          { name: "Rose Alert", value: "#FB7185", usage: "Risk and liability indicators" },
        ],
        typography: ["Inter for UI text", "JetBrains Mono for metrics", "Bold display headings for dashboard context"],
      },
      features: [
        {
          title: "Net Worth Dashboard",
          description: "Displays total assets vs liabilities with a clear visual breakdown of financial health.",
        },
        {
          title: "Risk Assessment Module",
          description: "Users input financial data and the system generates a guided risk profile.",
        },
        {
          title: "Investment Insights",
          description: "Suggests allocation strategies and visualizes growth trends to support planning.",
        },
        {
          title: "Quick Financial Inputs",
          description: "Simple forms to add assets, liabilities, and income without overwhelming complexity.",
        },
      ],
      screens: ["Dashboard", "Risk Assessment Page", "Asset Entry Form", "Insights Page"],
      beforeAfter: [
        {
          before: "Complex financial tools with heavy technical language",
          after: "Simplified dashboard with guided, human-readable flows",
        },
        {
          before: "Raw data tables that require interpretation",
          after: "Visual insights that reveal trends at a glance",
        },
        {
          before: "Confusing UX with unclear next steps",
          after: "Structured journey with progressive decision support",
        },
      ],
      outcome: [
        "Improved usability for first-time investors.",
        "Faster decision-making through clearer prioritization.",
        "Better understanding of financial health and trade-offs.",
      ],
      learnings: [
        "Users do not want more features; they want more clarity.",
        "Data visualization should reduce thinking effort, not increase it.",
        "Strong UX is essential in financial products where trust matters.",
      ],
    },
  },
  {
    slug: "roadguard",
    title: "RoadGuard",
    subtitle: "Traffic Violation Detection System",
    description:
      "Automated system to detect traffic violations - helmet absence, red-light jumping, number plate detection - using computer vision pipelines.",
    tags: ["YOLO", "ANPR", "OpenCV", "Python", "Deep Learning"],
    color: "primary",
    logic: "YOLO v8 was chosen for real-time inference speed (45fps) over accuracy-centric models - violations happen fast.",
    highlights: ["Helmet Detection", "Red-light Monitoring", "ANPR"],
  },
  {
    slug: "airline-reservation-system",
    title: "Airline Reservation System",
    subtitle: "Database Management Project",
    description:
      "Relational database system using MySQL to manage passengers, flights, tickets, luggage, insurance, services, and reservations with full CRUD operations.",
    tags: ["Django", "MySQL", "Python", "SQL", "ORM"],
    color: "accent",
    logic: "Normalized to 3NF to eliminate update anomalies - critical for concurrent booking transactions.",
    highlights: ["3NF Schema", "CRUD APIs", "Django ORM"],
  },
  {
    slug: "codearena",
    title: "CodeArena",
    subtitle: "Competitive Programming Platform",
    description:
      "A coding practice platform where users can solve algorithmic challenges, track progress, and improve problem-solving skills in a competitive environment.",
    tags: ["React", "JavaScript", "API", "Algorithms"],
    color: "primary",
    logic: "Judge0 API offloads code execution to an isolated sandbox - eliminating server-side security risks.",
    highlights: ["Code Execution", "Problem Sets", "Progress Tracking"],
  },
  {
    slug: "chitrakolam",
    title: "Chitrakolam",
    subtitle: "Digital Kolam Design Platform",
    description:
      "A creative platform inspired by traditional Indian Kolam art where users can generate and explore geometric kolam patterns digitally.",
    tags: ["React", "Canvas API", "JavaScript", "Generative Art"],
    color: "accent",
    logic: "Recursive L-system grammar generates authentic Kolam symmetry - preserving cultural geometric patterns.",
    highlights: ["Generative Patterns", "Canvas Rendering", "Cultural Heritage"],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);