import { LightMode, DarkMode } from "@mui/icons-material";
import { useColorScheme, IconButton, Box, Link } from "@mui/material";

interface NavItem {
	label: string;
	href: string;
}

const navItems: NavItem[] = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" }
];

const NavLink = ({ label, href }: NavItem) => (
	<li>
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
	</li>
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
				left: 0,
				right: 0,
				backdropFilter: "blur(10px)",
				zIndex: 1000,
				padding: "1rem 0",
				boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
				bgcolor: "background.default"
			}}
		>
			<Box
				sx={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 2rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between"
				}}
			>
				<Link
					href="#"
					sx={{
						fontSize: "1.5rem",
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
						<NavLink label="Blog" href="/blog" />
						<li>
							<LightDarkToggle />
						</li>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Header;
