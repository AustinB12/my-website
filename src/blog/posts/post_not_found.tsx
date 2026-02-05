import { Stack, Typography, Button, Paper, Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PostNotFound() {
	const theme = useTheme();
	const navigate = useNavigate();

	return (
		<Stack
			sx={{
				py: 8,
				gap: 3,
				minHeight: "60vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Paper
				sx={{
					borderRadius: 36,
					overflow: "hidden",
					maxWidth: 600,
					width: "100%",
					cornerShape: "squircle"
				}}
			>
				<Box
					sx={{
						background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper}88 100%)`,
						p: 4,
						textAlign: "center"
					}}
				>
					<Typography
						variant="h2"
						sx={{
							fontWeight: 700,
							mb: 2
						}}
					>
						<svg width="4rem" height="4rem" viewBox="0 0 185 185" fill="none">
							<path
								d="M92.5 0C143.586 0 185 41.4137 185 92.5C185 143.586 143.586 185 92.5 185C41.4137 185 0 143.586 0 92.5C0 41.4137 41.4137 0 92.5 0ZM48.5 129.5V148.852C49.3198 148.949 50.154 149 51 149H65.5V129.5H48.5ZM66.5 129.5V149H83.5V129.5H66.5ZM84.5 129.5V149H101.5V129.5H84.5ZM102.5 129.5V149H119.5V129.5H102.5ZM120.5 129.5V149H135C135.846 149 136.68 148.949 137.5 148.852V129.5H120.5ZM30.0537 129.5C30.7402 139.226 38.0497 147.122 47.5 148.708V129.5H30.0537ZM138.5 129.5V148.708C147.95 147.122 155.26 139.226 155.946 129.5H138.5ZM47.5 107.291C37.7276 108.931 30.2437 117.319 30.0059 127.5H47.5V107.291ZM51 107C50.154 107 49.3198 107.051 48.5 107.148V127.5H65.5V107H51ZM66.5 107V127.5H83.5V107H66.5ZM84.5 107V127.5H101.5V107H84.5ZM102.5 107V127.5H119.5V107H102.5ZM120.5 107V127.5H137.5V107.148C136.68 107.051 135.846 107 135 107H120.5ZM138.5 127.5H155.994C155.756 117.319 148.272 108.931 138.5 107.291V127.5ZM65 60C58.3726 60 53 66.268 53 74C53 81.732 58.3726 88 65 88C71.6274 88 77 81.732 77 74C77 66.268 71.6274 60 65 60ZM120 60C113.373 60 108 66.268 108 74C108 81.732 113.373 88 120 88C126.627 88 132 81.732 132 74C132 66.268 126.627 60 120 60Z"
								fill={theme.palette.primary.main}
							/>
						</svg>
					</Typography>
					<Typography
						variant="h2"
						sx={{
							fontWeight: 600,
							mb: 1
						}}
					>
						{"Post Not Found"}
					</Typography>
					<Typography
						variant="h6"
						sx={{
							color: theme.palette.text.secondary,
							mb: 3,
							fontWeight: 400
						}}
					>
						{"Oops! We couldn't find the blog post you're looking for."}
					</Typography>

					<Stack sx={{ p: 2, gap: 2 }}>
						<Typography
							variant="body1"
							sx={{ color: theme.palette.text.secondary }}
						>
							{
								"This post may have been removed, renamed, or never existed. But don't worry, there's plenty of other great content to explore!"
							}
						</Typography>

						<Stack
							direction={{ xs: "column", sm: "row" }}
							spacing={2}
							sx={{ mt: 2 }}
						>
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={() => navigate("/blog")}
								sx={{
									flex: 1,
									fontWeight: 600,
									py: 1.5
								}}
							>
								{"← Back"}
							</Button>
							<Button
								variant="outlined"
								color="primary"
								size="large"
								onClick={() => navigate("/")}
								sx={{
									flex: 1,
									fontWeight: 600,
									py: 1.5
								}}
							>
								{"Home"}
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Paper>
		</Stack>
	);
}
