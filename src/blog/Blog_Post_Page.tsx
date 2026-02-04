import { useParams } from "react-router-dom";

export default function Blog_Post_Page() {
	const { post_id } = useParams<{ post_id: string }>();
	return <div>Blog_Post_Page {post_id}</div>;
}
