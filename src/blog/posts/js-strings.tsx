import { Typography } from '@mui/material'
import CodeBlock from '../../components/CodeBlock'
import BlogPostContainer from '../components/BlogPostContainer'
import BlogPostHeader from '../components/BlogPostHeader'
import BlogSection from '../components/BlogSection'
import ContentOutline from '../components/ContentOutline'
import type { Blog_Post_Outline_Item } from '../types'

const JS_CHIPS = [
	{ label: 'Programming' },
	{ label: 'JavaScript', sx: { bgcolor: '#F7DF1D', color: 'black' } },
	{ label: 'Basics' },
]

export default function JS_Strings_Post() {
	const outlineItems: Blog_Post_Outline_Item[] = [
		{
			title: 'Single Quotes vs Double Quotes vs Back Ticks',
			icon: '❝',
			description: 'Understanding quote syntax',
			href: '#quotes',
		},
		{
			title: 'Properties',
			icon: '📦',
			href: '#properties',
		},
		{
			title: 'Methods',
			description: 'Built-in string manipulation methods',
			href: '#methods',
		},
	]

	return (
		<BlogPostContainer>
			<BlogPostHeader
				title="Strings 🧵"
				chips={JS_CHIPS}
				intro={
					<>
						Strings are one of the most fundamental data types in JavaScript.
						Whether you're building a web app, parsing data, or just printing
						"Hello, World!", you'll be working with strings constantly. Let's
						take a closer look at how they work.
					</>
				}
			/>

			<ContentOutline items={outlineItems} />

			{/* Section 1 — Quotes */}
			<BlogSection
				id="quotes"
				header="1. Single Quotes vs Double Quotes vs Back Ticks"
			>
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
					filename="quotes.js"
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
					filename="template-literals.js"
				/>
				<Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
					<strong>Tip:</strong> If you need to include the backtick character
					itself inside a template literal, escape it with a backslash:{' '}
					<code>{'`\\``'}</code>.
				</Typography>
			</BlogSection>

			{/* Section 2 — Properties */}
			<BlogSection id="properties" header="2. Properties">
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
					filename="length.js"
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
					filename="indexing.js"
				/>
				<Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
					<strong>Important:</strong> Strings in JavaScript are{' '}
					<em>immutable</em>. You can read characters by index, but you cannot
					assign to them. <code>{"str[0] = 'j'"}</code> silently does nothing.
				</Typography>
			</BlogSection>

			{/* Section 3 — Methods */}
			<BlogSection id="methods" header="3. Methods">
				<Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
					Strings come packed with built-in methods. Here are the ones you'll
					reach for most often:
				</Typography>

				<Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
					Searching
				</Typography>
				<CodeBlock
					code={`const str = "Hello, world!";

str.includes("world");    // true
str.startsWith("Hello");  // true
str.endsWith("!");         // true
str.indexOf("world");      // 7  (index of first match, or -1)`}
					filename="searching.js"
				/>

				<Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
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
					filename="transforming.js"
				/>

				<Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
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
					filename="extracting.js"
				/>

				<Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
					Padding & Repeating
				</Typography>
				<CodeBlock
					code={`// Pad to a target length
"5".padStart(3, "0");   // "005"
"hi".padEnd(10, ".");   // "hi........"

// Repeat
"ha".repeat(3);         // "hahaha"`}
					filename="padding.js"
				/>

				<Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 3 }}>
					Remember — since strings are immutable, none of these methods modify
					the original string. They always return a <em>new</em> string.
				</Typography>
			</BlogSection>
		</BlogPostContainer>
	)
}
