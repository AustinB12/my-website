import CodeBlock from '../../components/CodeBlock'
import BlogPostContainer from '../components/BlogPostContainer'
import BlogPostHeader from '../components/BlogPostHeader'
import BlogSection from '../components/BlogSection'
import ContentOutline from '../components/ContentOutline'

const chips = [{ label: 'Programming' }]

export default function CSharp_Collection_Types_Post() {
	const outlineItems = [
		{
			title: 'C# Collection Types',
			icon: '📦',
			href: '#csharp-collection-types',
		},
	]

	return (
		<BlogPostContainer>
			<BlogPostHeader
				title="C# Collection Types"
				chips={chips}
				intro={<>A quick overview of C# collection types</>}
			/>

			<ContentOutline items={outlineItems} />

			<BlogSection id="csharp-collection-types" header="C# Collection Types">
				<CodeBlock language="csharp" code={``} filename="" />
			</BlogSection>
		</BlogPostContainer>
	)
}
