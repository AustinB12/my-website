import { ThemeProvider, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';

import theme from './utils/theme';
import Blog_Post_Page from './blog/Blog_Post_Page';
import Blog_Home from './blog/Blog_Home';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <Box component='main' sx={{ flex: 1 }}>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Education />
                <Projects />
                <Contact />
              </Box>
            }
          />
          <Route path='/blog'>
            <Route path=':post_id' element={<Blog_Post_Page />} />
            <Route index element={<Blog_Home />} />
          </Route>
          <Route path='*' element={<div>Page Not Found</div>} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
