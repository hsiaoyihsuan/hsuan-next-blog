export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  imagePosition: string;
  alt: string;
};

const featuredArticles: Article[] = [
  {
    slug: "designing-reliable-frontend-architecture",
    title: "Designing Reliable Frontend Architecture",
    date: "July 02, 2026",
    excerpt:
      "A practical look at keeping frontend systems understandable as products, teams, and requirements grow.",
    tags: ["Frontend", "Architecture"],
    readTime: "8 min read",
    imagePosition: "right top",
    alt: "Black and white workspace scene for frontend architecture",
  },
  {
    slug: "ai-coding-tools-without-losing-taste",
    title: "How I Use AI Coding Tools Without Losing Taste",
    date: "June 24, 2026",
    excerpt:
      "Notes on using AI as a collaborator while still protecting judgment, craft, and code ownership.",
    tags: ["AI", "Workflow"],
    readTime: "6 min read",
    imagePosition: "left bottom",
    alt: "Black and white coding workflow illustration",
  },
  {
    slug: "small-performance-habits-that-compound",
    title: "Small Performance Habits That Compound",
    date: "June 10, 2026",
    excerpt:
      "Tiny implementation choices that keep interfaces feeling fast without turning every task into a benchmark.",
    tags: ["Performance", "Web"],
    readTime: "5 min read",
    imagePosition: "right bottom",
    alt: "Black and white abstract web performance visual",
  },
  {
    slug: "building-maintainable-product-surfaces",
    title: "Building Maintainable Product Surfaces",
    date: "May 28, 2026",
    excerpt:
      "How clear boundaries, naming, and boring components make product interfaces easier to change later.",
    tags: ["Product", "UI"],
    readTime: "7 min read",
    imagePosition: "left top",
    alt: "Black and white interface planning scene",
  },
  {
    slug: "what-good-refactors-feel-like",
    title: "What Good Refactors Feel Like",
    date: "May 12, 2026",
    excerpt:
      "A reflection on refactoring as a way to make the next change calmer, not just the current code prettier.",
    tags: ["Refactoring", "Engineering"],
    readTime: "4 min read",
    imagePosition: "right top",
    alt: "Black and white software refactoring visual",
  },
];

const fakeArticleTopics = [
  ["server-components-mental-model", "A Mental Model for Server Components", "React", "Next.js"],
  ["debugging-css-with-less-guessing", "Debugging CSS With Less Guessing", "CSS", "Debugging"],
  ["notes-on-product-quality", "Notes on Product Quality", "Product", "Craft"],
  ["making-loading-states-feel-calm", "Making Loading States Feel Calm", "UX", "Frontend"],
  ["how-to-review-ui-changes", "How to Review UI Changes", "Review", "UI"],
  ["keeping-design-tokens-useful", "Keeping Design Tokens Useful", "Design Systems", "CSS"],
  ["writing-better-component-apis", "Writing Better Component APIs", "React", "Architecture"],
  ["the-cost-of-clever-code", "The Cost of Clever Code", "Engineering", "Maintainability"],
  ["practical-accessibility-habits", "Practical Accessibility Habits", "Accessibility", "HTML"],
  ["when-to-reach-for-state-machines", "When to Reach for State Machines", "State", "Frontend"],
  ["building-search-that-feels-fast", "Building Search That Feels Fast", "Performance", "UX"],
  ["small-tests-big-confidence", "Small Tests, Big Confidence", "Testing", "Engineering"],
  ["designing-empty-states", "Designing Empty States", "UX", "Product"],
  ["organizing-nextjs-app-router-projects", "Organizing Next.js App Router Projects", "Next.js", "Architecture"],
  ["making-refactors-reviewable", "Making Refactors Reviewable", "Refactoring", "Review"],
  ["frontend-observability-basics", "Frontend Observability Basics", "Monitoring", "Web"],
  ["notes-on-ai-code-review", "Notes on AI Code Review", "AI", "Workflow"],
  ["building-forms-with-care", "Building Forms With Care", "Forms", "UX"],
  ["what-i-measure-before-optimizing", "What I Measure Before Optimizing", "Performance", "Metrics"],
  ["error-messages-that-help", "Error Messages That Help", "UX", "Writing"],
  ["component-boundaries-that-last", "Component Boundaries That Last", "React", "Architecture"],
  ["choosing-boring-tools", "Choosing Boring Tools", "Engineering", "Tools"],
  ["frontend-security-checklist", "A Frontend Security Checklist", "Security", "Web"],
  ["how-i-document-decisions", "How I Document Decisions", "Documentation", "Workflow"],
  ["animation-with-restraint", "Animation With Restraint", "Motion", "UI"],
  ["building-local-first-demos", "Building Local-First Demos", "Prototyping", "Web"],
  ["designing-useful-dashboards", "Designing Useful Dashboards", "Product", "Data"],
  ["handling-date-and-time-ui", "Handling Date and Time UI", "UX", "Internationalization"],
  ["the-shape-of-good-components", "The Shape of Good Components", "React", "Design Systems"],
  ["ai-prompts-for-maintainers", "AI Prompts for Maintainers", "AI", "Engineering"],
  ["shipping-with-feature-flags", "Shipping With Feature Flags", "Release", "Product"],
  ["better-pull-request-descriptions", "Better Pull Request Descriptions", "Review", "Writing"],
  ["responsive-layouts-without-drama", "Responsive Layouts Without Drama", "CSS", "Responsive"],
  ["designing-for-slow-networks", "Designing for Slow Networks", "Performance", "UX"],
  ["using-typescript-to-explain-intent", "Using TypeScript to Explain Intent", "TypeScript", "Code Quality"],
  ["maintaining-a-personal-website", "Maintaining a Personal Website", "Next.js", "Writing"],
  ["thinking-in-content-models", "Thinking in Content Models", "Content", "Architecture"],
  ["building-navigation-that-scales", "Building Navigation That Scales", "Navigation", "UX"],
  ["why-i-like-small-modules", "Why I Like Small Modules", "Architecture", "Maintainability"],
  ["practical-notes-on-cache-invalidation", "Practical Notes on Cache Invalidation", "Caching", "Web"],
  ["frontend-interview-notes", "Frontend Interview Notes", "Career", "Frontend"],
  ["keeping-side-projects-alive", "Keeping Side Projects Alive", "Process", "Writing"],
  ["designing-with-real-data", "Designing With Real Data", "Product", "Data"],
  ["how-to-name-things-later", "How to Name Things Later", "Code Quality", "Refactoring"],
  ["building-a-writing-rhythm", "Building a Writing Rhythm", "Writing", "Process"],
  ["the-first-hour-of-a-new-codebase", "The First Hour of a New Codebase", "Engineering", "Workflow"],
  ["using-ai-for-exploration", "Using AI for Exploration", "AI", "Learning"],
  ["notes-on-deployment-confidence", "Notes on Deployment Confidence", "Deployment", "Testing"],
  ["frontend-work-that-compounds", "Frontend Work That Compounds", "Frontend", "Career"],
] as const;

const imagePositions = ["right top", "left bottom", "right bottom", "left top"] as const;

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

function getGeneratedArticleDate(index: number) {
  const date = new Date(Date.UTC(2026, 3, 30));
  date.setUTCDate(date.getUTCDate() - index * 14);

  return `${monthNames[date.getUTCMonth()]} ${String(date.getUTCDate()).padStart(2, "0")}, ${date.getUTCFullYear()}`;
}

const generatedArticles: Article[] = fakeArticleTopics.map(
  ([slug, title, firstTag, secondTag], index) => ({
    slug,
    title,
    date: getGeneratedArticleDate(index),
    excerpt:
      "A placeholder article summary for testing the blog card layout, pagination rhythm, and archive density.",
    tags: [firstTag, secondTag],
    readTime: `${4 + (index % 6)} min read`,
    imagePosition: imagePositions[index % imagePositions.length],
    alt: `Black and white visual for ${title}`,
  }),
);

export const articles: Article[] = [...featuredArticles, ...generatedArticles];
