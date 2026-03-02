import { lazy, type ComponentType } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  component: React.LazyExoticComponent<ComponentType>;
  wordCount: number;
}

/**
 * Central registry of all blog posts.
 * Add new posts here — both the Blog Home and Blog Post pages read from this array.
 * Posts are displayed newest-first by default.
 *
 * `wordCount` is an approximate count used to calculate reading time.
 */
const posts: BlogPost[] = [
  {
    slug: 'js-strings',
    title: 'Strings in JavaScript',
    date: '2026-02-05',
    description:
      "A beginner-friendly deep dive into JavaScript's string data type — quotes, properties, and the most useful built-in methods.",
    tags: ['JavaScript', 'Programming', 'Basics'],
    component: lazy(() => import('./js-strings')),
    wordCount: 850,
  },
  {
    slug: 'js-booleans',
    title: 'Booleans in JavaScript',
    date: '2026-02-05',
    description:
      "A beginner-friendly deep dive into JavaScript's boolean data type — true, false, and logical operations.",
    tags: ['JavaScript', 'Programming', 'Basics'],
    component: lazy(() => import('./js-booleans')),
    wordCount: 850,
  },
];

export default posts;

/**
 * Returns estimated reading time in minutes (assumes ~200 wpm).
 */
export function getReadingTime(wordCount: number): string {
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

/**
 * Formats a date string (YYYY-MM-DD) to a human-readable form.
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get all unique tags across all posts.
 */
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

/**
 * Find a post by slug, or undefined if not found.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/**
 * Get neighboring posts for navigation (previous and next).
 */
export function getAdjacentPosts(slug: string): {
  prev: BlogPost | undefined;
  next: BlogPost | undefined;
} {
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    prev: index > 0 ? posts[index - 1] : undefined,
    next: index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}
