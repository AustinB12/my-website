import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: "#433cae",
					light: "#5148c7ff",
					dark: "#312a86ff"
				},
				secondary: {
					main: "#823cc1",
					light: "#9749dbff",
					dark: "#6e2ea7ff"
				},
				background: {
					default: "#202020",
					paper: "#181818"
				}
			}
		},
		light: {
			palette: {
				primary: {
					main: "#1c6db8",
					light: "#32b3e0"
				},
				secondary: {
					main: "#32b3e0"
				},
				text: {
					primary: "#1f2937",
					secondary: "#6b7280"
				},
				background: {
					default: "#ffffff",
					paper: "#f3f3f3"
				}
			}
		}
	},
	typography: {
		fontFamily:
			'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
		h1: {
			fontSize: "4rem",
			fontWeight: 800,
			lineHeight: 1.1
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 600
		},
		h3: {
			fontSize: "1.25rem",
			fontWeight: 600
		}
	},
	components: {
		MuiTypography: {
			defaultProps: {
				color: "textPrimary"
			}
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					":last-child": {
						paddingBottom: "8px"
					}
				}
			},
			defaultProps: {
				sx: {
					pb: "16px !important"
				}
			}
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					fontSize: "1rem",
					fontWeight: 500,
					padding: "0.75rem 1.5rem",
					borderRadius: "0.5rem",
					transition: "all 0.3s ease"
				},
				contained: {
					"&:hover": {
						transform: "translateY(-2px)",
						boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)"
					}
				}
			}
		},
		MuiTextField: {
			defaultProps: {
				variant: "outlined"
			},
			styleOverrides: {
				root: {
					marginBottom: "1.5rem"
				}
			}
		}
	}
});

export default theme;
