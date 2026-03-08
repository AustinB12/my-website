import CodeBlock from '../../components/CodeBlock'
import BlogPostContainer from '../components/BlogPostContainer'
import BlogPostHeader from '../components/BlogPostHeader'
import BlogSection from '../components/BlogSection'
import ContentOutline from '../components/ContentOutline'

const chips = [{ label: 'Programming' }]

export default function CSharp_LINQ_Post() {
	const outlineItems = [
		{
			title: 'What is LINQ?',
			icon: '⛓️',
			href: '#what-is-linq',
		},
	]

	return (
		<BlogPostContainer>
			<BlogPostHeader
				title="C# LINQ"
				chips={chips}
				intro={<>A quick overview of LINQ in C#</>}
			/>

			<ContentOutline items={outlineItems} />

			<BlogSection id="what-is-linq" header="What is LINQ?">
				<CodeBlock language="csharp" code={``} filename="" />
			</BlogSection>
		</BlogPostContainer>
	)
}
