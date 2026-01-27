import { useState } from "react";
import emailjs from "@emailjs/browser";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import { Call, GitHub, LinkedIn, Work } from "@mui/icons-material";

import { Box, TextField, Button, Typography, Link } from "@mui/material";

const EMAILJS_SERVICE_ID = "service_e5w7tfe";
const EMAILJS_TEMPLATE_ID = "template_ic6j57p";
const EMAILJS_PUBLIC_KEY = "L09qw3B1adV8fUl50";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleChange = (e: React.SyntheticEvent) => {
		setFormData({
			...formData,
			[(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
				.value
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name,
					from_email: formData.email,
					message: formData.message
				},
				EMAILJS_PUBLIC_KEY
			);

			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Failed to send email:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Box
			component="section"
			sx={{ bgcolor: "background.paper", padding: "5rem 0" }}
			id="contact"
		>
			<Box
				sx={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 2rem"
				}}
			>
				<Typography
					component="h2"
					sx={{
						fontSize: "2rem",
						fontWeight: 700,
						marginBottom: "2rem",
						textAlign: "center",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "0.5rem"
					}}
				>
					Contact Me <Call color="primary" fontSize="large" />
				</Typography>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
						gap: "4rem",
						maxWidth: "1000px",
						margin: "0 auto"
					}}
				>
					<Box>
						<Typography
							component="h3"
							sx={{
								fontSize: "1.5rem",
								marginBottom: "1rem",
								fontWeight: 600
							}}
						>
							Let's work together
						</Typography>
						<Typography sx={{ marginBottom: "2rem" }}>
							I'm always interested in hearing about new opportunities,
							collaborating on projects, or just having a conversation about
							technology.
						</Typography>
						<Box sx={{ marginBottom: "2rem" }}>
							<Box
								sx={{
									display: "flex",
									alignItems: "flex-start",
									gap: "1rem",
									marginBottom: "1rem"
								}}
							>
								<EmailIcon color="primary" />
								<Typography>austinzbaird@gmail.com</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "flex-start",
									gap: "1rem",
									marginBottom: "1rem"
								}}
							>
								<PlaceIcon color="primary" />
								<Typography>Wilmington, NC</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "flex-start",
									gap: "1rem"
								}}
							>
								<Work color="primary" />
								<Typography>Open to opportunities</Typography>
							</Box>
						</Box>
						<Box sx={{ display: "flex", gap: "1rem" }}>
							<Link
								href="https://github.com/austinbaird12"
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									padding: "0.5rem 1rem",
									boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
									borderRadius: "0.5rem",
									fontWeight: 500,
									transition: "all 0.3s ease",
									display: "flex",
									gap: "0.5rem",
									textDecoration: "none",
									alignItems: "center",
									"&:hover": {
										boxShadow: "0 4px 8px rgba(67, 60, 174, 0.6)"
									}
								}}
							>
								<Typography>GitHub</Typography>
								<GitHub />
							</Link>
							<Link
								href="https://www.linkedin.com/in/im-austin-baird/"
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									padding: "0.5rem 1rem",
									boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
									borderRadius: "0.5rem",
									fontWeight: 500,
									transition: "all 0.3s ease",
									display: "flex",
									gap: "0.5rem",
									textDecoration: "none",
									alignItems: "center",
									"&:hover": {
										boxShadow: "0 4px 8px rgba(67, 60, 174, 0.6)"
									}
								}}
							>
								<Typography>LinkedIn</Typography>
								<LinkedIn />
							</Link>
						</Box>
					</Box>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
							padding: "2rem",
							borderRadius: "1rem",
							bgcolor: "background.default"
						}}
					>
						<TextField
							fullWidth
							id="name"
							name="name"
							label="Name"
							type="text"
							value={formData.name}
							onChange={handleChange}
							required
							placeholder="Your name"
							variant="outlined"
							margin="normal"
						/>
						<TextField
							fullWidth
							id="email"
							name="email"
							label="Email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							required
							placeholder="your@email.com"
							variant="outlined"
							margin="normal"
						/>
						<TextField
							fullWidth
							id="message"
							name="message"
							label="Message"
							value={formData.message}
							onChange={handleChange}
							required
							rows={5}
							placeholder="Your message..."
							variant="outlined"
							margin="normal"
							multiline
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={isSubmitting}
							fullWidth
							sx={{ mt: 2 }}
						>
							{isSubmitting ? "Sending..." : "Send"}
						</Button>
						{submitStatus === "success" && (
							<Typography
								sx={{
									marginTop: "1rem",
									padding: "0.75rem",
									backgroundColor: "#d1fae5",
									color: "#065f46",
									borderRadius: "0.5rem",
									textAlign: "center"
								}}
							>
								Thank you for your message! I'll get back to you soon.
							</Typography>
						)}
						{submitStatus === "error" && (
							<Typography
								sx={{
									marginTop: "1rem",
									padding: "0.75rem",
									backgroundColor: "#fee2e2",
									color: "#991b1b",
									borderRadius: "0.5rem",
									textAlign: "center"
								}}
							>
								Failed to send message. Please try again or email me directly.
							</Typography>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Contact;
