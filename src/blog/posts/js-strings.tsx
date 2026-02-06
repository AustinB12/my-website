import { ExpandMore } from '@mui/icons-material';
import {
  Chip,
  Paper,
  Stack,
  Typography,
  Box,
  useTheme,
  Collapse,
  Link,
} from '@mui/material';
import { useState } from 'react';
import { href, NavLink } from 'react-router-dom';
import CodeBlock from '../../components/CodeBlock';

export default function JS_Strings_Post() {
  const theme = useTheme();

  const outlineItems = [
    {
      title: 'Single Quotes vs Double Quotes vs Back Ticks',
      icon: '❝',
      description: 'Understanding quote syntax',
      href: '#one',
    },
    {
      title: 'Properties',
      icon: '📦',
      description: 'String object properties and attributes',
      href: '#two',
    },
    {
      title: 'Methods',
      icon: '⚙️',
      description: 'Built-in string manipulation methods',
      href: '#three',
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <Stack sx={{ py: 4, gap: 1 }}>
      <Typography variant='h1'>Strings 🧵</Typography>
      <Typography variant='subtitle1' gutterBottom>
        {'February 5th, 2026'}
      </Typography>
      <Stack direction='row' spacing={2}>
        <Chip sx={{ fontWeight: 'bold' }} color='primary' label='Programming' />
        <Chip
          sx={{ bgcolor: '#F7DF1D', color: 'black', fontWeight: 'bold' }}
          label='JavaScript'
        />
        <Chip sx={{ fontWeight: 'bold' }} color='primary' label='Basics' />
      </Stack>
      <Paper sx={{ borderRadius: 4, mt: 2, overflow: 'hidden' }}>
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main}65 0%, ${theme.palette.secondary.main}65 100%)`,
            p: 1.5,
            position: 'relative',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => setOpen(!open)}
        >
          <Typography variant='h5' sx={{ fontWeight: 600 }}>
            {'📋 Content Outline'}
          </Typography>
          <ExpandMore
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              transitionProperty: 'rotate',
              rotate: open ? '180deg' : '0',
            }}
          />
        </Box>
        <Collapse in={open}>
          <Stack sx={{ p: 2, gap: 0 }}>
            {outlineItems.map((item, index) => (
              <Link
                href={item.href}
                sx={{ textDecoration: 'none' }}
                key={index}
              >
                <Box sx={{ '&:hover': { cursor: 'pointer' } }}>
                  <Stack
                    direction='row'
                    spacing={2}
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: '1.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 40,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Stack sx={{ flex: 1, justifyContent: 'center' }}>
                      <Typography
                        variant='subtitle1'
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant='caption'
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: '0.85rem',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        fontSize: '1.1rem',
                        pr: 1,
                      }}
                    >
                      {index + 1}
                    </Box>
                  </Stack>
                </Box>
              </Link>
            ))}
          </Stack>
        </Collapse>
      </Paper>
      <Paper id='one' sx={{ ...blog_section_sx }}>
        <CodeBlock
          code={`const x = "Double Quotes!";
const y = 'Single Quotes!';`}
        />
      </Paper>
      <Paper id='two' sx={{ ...blog_section_sx }}>
        <CodeBlock
          code={`const x = \`Backticks allow for string interpolation: \${2 + 2}\`;`}
        />
      </Paper>
    </Stack>
  );
}

const blog_section_sx = {
  p: 2,
  borderRadius: 3,
};
