export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  fullDescription: string;
  img: string;
  github: string;
  link: string;
  challenges: string[];
  futurePlans: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "portfolio-v2",
    title: "Portfolio V2",
    tags: ["Next.js", "TypeScript", "Framer Motion", "GSAP"],
    description: "A premium, animated developer portfolio featuring glassmorphism, custom tech-themed backgrounds, and seamless routing.",
    fullDescription: "This portfolio is a showcase of advanced frontend techniques, including custom-designed glassmorphism effects, hardware-accelerated animations with Framer Motion and GSAP, and a robust dynamic routing system built on Next.js 16.",
    img: "/portfolio-v2.png",
    github: "https://github.com/najiba-ta/Portfolio",
    link: "https://portfolio-five-mauve-d30rjadr5p.vercel.app",
    challenges: [
      "Integrating multiple animation libraries (GSAP & Framer Motion) without performance degradation.",
      "Designing a custom glassmorphism system that maintains text readability in both light and dark modes.",
      "Implementing a global background system that remains smooth during page transitions."
    ],
    futurePlans: [
      "Adding a CMS integration for dynamic blog posts.",
      "Implementing 3D elements using Three.js.",
      "Adding more interactive micro-interactions throughout the site."
    ]
  },
  {
    id: "dragon-news-next",
    title: "Dragon News Next",
    tags: ["Next.js", "JavaScript", "Tailwind CSS"],
    description: "A high-performance news portal featuring category-based navigation, real-time news updates, and a responsive grid layout.",
    fullDescription: "Dragon News is a comprehensive news application that leverages Next.js for server-side rendering and static generation. It provides users with a fast and intuitive way to browse news across various categories, with a focus on clean typography and modern design.",
    img: "/dragon-news.png",
    github: "https://github.com/najiba-ta/Dragon-News-Next",
    link: "https://dragon-news-next-jade.vercel.app",
    challenges: [
      "Optimizing data fetching from multiple news APIs while handling rate limits.",
      "Implementing an efficient category filtering system with instant UI updates.",
      "Ensuring perfect responsiveness across mobile, tablet, and desktop views."
    ],
    futurePlans: [
      "Adding user authentication for personalized news feeds.",
      "Implementing a 'Save for Later' bookmarking feature.",
      "Adding dark mode support specifically for the reading experience."
    ]
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    tags: ["JavaScript", "HTML5", "CSS3"],
    description: "A sleek and minimalist productivity app designed for efficient task management and daily planning.",
    fullDescription: "KeenKeeper is a task management solution that strips away the noise to focus on what matters: productivity. Built with vanilla JavaScript and modern CSS, it demonstrates high-performance UI state management and a clean, user-centric design language.",
    img: "/keenkeeper.png",
    github: "https://github.com/najiba-ta/KeenKeeper",
    link: "https://keen-keeper-theta-one.vercel.app",
    challenges: [
      "Implementing drag-and-drop functionality using native browser APIs.",
      "Managing complex application state without external libraries like Redux.",
      "Creating a flexible UI that scales beautifully for long task lists."
    ],
    futurePlans: [
      "Adding local storage and cloud sync capabilities.",
      "Implementing recurring tasks and advanced reminders.",
      "Adding detailed productivity analytics and charts."
    ]
  },
  {
    id: "github-issue-tracker",
    title: "GitHub Issue Tracker",
    tags: ["JavaScript", "GitHub API", "Tailwind"],
    description: "A dedicated tool to manage and track GitHub repository issues through a clean, interactive dashboard.",
    fullDescription: "The GitHub Issue Tracker provides a streamlined interface for developers to manage their project workflows. By connecting directly to the GitHub API, it allows for real-time tracking of issues, pull requests, and milestones in a visual Kanban-style board.",
    img: "/issue-tracker.png",
    github: "https://github.com/najiba-ta/GitHub_Issue_Tracker",
    link: "https://najiba-ta.github.io/GitHub_Issue_Tracker",
    challenges: [
      "Securely handling GitHub OAuth authentication and token management.",
      "Efficiently mapping GitHub API responses to a custom Kanban board structure.",
      "Handling real-time updates and optimistic UI changes for better user experience."
    ],
    futurePlans: [
      "Adding support for bulk issue editing and labeling.",
      "Integrating with Slack for instant issue notifications.",
      "Adding advanced filtering and search capabilities."
    ]
  },
  {
    id: "techweb",
    title: "TechWeb Landing",
    tags: ["CSS Grid", "HTML5", "Animations"],
    description: "A modern technology landing page template showcasing advanced CSS layouts and responsive design principles.",
    fullDescription: "TechWeb is a demonstration of modern web design capabilities. It features complex CSS Grid layouts, custom SVG animations, and a focus on high-end tech aesthetics, making it a perfect template for startups and technology companies.",
    img: "/techweb.png",
    github: "https://github.com/najiba-ta/TechWeb",
    link: "https://digitoolsbuyingplatform.netlify.app",
    challenges: [
      "Creating a complex, overlapping grid layout that remains fully responsive.",
      "Optimizing CSS animations for performance across different browsers.",
      "Ensuring cross-browser compatibility for advanced CSS features."
    ],
    futurePlans: [
      "Converting the template into a fully customizable React component library.",
      "Adding more pre-built sections like pricing and FAQ.",
      "Implementing a one-click theme customization tool."
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id === id);
}
