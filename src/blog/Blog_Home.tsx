import { Container, Typography } from "@mui/material";

export default function Blog_Home() {
	return (
		<Container sx={{ width: "100%", minHeight: "max-content", mt: "68px" }}>
			<Typography variant="h1">{"Austin's Blog"}</Typography>
		</Container>
	);
}
