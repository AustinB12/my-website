import { School, SchoolTwoTone } from '@mui/icons-material';
import { Box, Chip, Typography } from '@mui/material';

const education = [
  {
    degree: "Master's Degree",
    major: 'Computer Science',
    school: 'UNC Wilmington',
    year: 'May 2026',
    description:
      'Focused on software engineering, advanced algorithms, and management of information systems.',
  },
  {
    degree: "Bachelor's Degree in CS",
    major: 'Computer Science',
    school: 'UNC Wilmington',
    year: 'May 2019',
    description:
      'Core curriculum in programming, data structures, and computer architecture.',
  },
];

function Education() {
  return (
    <Box
      component='section'
      sx={{
        bgcolor: 'background.paper',
        padding: '5rem 0',
      }}
      id='education'
    >
      <Box
        sx={{
          maxWidth: '1200px',
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
          Education <School color='primary' fontSize='large' />
        </Typography>
        <Box
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <Chip
            sx={{
              position: 'absolute',
              top: -18,
              right: -24,
              bgcolor: '#007680',
              color: 'white',
              fontWeight: 'bold',
              rotate: '12deg',
              cursor: 'default',
              zIndex: 10,
            }}
            label='Go Seahawks!'
            icon={<SchoolTwoTone sx={{ fill: 'white' }} />}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {education.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  gap: '2rem',
                  '@media (max-width: 768px)': { gap: '1rem' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: '16px',
                      height: '16px',
                      background:
                        'linear-gradient(135deg, #1c6db8 0%, #433cae 100%)',
                      borderRadius: '50%',
                      boxShadow: '0 0 0 4px rgba(28, 109, 184, 0.2)',
                    }}
                  />
                  {index < education.length - 1 && (
                    <Box
                      sx={{
                        width: '2px',
                        flexGrow: 1,
                        background:
                          'linear-gradient(180deg, #1c6db8 0%, #433cae 100%)',
                        marginTop: '0.5rem',
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    backgroundColor: 'background.default',
                    padding: { xs: '1.25rem 1.5rem', md: '1.5rem 2rem' },
                    borderRadius: '1rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    marginBottom: '2rem',
                    flexGrow: 1,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                      boxShadow: 3,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      background:
                        'linear-gradient(135deg, #1c6db8 0%, #433cae 100%)',
                      color: 'white',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      marginBottom: '0.75rem',
                      position: 'absolute',
                      right: '2rem',
                      top: '1.5rem',
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'text.primary',
                      marginTop: '0.5rem',
                    }}
                  >
                    {item.degree}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'primary.main',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.school}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.major}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Education;
