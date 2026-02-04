import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import TextType from "./TextType";
import Grainient from "./Gradient";

const rotate = keyframes`
	from {
		transform: rotate(0deg) translate(-50%, -50%);
	}
	to {
		transform: rotate(360deg) translate(-50%, -50%);
	}
`;

function Hero() {
	return (
		<Box
			component="section"
			sx={{
				bgcolor: "background.paper",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				paddingTop: "5rem"
			}}
		>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: 0,
					opacity: 0.45,
					overflow: "hidden"
				}}
			>
				<Grainient
					color1="#b448db"
					color2="#613fe9"
					color3="#7c30d9"
					timeSpeed={0.25}
					colorBalance={0}
					warpStrength={1}
					warpFrequency={5}
					warpSpeed={2}
					warpAmplitude={50}
					blendAngle={0}
					blendSoftness={0.05}
					rotationAmount={500}
					noiseScale={2}
					grainAmount={0.1}
					grainScale={2}
					grainAnimated={false}
					contrast={1.5}
					gamma={1}
					saturation={1}
					centerX={0}
					centerY={0}
					zoom={0.9}
				/>
			</div>
			<Box
				sx={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 2rem",
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
					gap: "2rem",
					alignItems: "center",
					width: "100%",
					zIndex: 2
				}}
			>
				<Box
					sx={(theme) => ({
						bgcolor: theme.palette.mode === "dark" ? "#00000036" : "#ffffff40",
						backdropFilter: "blur(10px)",
						p: 4,
						borderRadius: 8
					})}
				>
					<Typography
						sx={{
							color: "primary.main",
							fontWeight: 500,
							fontSize: "1.125rem",
							marginBottom: "0.5rem"
						}}
					>
						Hello, I'm
					</Typography>
					<Typography
						variant="h1"
						color="primary"
						sx={{
							marginBottom: "0.5rem",
							fontSize: { xs: "3rem", md: "4rem" }
						}}
					>
						<TextType
							typingSpeed={75}
							initialDelay={500}
							pauseDuration={6000}
							showCursor
							cursorCharacter="▮"
							text={["Austin Baird"]}
							deletingSpeed={50}
							cursorBlinkDuration={0.5}
						/>
					</Typography>

					<Typography
						variant="h2"
						sx={{
							marginBottom: "1.5rem"
						}}
					>
						Full Stack Software Engineer
					</Typography>
					<Typography
						sx={{
							fontSize: "1.125rem",
							maxWidth: "500px",
							marginBottom: "3rem"
						}}
					>
						I build exceptional software that is performant, accessible, and
						designed with best practices in mind.
					</Typography>
					<Box
						sx={{
							display: "flex",
							gap: "1rem",
							flexWrap: "wrap",
							"@media (max-width: 768px)": {
								justifyContent: "center"
							}
						}}
					>
						<Button href="#projects" variant="contained" color="primary">
							View My Work
						</Button>
						<Button href="#contact" variant="outlined" color="primary">
							Contact Me
						</Button>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
						"@media (max-width: 768px)": {
							justifyContent: "center"
						}
					}}
				>
					<Box
						component="img"
						src={"/me.png"}
						alt="Austin Baird"
						sx={{
							width: { xs: "250px", md: "350px" },
							height: { xs: "250px", md: "350px" },
							borderRadius: "50%",
							boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)",
							zIndex: 1,
							objectFit: "cover"
						}}
					/>

					<Box
						sx={{
							backgroundImage:
								"linear-gradient(to bottom right, #1c6db8, #32b3e0)",
							position: "absolute",
							width: { xs: "265px", md: "365px" },
							height: { xs: "265px", md: "365px" },
							top: "50%",
							left: "50%",
							borderRadius: "50%",
							animation: `${rotate} 10s linear infinite`,
							transformOrigin: "top left"
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default Hero;
