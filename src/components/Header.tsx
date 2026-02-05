import { LightMode, DarkMode } from '@mui/icons-material';
import {
  useColorScheme,
  IconButton,
  Box,
  Link,
  Typography,
} from '@mui/material';
import { Activity } from 'react';
import { useMatch } from 'react-router-dom';

const ThemeIcon = ({
  isActive,
  icon: Icon,
}: {
  isActive: boolean;
  icon: typeof LightMode;
}) => (
  <Icon
    sx={{
      transform: `translateY(${isActive ? '0px' : '40px'})`,
      position: 'absolute',
      transitionProperty: 'transform',
      transitionDuration: '300ms',
      transitionTimingFunction: 'ease-in-out',
    }}
  />
);

const LightDarkToggle = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      onClick={() => setMode(mode !== 'dark' ? 'dark' : 'light')}
      title='Toggle the light/dark mode'
      sx={{
        overflow: 'clip',
        position: 'relative',
        width: 40,
        height: 40,
      }}
    >
      <ThemeIcon isActive={mode === 'light'} icon={LightMode} />
      <ThemeIcon isActive={mode === 'dark'} icon={DarkMode} />
    </IconButton>
  );
};

function Header() {
  const on_blog = window.location.pathname.includes('/blog');
  return (
    <Box
      component='header'
      sx={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-52%)',
        m: 1,
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: { xs: '0.4rem 0', md: '0.8rem 0' },
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        bgcolor: '#ffffff30',
        borderRadius: '500px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          padding: { xs: '0 1rem', md: '0 2rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 6,
        }}
      >
        <Typography
          component={'h1'}
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem' },
            fontWeight: 700,
            textDecoration: 'none',
            color: 'inherit',
            '& span': {
              color: 'primary.main',
            },
          }}
        >
          AustinBaird<span>.software</span>
        </Typography>
        <Activity mode={on_blog ? 'visible' : 'hidden'} name='home-link'>
          <Link
            sx={{
              fontWeight: 500,
              transition: 'color 0.3s ease',
              textDecoration: 'none',
              color: 'text.primary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
            href='/'
          >
            Home
          </Link>
        </Activity>
        <Activity mode={!on_blog ? 'visible' : 'hidden'} name='blog-link'>
          <Link
            sx={{
              fontWeight: 500,
              transition: 'color 0.3s ease',
              textDecoration: 'none',
              color: 'text.primary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
            href='/blog'
          >
            Blog
          </Link>
        </Activity>
        <LightDarkToggle />
      </Box>
    </Box>
  );
}

export default Header;
