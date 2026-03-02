import { Suspense, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import PostNotFound from './posts/post_not_found';
import {
  formatDate,
  getAdjacentPosts,
  getPostBySlug,
  getReadingTime,
} from './posts';

export default function Blog_Post_Page() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  const adjacent = slug
    ? getAdjacentPosts(slug)
    : { prev: undefined, next: undefined };

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Austin Baird's Blog`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.description);
    } else {
      document.title = "Post Not Found | Austin Baird's Blog";
    }
    return () => {
      document.title = 'Austin Baird | Full Stack Software Engineer';
    };
  }, [post]);

  if (!post) {
    return (
      <Container
        sx={{ width: '100%', flex: 1, mt: '68px', position: 'relative' }}
      >
        <PostNotFound />
      </Container>
    );
  }

  const PostComponent = post.component;

  return (
    <Container
      sx={{ width: '100%', flex: 1, mt: '68px', position: 'relative' }}
    >
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/blog')}
        sx={{ mt: 2, mb: 1, textTransform: 'none' }}
      >
        Back to Blog
      </Button>

      <Stack sx={{ mb: 1 }} spacing={1}>
        <Stack direction='row' spacing={1} alignItems='center' flexWrap='wrap'>
          <Typography variant='body2' color='text.secondary'>
            {formatDate(post.date)}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            ·
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {getReadingTime(post.wordCount)}
          </Typography>
        </Stack>
      </Stack>

      <Suspense
        fallback={
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        }
      >
        <PostComponent />
      </Suspense>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: 4,
          mt: 4,
          borderTop: 1,
          borderColor: 'divider',
          gap: 2,
        }}
      >
        {adjacent.prev ? (
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate(`/blog/${adjacent.prev!.slug}`)}
            sx={{ textTransform: 'none', textAlign: 'left' }}
          >
            <Stack alignItems='flex-start'>
              <Typography variant='caption' color='text.secondary'>
                Previous
              </Typography>
              <Typography variant='body2'>{adjacent.prev.title}</Typography>
            </Stack>
          </Button>
        ) : (
          <Box />
        )}
        {adjacent.next ? (
          <Button
            endIcon={<ArrowForward />}
            onClick={() => navigate(`/blog/${adjacent.next!.slug}`)}
            sx={{ textTransform: 'none', textAlign: 'right' }}
          >
            <Stack alignItems='flex-end'>
              <Typography variant='caption' color='text.secondary'>
                Next
              </Typography>
              <Typography variant='body2'>{adjacent.next.title}</Typography>
            </Stack>
          </Button>
        ) : (
          <Box />
        )}
      </Box>
    </Container>
  );
}
