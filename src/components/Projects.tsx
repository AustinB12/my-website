import { LaptopWindows } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";

const projects = [
	{
		id: 1,
		title: "Wayback Public Library",
		description:
			"A full-stack library management system with patron management, book inventory, reservation, and borrowing features.",
		image: "📚",
		technologies: ["React", "Node.js", "TypeScript", "Sqlite", "Express"],
		github: "https://github.com/AustinB12/WPL-app",
		demo: "https://wpl-app.onrender.com/"
	},
	{
		id: 2,
		title: "Risk Dice Roller",
		description:
			"A quick app to speed up dice rolling for the board game Risk. Simulates physics-based dice rolls in 3D.",
		image: "🎲",
		technologies: ["Cannon.js", "TypeScript", "Three.js", "CSS"],
		github: "https://github.com/AustinB12/risk-roller",
		demo: "https://risk-roller-9jgf.onrender.com/"
	}
];

function Projects() {
	return (
		<Box
			component="section"
			id="projects"
			sx={{
				bgcolor: "background.default",
				padding: { xs: "3rem 0", md: "4rem 0" }
			}}
		>
			<Box
				sx={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 2rem"
				}}
			>
				<Typography
					component="h2"
					sx={{
						fontSize: "2rem",
						fontWeight: 700,
						marginBottom: "2rem",
						textAlign: "center",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "0.5rem"
					}}
				>
					Featured Projects <LaptopWindows color="primary" fontSize="large" />
				</Typography>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							md: "repeat(2, 1fr)"
						},
						gap: "2rem"
					}}
				>
					{projects.map((project) => (
						<Box
							key={project.id}
							sx={{
								backgroundColor: "background.paper",
								borderRadius: "1rem",
								overflow: "hidden",
								transition: "transform 0.3s ease, box-shadow 0.3s ease",
								"&:hover": {
									transform: "translateY(-5px)",
									boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
								}
							}}
						>
							<Box
								sx={(theme) => ({
									height: "200px",
									background: `linear-gradient(00deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "6rem"
								})}
							>
								{project.image}
							</Box>
							<Box sx={{ padding: "1.5rem" }}>
								<Typography
									sx={{
										fontSize: "1.25rem",
										fontWeight: 600,
										marginBottom: "0.75rem",
										color: "text.primary"
									}}
								>
									{project.title}
								</Typography>
								<Typography
									sx={{
										color: "text.secondary",
										fontSize: "0.95rem",
										marginBottom: "1rem",
										lineHeight: 1.6
									}}
								>
									{project.description}
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexWrap: "wrap",
										gap: "0.5rem",
										marginBottom: "1rem"
									}}
								>
									{project.technologies.map((tech) => (
										<Typography
											key={tech}
											sx={{
												padding: "0.25rem 0.75rem",
												backgroundColor: "background.paper",
												borderRadius: "1rem",
												fontSize: "0.75rem",
												color: "primary.main",
												fontWeight: 500
											}}
										>
											{tech}
										</Typography>
									))}
								</Box>
								<Box
									sx={{
										display: "flex",
										gap: "1rem"
									}}
								>
									<Link
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											color: "primary.main",
											fontWeight: 500,
											fontSize: "0.875rem",
											transition: "color 0.3s ease",
											textDecoration: "none",
											"&:hover": {
												color: "secondary.main"
											}
										}}
									>
										GitHub →
									</Link>
									<Link
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										sx={{
											color: "primary.main",
											fontWeight: 500,
											fontSize: "0.875rem",
											transition: "color 0.3s ease",
											textDecoration: "none",
											"&:hover": {
												color: "secondary.main"
											}
										}}
									>
										Live Demo →
									</Link>
								</Box>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}

export default Projects;
