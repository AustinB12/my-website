import CodeBlock from '../../components/CodeBlock'
import BlogPostContainer from '../components/BlogPostContainer'
import BlogPostHeader from '../components/BlogPostHeader'
import BlogSection from '../components/BlogSection'
import ContentOutline from '../components/ContentOutline'

const chips = [
	{ label: 'Programming' },
	{ label: 'C#', sx: { bgcolor: '#512BD4', color: 'white' } },
	{ label: 'Basics' },
]

export default function CSharp_Datatypes_Post() {
	const outlineItems = [
		{
			title: 'Basic Data Types',
			icon: '📦',
			href: '#basic-data-types',
		},
		{
			title: 'Collection Data Types',
			icon: '🟪',
			href: '#collection-data-types',
		},
	]

	return (
		<BlogPostContainer>
			<BlogPostHeader
				title="C# Data Types 📦"
				chips={chips}
				intro={<>A quick overview of the data types in C#</>}
			/>

			<ContentOutline items={outlineItems} />

			<BlogSection id="basic-data-types" header="Basic Data Types">
				<CodeBlock
					language="csharp"
					code={`
int myInt = 42;						// your regular whole number
bool myBool = true;					// true or false, perfect for yes/no questions
string myString = "Hello, C#!";		// a sequence of characters, great for text
double myDouble = 3.14;				// a number with decimal places, ideal for precise measurements
char myChar = 'A';					// a single character, useful for letters or symbols	
						`}
					filename="datatypes.cs"
				/>
			</BlogSection>
			<BlogSection id="collection-data-types" header="Collection Data Types">
				<CodeBlock
					language="csharp"
					code={`
int[] myArray = [1, 2, 3];				// ARRAY | fixed-size collection, very efficient, namespace: System 
List<string> myList = new List<string>();	// LIST  | dynamic length namespace: System.Collections.Generic
List<string> myList = ["hey", "there"];	// simplified version
						`}
					filename="datatypes.cs"
				/>
			</BlogSection>
		</BlogPostContainer>
	)
}
