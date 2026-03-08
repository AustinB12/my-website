import CodeBlock from '../../components/CodeBlock'
import BlogPostContainer from '../components/BlogPostContainer'
import BlogPostHeader from '../components/BlogPostHeader'
import BlogSection from '../components/BlogSection'
import ContentOutline from '../components/ContentOutline'

const chips = [
	{ label: 'Programming' },
	{ label: 'C#', sx: { bgcolor: '#512BD4', color: 'white' } },
]

export default function CSharp_List_Post() {
	const outlineItems = [
		{
			title: 'What is a List?',
			icon: '📋',
			href: '#what-is-a-list',
		},
	]

	return (
		<BlogPostContainer>
			<BlogPostHeader
				title="Lets talk about Lists Ba-by!"
				chips={chips}
				intro={<>All things list-related in C#</>}
			/>

			<ContentOutline items={outlineItems} />

			<BlogSection id="TODO" header="TODO">
				<CodeBlock language="csharp" code={``} filename="" />
			</BlogSection>
		</BlogPostContainer>
	)
}
