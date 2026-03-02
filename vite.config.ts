import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

/**
 * Vite plugin that generates a static RSS feed at build time.
 * Post metadata is duplicated here (title, slug, date, description)
 * to avoid importing TypeScript/React modules in a Node context.
 *
 * Keep this in sync with src/blog/posts/index.ts.
 */
function rssFeedPlugin(): Plugin {
  const SITE_URL = 'https://austinbaird.software';

  const posts = [
    {
      slug: 'js-strings',
      title: 'Strings in JavaScript',
      date: '2026-02-05',
      description:
        "A beginner-friendly deep dive into JavaScript's string data type — quotes, properties, and the most useful built-in methods.",
    },
  ];

  return {
    name: 'generate-rss-feed',
    closeBundle() {
      const items = posts
        .map(
          (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date + 'T00:00:00').toUTCString()}</pubDate>
    </item>`,
        )
        .join('\n');

      const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Austin Baird's Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Thoughts on software engineering, tutorials, and things I've learned along the way.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

      const outDir = resolve(__dirname, 'dist');
      mkdirSync(outDir, { recursive: true });
      writeFileSync(resolve(outDir, 'rss.xml'), rss, 'utf-8');
      console.log('✅ RSS feed generated → dist/rss.xml');
    },
  };
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default defineConfig({
  plugins: [react(), rssFeedPlugin()],
});
