import { Mood } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import CountUp from './CountUp';

const wiggle1 = keyframes`
	0%, 100% {
		transform: translate(0, 0);
	}
	33% {
		transform: translate(-5px, 2px);
	}
	66% {
		transform: translate(1px, 4px);
	}
`;

const wiggle2 = keyframes`
	0%, 100% {
		transform: translate(0, 0);
	}
	33% {
		transform: translate(2px, -3px);
	}
	66% {
		transform: translate(-3px, 2px);
	}
`;

const wiggle3 = keyframes`
	0%, 100% {
		transform: translate(0, 0);
	}
	33% {
		transform: translate(1px, -3px);
	}
	66% {
		transform: translate(3px, 2px);
	}
`;

function About() {
  return (
    <Box
      component='section'
      id='about'
      sx={{
        bgcolor: 'background.default',
        padding: '5rem 0',
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <Typography
          component='h2'
          sx={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          About Me <Mood color='primary' fontSize='large' />
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '3fr 4fr' },
            gap: '4rem',
            alignItems: 'center',
            '@media (max-width: 768px)': {
              textAlign: 'center',
            },
          }}
        >
          <Box
            sx={{
              '@media (max-width: 768px)': {
                margin: '0 auto',
              },
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '300px', md: '400px' },
                aspectRatio: '1',
                borderRadius: '10rem',
                cornerShape: 'squircle',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                margin: { xs: '0 auto', md: '0' },
                bgcolor: 'background.paper',
              }}
            >
              <Box
                component='img'
                src={'/about-1.png'}
                alt='Austin Baird'
                sx={{
                  width: '48%',
                  position: 'absolute',
                  transformOrigin: 'top left',
                  top: '35%',
                  left: '6%',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
                  animation: `${wiggle1} 8s ease-in-out infinite`,
                  borderRadius: '27%',
                }}
              />
              <Box
                component='img'
                src={'/about-2.png'}
                alt='Austin Baird'
                sx={{
                  width: '48%',
                  position: 'absolute',
                  transformOrigin: 'top left',
                  top: '8%',
                  left: '25%',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
                  animation: `${wiggle2} 8s 0.5s ease-in-out infinite`,
                  borderRadius: '50%',
                }}
              />
              <Box
                component='img'
                src={'/about-3.png'}
                alt='Austin Baird'
                sx={{
                  width: '48%',
                  position: 'absolute',
                  transformOrigin: 'top left',
                  top: '40%',
                  left: '50%',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
                  animation: `${wiggle3} 8s 1s ease-in-out infinite`,
                  borderRadius: '50%',
                }}
              />
            </Box>
          </Box>
          <Box
            bgcolor={'background.paper'}
            sx={{ p: 3, borderRadius: 6, boxShadow: 3 }}
          >
            <Typography
              sx={{
                color: 'text.secondary',
                marginBottom: '1rem',
                fontSize: '1.1rem',
                textIndent: '2em',
              }}
            >
              I'm a software engineer with a passion for designing UIs, building
              software, and solving complex problems. With experience in
              full-stack development, I enjoy working on projects that challenge
              me and allow me to grow.
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                marginBottom: '1rem',
                fontSize: '1.1rem',
                textIndent: '2em',
              }}
            >
              When I'm not coding, you can find me hanging out with my new
              daughter, walking my dogs, in my garden, or working out.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '2rem',
                marginTop: '2rem',
                justifyContent: 'center',
                '@media (max-width: 768px)': {
                  justifyContent: 'center',
                },
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    display: 'block',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'primary.main',
                  }}
                >
                  <CountUp
                    from={0}
                    to={7}
                    separator=','
                    direction='up'
                    duration={1.5}
                    startWhen={true}
                  />
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                  }}
                >
                  Years Experience
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    display: 'block',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'primary.main',
                  }}
                >
                  <CountUp
                    from={0}
                    to={2}
                    separator=','
                    direction='up'
                    duration={1.5}
                    startWhen={true}
                    delay={1.5}
                  />
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                  }}
                >
                  CS Degrees
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
