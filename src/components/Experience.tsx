import { Work } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";

const experiences = [
	{
		id: 1,
		title: "Full-Stack Software Engineer II",
		company: "SolarWinds",
		period: "2022 - Present",
		description:
			"Designing, architecting, and developing a Database Observability application",
		achievements: [
			"UI Rewrite from React v16 to v19 with TypeScript integration",
			"Trained and mentored interns and junior developers",
			"Reduced build times by ~40%"
		],
		years: 4
	},
	{
		id: 2,
		title: "Software Engineer",
		company: "REMI Group",
		period: "2021 - 2022",
		description:
			"Full-Stack development in an Angular, Node.js, SQL Server tech stack coding feature and bug fixes",
		achievements: [
			"Managing DevOps in Azure and TeamCity",
			"Contributing to engineering documentation and best practices",
			"Onboarding new developers to the team"
		],
		years: 1
	},
	{
		id: 3,
		title: "Software Engineer",
		company: "Ally Financial",
		period: "2020 - 2022",
		description:
			"Developed and maintained a large-scale .NET app for Ally call centers",
		achievements: ["Led the development of a MVP logging application in Go"],
		years: 1
	},
	{
		id: 4,
		title: "Software Developer",
		company: "EMS Linq",
		period: "2019 - 2020",
		description:
			"Full Stack development on an Agile team in a React / .NET / SQL Server tech stack",
		achievements: [
			"Completed numerous client-facing features successfully",
			"Learned agile methodologies and team collaboration"
		],
		years: 1
	}
];

function Experience() {
	return (
		<Box
			component="section"
			sx={{ bgcolor: "background.paper", padding: "5rem 0" }}
			id="experience"
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
					Work Experience <Work color="primary" fontSize="large" />
				</Typography>
				<Box
					sx={{
						maxWidth: "800px",
						margin: "0 auto",
						position: "relative",
						"&::before": {
							content: '""',
							position: "absolute",
							left: 0,
							top: 0,
							bottom: 0,
							width: "2px",
							backgroundColor: "primary.main"
						}
					}}
				>
					{experiences.map((exp) => (
						<Box
							key={exp.id}
							sx={{
								position: "relative",
								paddingLeft: "2rem",
								marginBottom: "2rem",
								transition: "all 0.3s ease"
							}}
						>
							<Box
								sx={{
									position: "absolute",
									left: "-6px",
									top: 0,
									width: "14px",
									height: "14px",
									borderRadius: "50%",
									backgroundColor: "primary.main",
									border: "3px solid",
									borderColor: "background.default"
								}}
							/>
							<Box
								sx={{
									backgroundColor: "background.default",
									padding: "1.5rem",
									borderRadius: "0.75rem",
									boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
									transition: "all 0.3s ease",
									"&:hover": {
										boxShadow: 3
									}
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "flex-start",
										marginBottom: "1rem",
										flexWrap: "wrap",
										gap: "0.5rem",
										"@media (max-width: 768px)": {
											flexDirection: "column"
										}
									}}
								>
									<Box>
										<Typography
											sx={{
												fontSize: "1.25rem",
												fontWeight: 600,
												color: "text.primary"
											}}
										>
											{exp.title}
										</Typography>
										<Typography
											sx={{
												color: "primary.light",
												fontWeight: 500
											}}
										>
											{exp.company}
											<Chip
												component={"span"}
												label={`${exp.years} Year${exp.years > 1 ? "s" : ""}`}
												size="small"
												sx={{ ml: 1 }}
												color="primary"
											/>
										</Typography>
									</Box>
									<Typography
										sx={{
											color: "text.secondary",
											fontSize: "0.875rem",
											backgroundColor: "background.default",
											padding: "0.25rem 0.75rem",
											borderRadius: "1rem"
										}}
									>
										{exp.period}
									</Typography>
								</Box>
								<Typography
									sx={{
										color: "text.secondary",
										marginBottom: "1rem"
									}}
								>
									{exp.description}
								</Typography>
								<Box
									component="ul"
									sx={{
										listStyle: "disc",
										paddingLeft: "1.25rem",
										margin: 0
									}}
								>
									{exp.achievements.map((achievement, index) => (
										<Box
											component="li"
											key={index}
											sx={{
												color: "text.secondary",
												fontSize: "0.95rem",
												marginBottom: "0.5rem"
											}}
										>
											{achievement}
										</Box>
									))}
								</Box>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}

export default Experience;
