import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Blog_Post_Page() {
	const { post_id } = useParams<{ post_id: string }>();
	return (
		<Container
			sx={{
				width: "100%",
				flex: 1,
				mt: "68px",
				position: "relative",
				border: "5px solid deeppink"
			}}
		>
			<h1>Blog Post {post_id}</h1>
		</Container>
	);
}
