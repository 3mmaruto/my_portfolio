import { siteContent } from '../content'
import SectionHeading from './SectionHeading'
import TypedText from './TypedText'

function AboutSection({ typedContent, showCursor }) {
  return (
    <section id="about" className="section" data-section>
      <SectionHeading
        eyebrow={siteContent.about.eyebrow}
        title={siteContent.about.title}
        description={siteContent.about.description}
        typedDescription={typedContent.description}
        showCursor={showCursor && typedContent.description.length > 0}
      />

      <div className="about-grid">
        <TypedText
          text={typedContent.paragraphs[0]}
          className="about-paragraph"
          cursor={showCursor && typedContent.paragraphs[0].length > 0}
        />
        <TypedText
          text={typedContent.paragraphs[1]}
          className="about-paragraph"
          cursor={showCursor && typedContent.paragraphs[1].length > 0}
        />
      </div>
    </section>
  )
}

export default AboutSection
