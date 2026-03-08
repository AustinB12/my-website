import { Handyman } from '@mui/icons-material'
import { Box, Chip, Typography } from '@mui/material'

const skillTiers = [
	{
		label: 'Expert',
		description: 'Daily use, deep knowledge',
		skills: [
			{ name: 'JavaScript', years: 7 },
			{ name: 'TypeScript', years: 7 },
			{ name: 'React', years: 7 },
			{ name: 'SQL', years: 7 },
			{ name: 'Git', years: 7 },
			{ name: 'C#', years: 7 },
			{ name: '.NET', years: 7 },
			{ name: 'HTML / CSS', years: 7 },
			{ name: 'GraphQL', years: 2 },
			{ name: 'Agile', years: 7 },
			{ name: 'CI/CD', years: 7 },
			{ name: 'SQL Server', years: 7 },
			{ name: 'Azure', years: 7 },
			{ name: 'REST APIs', years: 7 },
		],
	},
	{
		label: 'Proficient',
		description: 'Strong working experience',
		skills: [
			{ name: 'Node.js', years: 5 },
			{ name: 'Express', years: 5 },
			{ name: 'PostgreSQL', years: 3 },
		],
	},
	{
		label: 'Familiar',
		description: 'Project-level experience',
		skills: [
			{ name: 'Next.js', years: 2 },
			{ name: 'Python', years: 3 },
			{ name: 'Go', years: 2 },
			{ name: 'Docker', years: 2 },
			{ name: 'MongoDB', years: 2 },
		],
	},
]

function Skills() {
	return (
		<Box
			component="section"
			id="skills"
			sx={{
				bgcolor: 'background.default',
				padding: { xs: '3rem 0', md: '4rem 0' },
			}}
		>
			<Box
				sx={{
					maxWidth: '1200px',
					margin: '0 auto',
					padding: '0 2rem',
				}}
			>
				<Typography
					component="h2"
					sx={{
						fontSize: '2rem',
						fontWeight: 700,
						marginBottom: '2rem',
						textAlign: 'center',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '0.5rem',
					}}
				>
					Skills & Technologies
					<Handyman color="primary" fontSize="large" />
				</Typography>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '2.5rem',
					}}
				>
					{skillTiers.map((tier) => (
						<Box key={tier.label}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'baseline',
									gap: '0.75rem',
									marginBottom: '1rem',
								}}
							>
								<Typography
									sx={{
										fontSize: '1.25rem',
										fontWeight: 600,
										color: 'text.primary',
									}}
								>
									{tier.label}
								</Typography>
								<Typography
									sx={{
										fontSize: '0.875rem',
										color: 'text.secondary',
									}}
								>
									— {tier.description}
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									gap: '0.75rem',
								}}
							>
								{tier.skills.map((skill) => (
									<Chip
										key={skill.name}
										label={
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													gap: '0.5rem',
												}}
											>
												<span>{skill.name}</span>
												<Typography
													component="span"
													sx={{
														fontSize: '0.9rem',
														opacity: 0.7,
														fontWeight: 500,
														color: 'white',
													}}
												>
													{skill.years}
													{skill.years === 1 ? ' yr' : ' yrs'}
												</Typography>
											</Box>
										}
										variant={tier.label === 'Expert' ? 'filled' : 'outlined'}
										sx={(theme) => ({
											padding: '0.25rem 0.5rem',
											fontSize: '0.9rem',
											height: 'auto',
											borderRadius: '2rem',
											transition: 'all 0.3s ease',
											...(tier.label === 'Expert' && {
												backgroundColor: theme.palette.primary.main,
												color: '#fff',
												fontWeight: 600,
												'&:hover': {
													backgroundColor: theme.palette.primary.dark,
													transform: 'translateY(-2px)',
													boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
												},
											}),
											...(tier.label === 'Proficient' && {
												borderColor: theme.palette.primary.main,
												color: theme.palette.text.primary,
												fontWeight: 500,
												'&:hover': {
													backgroundColor: theme.palette.primary.main,
													color: '#fff',
													transform: 'translateY(-2px)',
													boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
												},
											}),
											...(tier.label === 'Familiar' && {
												borderColor: theme.palette.divider,
												color: theme.palette.text.secondary,
												fontWeight: 500,
												'&:hover': {
													borderColor: theme.palette.primary.main,
													color: theme.palette.text.primary,
													transform: 'translateY(-2px)',
												},
											}),
										})}
									/>
								))}
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default Skills
