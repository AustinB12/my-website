import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import JS_Strings_Post from './posts/js-strings';
import PostNotFound from './posts/post_not_found';
import type { JSX } from 'react';

export default function Blog_Post_Page() {
  const { post_id } = useParams<{ post_id: string }>();
  window.location.ancestorOrigins;

  const get_post = (id: number) => {
    const found = posts.find((post) => post.id === id);
    if (found) return found;
    return { id: 0, title: 'Post Not Found', comp: <PostNotFound /> };
  };
  return (
    <Container
      sx={{
        width: '100%',
        flex: 1,
        mt: '68px',
        position: 'relative',
      }}
    >
      {post_id ? get_post(Number(post_id))?.comp : <div>Post not found</div>}
    </Container>
  );
}

const posts: Blog_Post[] = [
  { id: 1, title: 'My First Blog Post', comp: <JS_Strings_Post /> },
];

interface Blog_Post {
  id: number;
  title: string;
  comp: JSX.Element;
}
