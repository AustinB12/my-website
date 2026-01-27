import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { ThemeProvider, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utils/theme";

function App() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column"
			}}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Box component="main" sx={{ flex: 1 }}>
					<Hero />
					<About />
					<Experience />
					<Skills />
					<Education />
					<Projects />
					<Contact />
				</Box>
				<Footer />
			</ThemeProvider>
		</Box>
	);
}

export default App;
