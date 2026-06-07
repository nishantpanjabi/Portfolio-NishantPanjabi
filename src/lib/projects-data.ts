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
  liveUrl?: string;
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "freshpick",
    title: "UX/UI CASE STUDY – FRESHPICK GROCERY APP",
    subtitle: "Wireframes & Design Process | Renewed JioMart Experience",
    description:
      "A UI/UX case study focused on redesigning the grocery shopping experience — fast discovery, clear checkout, and real-time order tracking.",
    tags: ["Figma", "UI/UX", "Wireframes", "Design System", "Prototype"],
    color: "primary",
    liveUrl: "https://freshpick-zeta.vercel.app/",
    logic:
      "Research uncovered cluttered category navigation and a confusing multi-step checkout. The redesign focuses on quick discovery, slot-based delivery, and simplified checkout to reduce abandonment.",
    highlights: ["Fresh groceries, delivered fast", "10-min delivery banner", "Slot-based scheduling", "Order tracking"],
    caseStudy: {
      projectType: "UI/UX Case Study",
      duration: "2-3 Weeks",
      role: "Product Designer (End-to-end UI/UX)",
      bannerTagline: "Wireframes & design process for a renewed grocery app experience",
      problemStatement:
        "Users faced difficulty finding products quickly, cluttered category navigation, and a confusing multi-step checkout leading to cart abandonment.",
      targetUsers: ["Busy urban shoppers", "Users needing quick reorder", "Slot-based delivery customers"],
      researchInsights: [
        "Cluttered homepage reduces discoverability.",
        "Users want clear product details and fast reorder options.",
        "Slot visibility and simple checkout reduces abandonment.",
      ],
      solution: [
        "Introduced clean category listing and smart search with filters.",
        "Designed detailed product cards with reviews and quick add-to-cart.",
        "Simplified checkout with UPI/COD options and slot scheduling.",
        "Added real-time order tracking and clear delivery ETAs.",
      ],
      designSystem: {
        colors: [
          { name: "Fresh Green", value: "#10B981", usage: "Primary CTA and highlights" },
          { name: "Deep Charcoal", value: "#0F172A", usage: "Background and surface contrast" },
          { name: "Muted Grey", value: "#9CA3AF", usage: "Secondary text and dividers" },
        ],
        typography: ["Inter for UI", "Inter SemiBold for headings"],
      },
      features: [
        { title: "Smart Search & Filters", description: "Fast discovery with category-based filters and suggestions." },
        { title: "Quick Add & Reorder", description: "Add to cart from product list and reorder past purchases." },
        { title: "Slot-based Delivery", description: "Choose convenient delivery slots with clear availability." },
        { title: "Simplified Checkout", description: "Single-step checkout with UPI, card, and COD options." },
        { title: "Real-time Tracking", description: "Live order tracking with status milestones." },
      ],
      screens: ["/images/freshpick-case-study.svg"],
      beforeAfter: [
        { before: "Cluttered category navigation", after: "Clear category listing with helpful CTAs" },
        { before: "Multi-step confusing checkout", after: "Streamlined checkout with clear payment options" },
      ],
      outcome: [
        "Improved product discoverability through redesigned homepage and search",
        "Fewer checkout drop-offs due to simplified flow",
      ],
      learnings: [
        "Prioritizing clarity over feature density improves conversion.",
        "Micro-interactions and slot visibility increase user confidence.",
      ],
    },
  },
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