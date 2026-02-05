import { Handyman } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const skills = [
	{ name: "JavaScript", level: 100 },
	{ name: "TypeScript", level: 100 },
	{ name: "React", level: 100 },
	{ name: "SQL", level: 95 },
	{ name: "Node.js", level: 90 },
	{ name: "C#", level: 90 },
	{ name: ".NET", level: 90 },
	{ name: "Git", level: 90 },
	{ name: "Azure", level: 70 }
];

const technologies = [
	"React",
	"Next.js",
	"Node.js",
	"Express",
	"SQL Server",
	"PostgreSQL",
	"MongoDB",
	"Docker",
	"Azure",
	"GraphQL",
	"REST APIs",
	"CI/CD",
	"Agile"
];

function Skills() {
	return (
		<Box
			component="section"
			id="skills"
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
					Skills & Technologies
					<Handyman color="primary" fontSize="large" />
				</Typography>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
						gap: "4rem",
						"@media (max-width: 768px)": {
							gridTemplateColumns: "1fr"
						}
					}}
				>
					<Box>
						<Typography
							sx={{
								fontSize: "1.25rem",
								marginBottom: "1.5rem",
								color: "text.primary",
								fontWeight: 600
							}}
						>
							Core Skills
						</Typography>
						{skills.map((skill) => (
							<Box key={skill.name} sx={{ marginBottom: "1.25rem" }}>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										marginBottom: "0.5rem"
									}}
								>
									<Typography
										sx={{
											fontWeight: 500,
											color: "text.primary"
										}}
									>
										{skill.name}
									</Typography>
									<Typography
										sx={{
											color: "text.secondary",
											fontSize: "0.875rem"
										}}
									>
										{skill.level}%
									</Typography>
								</Box>
								<Box
									sx={{
										height: "8px",
										backgroundColor: "#e5e7eb",
										borderRadius: "4px",
										overflow: "hidden"
									}}
								>
									<Box
										sx={(theme) => ({
											height: "100%",
											background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
											borderRadius: "4px",
											transition: "width 0.5s ease",
											width: `${skill.level}%`
										})}
									/>
								</Box>
							</Box>
						))}
					</Box>

					<Box>
						<Typography
							sx={{
								fontSize: "1.25rem",
								marginBottom: "1.5rem",
								color: "text.primary",
								fontWeight: 600
							}}
						>
							Technologies I Work With
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								gap: "0.75rem"
							}}
						>
							{technologies.map((tech) => (
								<Typography
									key={tech}
									sx={{
										padding: "0.5rem 1rem",
										backgroundColor: "background.default",
										borderRadius: "2rem",
										fontSize: "0.875rem",
										color: "text.primary",
										boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
										transition: "all 0.3s ease",
										"&:hover": {
											backgroundColor: "primary.main",
											color: "white",
											transform: "translateY(-2px)"
										}
									}}
								>
									{tech}
								</Typography>
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Skills;
