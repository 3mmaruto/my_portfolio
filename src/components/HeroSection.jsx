import { siteContent } from '../content'

function HeroSection() {
  return (
    <section id="hero" className="hero section" data-section>
      <div className="hero-copy">
        <p className="hero-kicker">{siteContent.hero.kicker}</p>
        <h1>
          {siteContent.hero.titleLines[0]}
          <br />
          {siteContent.hero.titleLines[1]}
        </h1>
        <p className="hero-summary">{siteContent.hero.summary}</p>
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
        <p className="hero-note-copy">{siteContent.hero.note}</p>
      </div>
    </section>
  )
}

export default HeroSection
