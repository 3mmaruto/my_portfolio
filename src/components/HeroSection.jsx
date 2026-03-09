import { siteContent } from '../content'
import TypedText from './TypedText'

function HeroSection({ typedContent, showCursor }) {
  return (
    <section id="hero" className="hero section" data-section>
      <div className="hero-copy">
        <p className="hero-kicker">{siteContent.hero.kicker}</p>
        <h1>
          {siteContent.hero.titleLines[0]}
          <br />
          {siteContent.hero.titleLines[1]}
        </h1>
        <TypedText
          text={typedContent.summary}
          className="hero-summary"
          cursor={showCursor && typedContent.summary.length > 0}
        />
        <div className="hero-actions">
          <a className="primary-link" href="#projects">
            View projects
          </a>
          <a className="secondary-link" href={siteContent.contact.github} target="_blank" rel="noreferrer">
            GitHub profile
          </a>
        </div>
      </div>

      <div className="hero-note">
        <span className="note-chip">Current direction</span>
        <TypedText
          text={typedContent.note}
          className="hero-note-copy"
          cursor={showCursor && typedContent.note.length > 0}
        />
      </div>
    </section>
  )
}

export default HeroSection
