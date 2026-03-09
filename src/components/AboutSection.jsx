import { siteContent } from '../content'
import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section id="about" className="section" data-section>
      <SectionHeading
        eyebrow={siteContent.about.eyebrow}
        title={siteContent.about.title}
        description={siteContent.about.description}
      />

      <div className="about-grid">
        <p className="about-paragraph">{siteContent.about.paragraphs[0]}</p>
        <p className="about-paragraph">{siteContent.about.paragraphs[1]}</p>
      </div>
    </section>
  )
}

export default AboutSection
