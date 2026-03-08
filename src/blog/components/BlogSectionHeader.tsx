import { Typography } from '@mui/material'
import type { PropsWithChildren } from 'react'

export default function BlogSectionHeader({ children }: PropsWithChildren) {
	return (
		<Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
			{children}
		</Typography>
	)
}
