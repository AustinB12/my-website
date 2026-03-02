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
import CodeBlock from '../../components/CodeBlock';

export default function JS_Booleans_Post() {
  const theme = useTheme();

  const outlineItems = [
    {
      title: 'Boolean Values',
      icon: '🔘',
      description: 'Understanding true and false',
      href: '#boolean-values',
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <Stack sx={{ py: 4, gap: 1 }}>
      <Typography variant='h1'>Booleans 🧵</Typography>
      <Stack direction='row' spacing={2} sx={{ mt: 1 }}>
        <Chip sx={{ fontWeight: 'bold' }} color='primary' label='Programming' />
        <Chip
          sx={{ bgcolor: '#F7DF1D', color: 'black', fontWeight: 'bold' }}
          label='JavaScript'
        />
        <Chip sx={{ fontWeight: 'bold' }} color='primary' label='Basics' />
      </Stack>

      <Typography
        variant='body1'
        sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.8 }}
      >
        Booleans are fundamental data types. They are the "on / off" and "yes /
        no" of programming. In JavaScript, the boolean values are simply{' '}
        <code>true</code> and <code>false</code>. Let's take a closer look at
        how they work.
      </Typography>

      {/* Content Outline */}
      <Paper sx={{ borderRadius: 4, mt: 2, overflow: 'hidden' }}>
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main}65 0%, ${theme.palette.secondary.main}65 100%)`,
            p: 1.5,
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={() => setOpen(!open)}
          role='button'
          aria-expanded={open}
          aria-label='Toggle content outline'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen(!open);
            }
          }}
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
                    aria-hidden='true'
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
              </Link>
            ))}
          </Stack>
        </Collapse>
      </Paper>

      {/* Section 1 — The bools */}
      <Paper id='booleans' sx={{ ...sectionSx }}>
        <Typography variant='h4' sx={{ fontWeight: 700, mb: 2 }}>
          1. Boolean Basics
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
          TODO
        </Typography>
        <CodeBlock
          code={`const single = 'Hello, world!';
const double = "Hello, world!";

// Both produce the exact same string
console.log(single === double); // true`}
          filename='quotes.js'
        />
      </Paper>
    </Stack>
  );
}

const sectionSx = {
  p: 3,
  borderRadius: 3,
  mt: 2,
};
