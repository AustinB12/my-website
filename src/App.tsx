import { Box, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router-dom'
import Blog_Home from './blog/Blog_Home'
import Blog_Post_Page from './blog/Blog_Post_Page'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import theme from './utils/theme'

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
						path="/"
						element={
							<Box component="main" id="main-content" sx={{ flex: 1 }}>
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
					<Route path="/blog">
						<Route path=":slug" element={<Blog_Post_Page />} />
						<Route index element={<Blog_Home />} />
					</Route>
					<Route path="*" element={<div>Page Not Found</div>} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</Box>
	)
}

export default App
