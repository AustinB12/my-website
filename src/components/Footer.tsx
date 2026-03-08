import { ArrowUpward } from '@mui/icons-material'
import { Box, Button, Link, Typography } from '@mui/material'

function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<Box
			component="footer"
			role="contentinfo"
			sx={{
				bgcolor: 'background.default',
				paddingTop: '1rem',
			}}
		>
			<Box
				sx={{
					maxWidth: '1200px',
					margin: '0 auto',
					padding: '0 2rem',
					display: 'grid',
					gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
					gap: { xs: '1rem', md: '3rem' },
					'@media (max-width: 768px)': {
						textAlign: 'center',
					},
				}}
			>
				<Box>
					<Link
						href="#"
						sx={{
							fontSize: '1.5rem',
							fontWeight: 700,
							textDecoration: 'none',
							color: 'inherit',
							'& span': {
								color: 'primary.main',
							},
						}}
					>
						AustinBaird<span>.software</span>
					</Link>
					<Typography
						sx={{
							marginTop: '1rem',
						}}
					>
						Building great software, one line at a time.
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '3rem',
						flexDirection: 'row',
						'@media (max-width: 768px)': {
							justifyContent: 'center',
						},
					}}
				>
					{/* <FooterSection title="Navigation" links={navigationLinks} />
					<FooterSection title="Connect" links={connectLinks} /> */}
					<Button
						sx={{ py: 0.75, px: 1.5, height: 'min-content' }}
						startIcon={<ArrowUpward />}
						variant="outlined"
						aria-label="Scroll back to top of page"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						Back To Top
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					padding: '1rem 0',
					textAlign: 'center',
				}}
			>
				<Box
					sx={{
						maxWidth: '1200px',
						margin: '0 auto',
						padding: '0 1rem',
					}}
				>
					<Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
						© {currentYear} | All rights reserved.
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer
