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

export const articles: Article[] = [
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
