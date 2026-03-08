import type { ComponentType } from 'react'

export interface Blog_Post_Outline_Item {
	title: string
	icon?: string
	description?: string
	href: string
}

export interface Blog_Post {
	slug: string
	title: string
	date: string
	description: string
	tags: string[]
	component: React.LazyExoticComponent<ComponentType>
	wordCount: number
}
