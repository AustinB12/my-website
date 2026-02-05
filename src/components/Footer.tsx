import { ArrowUpward } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";

interface FooterLinkItem {
	label: string;
	href: string;
	external?: boolean;
}

interface FooterSectionProps {
	title: string;
	links: FooterLinkItem[];
}

const FooterLink = ({
	href,
	label,
	external,
	isLast
}: FooterLinkItem & { isLast?: boolean }) => (
	<li style={{ marginBottom: isLast ? 0 : "0.5rem" }}>
		<Link
			href={href}
			sx={{
				color: "text.secondary",
				textDecoration: "none",
				transition: "color 0.3s ease",
				"&:hover": {
					color: "text.primary",
					fontWeight: 500
				}
			}}
			{...(external && { target: "_blank", rel: "noopener noreferrer" })}
		>
			{label}
		</Link>
	</li>
);

const FooterSection = ({ title, links }: FooterSectionProps) => (
	<Box>
		<Typography
			sx={{
				fontSize: "1rem",
				fontWeight: 600,
				marginBottom: "1rem"
			}}
		>
			{title}
		</Typography>
		<Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
			{links.map((link, idx) => (
				<FooterLink
					key={link.href}
					{...link}
					isLast={idx === links.length - 1}
				/>
			))}
		</Box>
	</Box>
);

function Footer() {
	const currentYear = new Date().getFullYear();

	const navigationLinks: FooterLinkItem[] = [
		{ label: "Top", href: "/" },
		{ label: "Blog", href: "/blog" }
	];

	const connectLinks: FooterLinkItem[] = [
		{
			label: "GitHub",
			href: "https://github.com/austinbaird12",
			external: true
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/im-austin-baird/",
			external: true
		}
	];

	return (
		<Box
			component="footer"
			sx={{
				bgcolor: "background.default",
				paddingTop: "1rem"
			}}
		>
			<Box
				sx={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 2rem",
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr" },
					gap: { xs: "1rem", md: "3rem" },
					"@media (max-width: 768px)": {
						textAlign: "center"
					}
				}}
			>
				<Box>
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
					<Typography
						sx={{
							marginTop: "1rem"
						}}
					>
						Building great software, one line at a time.
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						gap: "3rem",
						flexDirection: "row",
						"@media (max-width: 768px)": {
							justifyContent: "center"
						}
					}}
				>
					{/* <FooterSection title="Navigation" links={navigationLinks} />
					<FooterSection title="Connect" links={connectLinks} /> */}
					<Button
						sx={{ py: 0.75, px: 1.5, height: "min-content" }}
						startIcon={<ArrowUpward />}
						variant="outlined"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					>
						Back To Top
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					padding: "1rem 0",
					textAlign: "center"
				}}
			>
				<Box
					sx={{
						maxWidth: "1200px",
						margin: "0 auto",
						padding: "0 1rem"
					}}
				>
					<Typography sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
						© {currentYear} | All rights reserved.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
