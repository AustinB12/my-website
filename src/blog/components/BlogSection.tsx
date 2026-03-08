import { Paper } from '@mui/material'
import type { PropsWithChildren } from 'react'
import BlogSectionHeader from './BlogSectionHeader'

interface BlogSectionProps {
	id: string
	header?: string
}

export default function BlogSection({
	id,
	children,
	header,
}: PropsWithChildren<BlogSectionProps>) {
	return (
		<Paper id={id} sx={{ p: 3, borderRadius: 3, mt: 2 }}>
			{header && <BlogSectionHeader>{header}</BlogSectionHeader>}
			{children}
		</Paper>
	)
}
