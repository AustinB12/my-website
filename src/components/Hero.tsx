import "./Hero.css";

function Hero() {
	return (
		<section className="hero">
			<div className="container hero-content">
				<div className="hero-text">
					<p className="hero-greeting">Hello, I'm</p>
					<h1 className="hero-name">Austin Baird</h1>
					<h2 className="hero-title">Full Stack Software Engineer</h2>
					<p className="hero-description">
						I build exceptional software that is performant, accessible, and
						designed with best practices in mind.
					</p>
					<div className="hero-buttons">
						<a href="#projects" className="btn btn-primary">
							View My Work
						</a>
						<a href="#contact" className="btn btn-secondary">
							Contact Me
						</a>
					</div>
				</div>
				<div className="hero-image">
					<img
						className="hero-image-placeholder"
						src={"public/me.png"}
						alt="Austin Baird"
					/>
					<div className="hero-img-bg"></div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
