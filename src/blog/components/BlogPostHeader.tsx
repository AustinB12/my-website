import { Chip, Stack, Typography } from '@mui/material'

interface BlogPostHeaderProps {
	title: string
	chips: { label: string; sx?: object }[]
	intro: React.ReactNode
}

export default function BlogPostHeader({
	title,
	chips,
	intro,
}: BlogPostHeaderProps) {
	return (
		<>
			<Typography variant="h1">{title}</Typography>
			<Stack direction="row" spacing={2} sx={{ mt: 1 }}>
				{chips.map((chip) => (
					<Chip
						key={chip.label}
						sx={{ fontWeight: 'bold', ...chip.sx }}
						color={chip.sx ? undefined : 'primary'}
						label={chip.label}
					/>
				))}
			</Stack>
			<Typography
				variant="body1"
				sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.8 }}
			>
				{intro}
			</Typography>
		</>
	)
}
