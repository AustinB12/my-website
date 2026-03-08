import { AccessTime, CalendarMonth } from '@mui/icons-material'
import { Box, Chip, Container, Paper, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Grainient from '../components/Gradient'
import posts, { formatDate, getAllTags, getReadingTime } from './posts'

export default function Blog_Home() {
	const allTags = getAllTags()
	const [activeTag, setActiveTag] = useState<string | null>(null)

	const filteredPosts = activeTag
		? posts.filter((post) => post.tags.includes(activeTag))
		: posts

	useEffect(() => {
		document.title = 'Blog | Austin Baird'
		return () => {
			document.title = 'Austin Baird | Full Stack Software Engineer'
		}
	}, [])

	return (
		<Container
			sx={{
				width: '100%',
				flex: 1,
				mt: '68px',
				position: 'relative',
			}}
		>
			<div
				aria-hidden="true"
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					zIndex: -1,
					opacity: 0.55,
				}}
			>
				<Grainient
					color1="#02d430"
					color2="#04632f"
					color3="#0d8802"
					timeSpeed={0.25}
					colorBalance={0}
					warpStrength={1}
					warpFrequency={5}
					warpSpeed={2}
					warpAmplitude={50}
					blendAngle={0}
					blendSoftness={0.05}
					rotationAmount={500}
					noiseScale={2}
					grainAmount={0.1}
					grainScale={2}
					grainAnimated={false}
					contrast={1.5}
					gamma={1}
					saturation={1}
					centerX={0}
					centerY={0}
					zoom={0.9}
				/>
			</div>

			<Typography sx={{ my: 2 }} variant="h1">
				{"Austin's Blog"}
			</Typography>
			<Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
				Thoughts on software engineering, tutorials, and things I've learned
				along the way.
			</Typography>

			{/* Tag filter */}
			<Stack
				direction="row"
				spacing={1}
				sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}
			>
				<Chip
					label="All"
					variant={activeTag === null ? 'filled' : 'outlined'}
					color="primary"
					onClick={() => setActiveTag(null)}
					sx={{ fontWeight: 600 }}
				/>
				{allTags.map((tag) => (
					<Chip
						key={tag}
						label={tag}
						variant={activeTag === tag ? 'filled' : 'outlined'}
						color="primary"
						onClick={() => setActiveTag(activeTag === tag ? null : tag)}
						sx={{ fontWeight: 500 }}
					/>
				))}
			</Stack>

			{/* Post cards */}
			<Stack spacing={2} sx={{ pb: 4 }}>
				{filteredPosts.length === 0 && (
					<Typography
						color="text.secondary"
						sx={{ textAlign: 'center', py: 6, fontStyle: 'italic' }}
					>
						No posts matching that tag yet — check back soon!
					</Typography>
				)}
				{filteredPosts.map((post) => (
					<Link
						key={post.slug}
						to={`/blog/${post.slug}`}
						style={{ textDecoration: 'none' }}
					>
						<Paper
							sx={(theme) => ({
								p: 3,
								borderRadius: 4,
								bgcolor: `${theme.palette.background.paper}90`,
								backdropFilter: 'blur(8px)',
								transition: 'all 0.2s ease',
								'&:hover': {
									transform: 'translateY(-2px)',
									boxShadow: theme.shadows[6],
									bgcolor: `${theme.palette.background.paper}dd`,
								},
							})}
						>
							<Typography
								variant="h5"
								sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}
							>
								{post.title}
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}
							>
								{post.description}
							</Typography>
							<Stack
								direction="row"
								spacing={2}
								alignItems="center"
								flexWrap="wrap"
								sx={{ gap: 1 }}
							>
								<Stack direction="row" spacing={0.5} alignItems="center">
									<CalendarMonth
										sx={{ fontSize: '1rem', color: 'text.secondary' }}
									/>
									<Typography variant="caption" color="text.secondary">
										{formatDate(post.date)}
									</Typography>
								</Stack>
								<Stack direction="row" spacing={0.5} alignItems="center">
									<AccessTime
										sx={{ fontSize: '1rem', color: 'text.secondary' }}
									/>
									<Typography variant="caption" color="text.secondary">
										{getReadingTime(post.wordCount)}
									</Typography>
								</Stack>
								<Box sx={{ flex: 1 }} />
								<Stack direction="row" spacing={1}>
									{post.tags.map((tag) => (
										<Chip
											key={tag}
											label={tag}
											size="small"
											variant="outlined"
											color="primary"
											sx={{ fontWeight: 500, fontSize: '0.75rem' }}
										/>
									))}
								</Stack>
							</Stack>
						</Paper>
					</Link>
				))}
			</Stack>
		</Container>
	)
}
