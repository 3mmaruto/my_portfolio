function HeroSection() {
  return (
    <section id="hero" className="hero section" data-section>
      <div className="hero-copy">
        <p className="hero-kicker">Ammar</p>
        <h1>
          IT Engineer and AI / ML
          <br />
          focused builder.
        </h1>
        <p className="hero-summary">
          I design and build calm digital experiences with strong technical structure
          and space for ambitious ideas to grow.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#projects">
            Explore projects
          </a>
          <a className="secondary-link" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-note">
        <span className="note-chip">Currently building</span>
        <p>
          Interfaces, experiments, and AI-driven tools with a focus on clarity and
          long-term usefulness.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
