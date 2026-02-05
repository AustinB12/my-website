import { Box, Container, Stack, Typography } from "@mui/material";
import Grainient from "../components/Gradient";
import { Link } from "react-router-dom";

const posts = [
	{
		id: 1,
		title: "My First Blog Post"
	},
	{
		id: 2,
		title: "My Second Blog Post"
	},
	{
		id: 3,
		title: "My Third Blog Post"
	},
	{
		id: 4,
		title: "My fourth Blog Post"
	}
];

export default function Blog_Home() {
	return (
		<Container
			sx={{
				width: "100%",
				flex: 1,
				mt: "68px",
				position: "relative"
			}}
		>
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					zIndex: -1,
					opacity: 0.55
				}}
			>
				<Grainient
					color1="#02d430"
					color2="#04632f"
					color3="#0d8802"
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
			<Typography sx={{ my: 2 }} variant="h1">
				{"Austin's Blog"}
			</Typography>
			<Typography
				sx={{ fontSize: { xs: "8rem", sm: "16rem" }, textAlign: "center" }}
			>
				{"🤷"}
			</Typography>
			<Typography
				textAlign={"center"}
				color="text.secondary"
				fontStyle={"italic"}
				variant="subtitle1"
			>
				{"Coming Soon..."}
			</Typography>
			<Link to="/blog/1">Go to my first blog post</Link>
		</Container>
	);
}
