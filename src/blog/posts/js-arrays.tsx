import { Stack, Typography } from '@mui/material';
import CodeBlock from '../../components/CodeBlock';
import BlogPostHeader from '../components/BlogPostHeader';
import BlogSection from '../components/BlogSection';
import ContentOutline from '../components/ContentOutline';
import BlogPostContainer from '../components/BlogPostContainer';

const JS_CHIPS = [
  { label: 'Programming' },
  { label: 'JavaScript', sx: { bgcolor: '#F7DF1D', color: 'black' } },
  { label: 'Basics' },
];

export default function JS_Arrays_Post() {
  const outlineItems = [
    {
      title: 'Array Basics',
      icon: '☄️',
      description: 'Understanding arrays and their usage',
      href: '#array-basics',
    },
  ];

  return (
    <BlogPostContainer>
      <BlogPostHeader
        title='Arrays 🧵'
        chips={JS_CHIPS}
        intro={
          <>
            Arrays are fundamental data structures. They allow you to store
            multiple values in a single variable and provide various methods to
            manipulate these values. In JavaScript, arrays are flexible and can
            hold elements of any type. Let's take a closer look at how they
            work.
          </>
        }
      />

      <ContentOutline items={outlineItems} />

      {/* Section 1 — The arrays */}
      <BlogSection id='array-basics' header='1. Array Basics'></BlogSection>

      {/* Section 2 — The arrays */}
      <BlogSection id='arrays' header='2. Array Methods'>
        <CodeBlock
          code={`const single = 'Hello, world!';
const double = "Hello, world!";

// Both produce the exact same string
console.log(single === double); // true`}
          filename='quotes.js'
        />
      </BlogSection>
    </BlogPostContainer>
  );
}
