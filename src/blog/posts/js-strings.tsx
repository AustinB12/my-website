import { ExpandMore } from '@mui/icons-material';
import {
  Chip,
  Paper,
  Stack,
  Typography,
  Box,
  useTheme,
  Collapse,
  Link,
} from '@mui/material';
import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function JS_Strings_Post() {
  const theme = useTheme();

  const outlineItems = [
    {
      title: 'Single Quotes vs Double Quotes vs Back Ticks',
      icon: '❝',
      description: 'Understanding quote syntax',
      href: '#quotes',
    },
    {
      title: 'Properties',
      icon: '📦',
      description: 'String object properties and attributes',
      href: '#properties',
    },
    {
      title: 'Methods',
      icon: '⚙️',
      description: 'Built-in string manipulation methods',
      href: '#methods',
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <Stack sx={{ py: 4, gap: 1 }}>
      <Typography variant='h1'>Strings 🧵</Typography>
      <Stack direction='row' spacing={2} sx={{ mt: 1 }}>
        <Chip sx={{ fontWeight: 'bold' }} color='primary' label='Programming' />
        <Chip
          sx={{ bgcolor: '#F7DF1D', color: 'black', fontWeight: 'bold' }}
          label='JavaScript'
        />
        <Chip sx={{ fontWeight: 'bold' }} color='primary' label='Basics' />
      </Stack>

      <Typography
        variant='body1'
        sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.8 }}
      >
        Strings are one of the most fundamental data types in JavaScript.
        Whether you're building a web app, parsing data, or just printing
        "Hello, World!", you'll be working with strings constantly. Let's take a
        closer look at how they work.
      </Typography>

      {/* Content Outline */}
      <Paper sx={{ borderRadius: 4, mt: 2, overflow: 'hidden' }}>
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main}65 0%, ${theme.palette.secondary.main}65 100%)`,
            p: 1.5,
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={() => setOpen(!open)}
          role='button'
          aria-expanded={open}
          aria-label='Toggle content outline'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen(!open);
            }
          }}
        >
          <Typography variant='h5' sx={{ fontWeight: 600 }}>
            {'📋 Content Outline'}
          </Typography>
          <ExpandMore
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              transitionProperty: 'rotate',
              rotate: open ? '180deg' : '0',
            }}
          />
        </Box>
        <Collapse in={open}>
          <Stack sx={{ p: 2, gap: 0 }}>
            {outlineItems.map((item, index) => (
              <Link
                href={item.href}
                sx={{ textDecoration: 'none' }}
                key={index}
              >
                <Stack
                  direction='row'
                  spacing={2}
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <Box
                    aria-hidden='true'
                    sx={{
                      fontSize: '1.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 40,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Stack sx={{ flex: 1, justifyContent: 'center' }}>
                    <Typography
                      variant='subtitle1'
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant='caption'
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: '0.85rem',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      fontSize: '1.1rem',
                      pr: 1,
                    }}
                  >
                    {index + 1}
                  </Box>
                </Stack>
              </Link>
            ))}
          </Stack>
        </Collapse>
      </Paper>

      {/* Section 1 — Quotes */}
      <Paper id='quotes' sx={{ ...sectionSx }}>
        <Typography variant='h4' sx={{ fontWeight: 700, mb: 2 }}>
          1. Single Quotes vs Double Quotes vs Back Ticks
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
          JavaScript gives you three ways to define a string literal. Single
          quotes and double quotes are functionally identical — use whichever
          your team's style guide prefers and stay consistent.
        </Typography>
        <CodeBlock
          code={`const single = 'Hello, world!';
const double = "Hello, world!";

// Both produce the exact same string
console.log(single === double); // true`}
          filename='quotes.js'
        />
        <Typography
          sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2, mb: 2 }}
        >
          <strong>Template literals</strong> (backticks) were introduced in ES6
          and unlock two powerful features: <em>string interpolation</em> and{' '}
          <em>multi-line strings</em>.
        </Typography>
        <CodeBlock
          code={`const name = "Austin";
const greeting = \`Hello, \${name}!\`; // "Hello, Austin!"

// Multi-line strings — no \\n needed
const poem = \`Roses are red,
Violets are blue,
Template literals
Are awesome, it's true.\`;

// You can embed any expression
const result = \`2 + 2 = \${2 + 2}\`; // "2 + 2 = 4"`}
          filename='template-literals.js'
        />
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
          <strong>Tip:</strong> If you need to include the backtick character
          itself inside a template literal, escape it with a backslash:{' '}
          <code>{'`\\``'}</code>.
        </Typography>
      </Paper>

      {/* Section 2 — Properties */}
      <Paper id='properties' sx={{ ...sectionSx }}>
        <Typography variant='h4' sx={{ fontWeight: 700, mb: 2 }}>
          2. Properties
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
          The most commonly used string property is <code>.length</code>, which
          returns the number of UTF-16 code units in the string.
        </Typography>
        <CodeBlock
          code={`const msg = "Hello!";
console.log(msg.length); // 6

// Empty string
console.log("".length);  // 0

// Spaces count
console.log("a b c".length); // 5`}
          filename='length.js'
        />
        <Typography
          sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2, mb: 2 }}
        >
          You can also access individual characters by index using bracket
          notation (zero-based):
        </Typography>
        <CodeBlock
          code={`const str = "JavaScript";
console.log(str[0]); // "J"
console.log(str[4]); // "S"

// Out-of-bounds returns undefined
console.log(str[100]); // undefined`}
          filename='indexing.js'
        />
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
          <strong>Important:</strong> Strings in JavaScript are{' '}
          <em>immutable</em>. You can read characters by index, but you cannot
          assign to them. <code>{"str[0] = 'j'"}</code> silently does nothing.
        </Typography>
      </Paper>

      {/* Section 3 — Methods */}
      <Paper id='methods' sx={{ ...sectionSx }}>
        <Typography variant='h4' sx={{ fontWeight: 700, mb: 2 }}>
          3. Methods
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
          Strings come packed with built-in methods. Here are the ones you'll
          reach for most often:
        </Typography>

        <Typography variant='h6' sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
          Searching
        </Typography>
        <CodeBlock
          code={`const str = "Hello, world!";

str.includes("world");    // true
str.startsWith("Hello");  // true
str.endsWith("!");         // true
str.indexOf("world");      // 7  (index of first match, or -1)`}
          filename='searching.js'
        />

        <Typography variant='h6' sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          Transforming
        </Typography>
        <CodeBlock
          code={`const str = "  Hello, World!  ";

str.toUpperCase();   // "  HELLO, WORLD!  "
str.toLowerCase();   // "  hello, world!  "
str.trim();          // "Hello, World!"
str.trimStart();     // "Hello, World!  "
str.trimEnd();       // "  Hello, World!"
str.replace("World", "JS"); // "  Hello, JS!  "
str.replaceAll(" ", "-");   // "--Hello,-World!--"`}
          filename='transforming.js'
        />

        <Typography variant='h6' sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          Extracting
        </Typography>
        <CodeBlock
          code={`const str = "JavaScript";

str.slice(0, 4);     // "Java"
str.slice(4);        // "Script"
str.slice(-6);       // "Script"  (negative = from end)
str.substring(4, 6); // "Sc"

// Split a string into an array
"a,b,c".split(",");  // ["a", "b", "c"]
"hello".split("");   // ["h", "e", "l", "l", "o"]`}
          filename='extracting.js'
        />

        <Typography variant='h6' sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          Padding & Repeating
        </Typography>
        <CodeBlock
          code={`// Pad to a target length
"5".padStart(3, "0");   // "005"
"hi".padEnd(10, ".");   // "hi........"

// Repeat
"ha".repeat(3);         // "hahaha"`}
          filename='padding.js'
        />

        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 3 }}>
          Remember — since strings are immutable, none of these methods modify
          the original string. They always return a <em>new</em> string.
        </Typography>
      </Paper>
    </Stack>
  );
}

const sectionSx = {
  p: 3,
  borderRadius: 3,
  mt: 2,
};
