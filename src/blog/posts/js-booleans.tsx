import CodeBlock from '../../components/CodeBlock'
import BlogPostContainer from '../components/BlogPostContainer'
import BlogPostHeader from '../components/BlogPostHeader'
import BlogSection from '../components/BlogSection'
import ContentOutline from '../components/ContentOutline'

const JS_CHIPS = [
	{ label: 'Programming' },
	{ label: 'JavaScript', sx: { bgcolor: '#F7DF1D', color: 'black' } },
	{ label: 'Basics' },
]

export default function JS_Booleans_Post() {
	const outlineItems = [
		{
			title: 'Boolean Values',
			icon: '🔘',
			description: 'Understanding true and false',
			href: '#boolean-values',
		},
	]

	return (
		<BlogPostContainer>
			<BlogPostHeader
				title="Booleans 🧵"
				chips={JS_CHIPS}
				intro={
					<>
						Booleans are fundamental data types. They are the "on / off" and
						"yes / no" of programming. In JavaScript, the boolean values are
						simply <code>true</code> and <code>false</code>. Let's take a closer
						look at how they work.
					</>
				}
			/>

			<ContentOutline items={outlineItems} />

			{/* Section 1 — The bools */}
			<BlogSection id="booleans" header="1. Boolean Basics">
				<CodeBlock
					code={`const single = 'Hello, world!';
const double = "Hello, world!";

// Both produce the exact same string
console.log(single === double); // true`}
					filename="quotes.js"
				/>
			</BlogSection>
		</BlogPostContainer>
	)
}
