import { ExpandMore } from '@mui/icons-material'
import {
	Box,
	Collapse,
	Link,
	Paper,
	Stack,
	Typography,
	useTheme,
} from '@mui/material'
import { useState } from 'react'
import type { Blog_Post_Outline_Item } from '../types'

interface ContentOutlineProps {
	items: Blog_Post_Outline_Item[]
}

export default function ContentOutline({ items }: ContentOutlineProps) {
	const theme = useTheme()
	const [open, setOpen] = useState(false)

	return (
		<Paper sx={{ borderRadius: 4, mt: 2, overflow: 'hidden' }}>
			<Box
				sx={{
					background: `linear-gradient(135deg, ${theme.palette.primary.main}65 0%, ${theme.palette.secondary.main}65 100%)`,
					p: 1.5,
					position: 'relative',
					cursor: 'pointer',
				}}
				onClick={() => setOpen(!open)}
				role="button"
				aria-expanded={open}
				aria-label="Toggle content outline"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault()
						setOpen(!open)
					}
				}}
			>
				<Typography variant="h5" sx={{ fontWeight: 600 }}>
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
					{items.map((item, index) => (
						<Link
							href={item.href}
							sx={{ textDecoration: 'none' }}
							key={item.title + item.href}
						>
							<Stack
								direction="row"
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
									aria-hidden="true"
									sx={{
										fontSize: '1.8rem',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										minWidth: 40,
									}}
								>
									{item?.icon || '⚫'}
								</Box>
								<Stack sx={{ flex: 1, justifyContent: 'center' }}>
									<Typography
										variant="subtitle1"
										sx={{
											fontWeight: 600,
											color: theme.palette.text.primary,
										}}
									>
										{item.title}
									</Typography>
									{item?.description && (
										<Typography
											variant="caption"
											sx={{
												color: theme.palette.text.secondary,
												fontSize: '0.85rem',
											}}
										>
											{item.description}
										</Typography>
									)}
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
	)
}
