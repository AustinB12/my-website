import { Stack } from '@mui/material'
import type { PropsWithChildren } from 'react'

export default function BlogPostContainer({ children }: PropsWithChildren) {
	return <Stack sx={{ py: 4, gap: 1 }}>{children}</Stack>
}
