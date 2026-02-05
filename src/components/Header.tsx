import { LightMode, DarkMode } from "@mui/icons-material";
import { useColorScheme, IconButton, Box, Link } from "@mui/material";

interface NavItem {
	label: string;
	href: string;
}

const navItems: NavItem[] = [
	{ label: "Skills", href: "/#skills" },
	{ label: "Projects", href: "/#projects" },
	{ label: "Experience", href: "/#experience" }
];

const NavLink = ({ label, href }: NavItem) => (
	<Link
		href={href}
		sx={{
			fontWeight: 500,
			transition: "color 0.3s ease",
			textDecoration: "none",
			color: "text.primary",
			"&:hover": {
				color: "primary.main"
			}
		}}
	>
		{label}
	</Link>
);

const ThemeIcon = ({
	isActive,
	icon: Icon
}: {
	isActive: boolean;
	icon: typeof LightMode;
}) => (
	<Icon
		sx={{
			transform: `translateY(${isActive ? "0px" : "40px"})`,
			position: "absolute",
			transitionProperty: "transform",
			transitionDuration: "300ms",
			transitionTimingFunction: "ease-in-out"
		}}
	/>
);

const LightDarkToggle = () => {
	const { mode, setMode } = useColorScheme();

	return (
		<IconButton
			onClick={() => setMode(mode !== "dark" ? "dark" : "light")}
			title="Toggle the light/dark mode"
			sx={{
				overflow: "clip",
				position: "relative",
				width: 40,
				height: 40
			}}
		>
			<ThemeIcon isActive={mode === "light"} icon={LightMode} />
			<ThemeIcon isActive={mode === "dark"} icon={DarkMode} />
		</IconButton>
	);
};

function Header() {
	return (
		<Box
			component="header"
			sx={{
				position: "fixed",
				top: 0,
				left: "50%",
				transform: "translateX(-50%)",
				m: 1,
				backdropFilter: "blur(10px)",
				zIndex: 1000,
				padding: "0.8rem 0",
				boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
				bgcolor: "#ffffff30",
				borderRadius: "500px",
				display: "flex",
				justifyContent: "center"
			}}
		>
			<Box
				sx={{
					maxWidth: "1200px",
					padding: "0 2rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 6
				}}
			>
				<Link
					href="/"
					sx={{
						fontSize: { xs: "1rem", md: "1.5rem" },
						fontWeight: 700,
						textDecoration: "none",
						color: "inherit",
						"& span": {
							color: "primary.main"
						}
					}}
				>
					AustinBaird<span>.software</span>
				</Link>
				<Box
					component="nav"
					sx={{
						"@media (max-width: 768px)": {
							display: "none"
						}
					}}
				>
					<Box
						component="ul"
						sx={{
							display: "flex",
							gap: "2rem",
							alignItems: "center",
							listStyle: "none",
							margin: 0,
							padding: 0
						}}
					>
						{navItems.map((item) => (
							<NavLink key={item.href} {...item} />
						))}
					</Box>
				</Box>
				<NavLink label="Blog" href="/blog" />
				<LightDarkToggle />
			</Box>
		</Box>
	);
}

export default Header;
