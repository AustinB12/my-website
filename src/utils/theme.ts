import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: "#70e000",
					light: "#8aff14",
					dark: "#57ad00"
				},
				secondary: {
					main: "#004b23",
					light: "#06793c",
					dark: "#023118"
				},
				text: {
					primary: "#fdfcfb",
					secondary: "#ece3da",
					primaryChannel: "#ffffff"
				},
				background: {
					default: "#181818",
					paper: "#2b2b2b"
				}
			}
		},
		light: {
			palette: {
				primary: {
					main: "#3d7a00",
					light: "#57ad00",
					dark: "#244700"
				},
				secondary: {
					main: "#32b3e0"
				},
				text: {
					primary: "#171717",
					secondary: "#4b4b49",
					primaryChannel: "#ffffff"
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
