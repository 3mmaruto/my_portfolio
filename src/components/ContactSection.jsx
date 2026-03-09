import { siteContent } from '../content'

function ContactSection() {
  return (
    <section id="contact" className="section contact-section" data-section>
      <div className="contact-copy">
        <p className="section-eyebrow">{siteContent.contact.eyebrow}</p>
        <h2>{siteContent.contact.title}</h2>
        <p className="contact-copy-paragraph">{siteContent.contact.description}</p>
      </div>

      <div className="contact-panel">
        <div className="contact-actions">
          <a className="primary-link" href={`mailto:${siteContent.contact.email}`}>
            {siteContent.contact.email}
          </a>
          <a className="secondary-link" href={siteContent.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div className="contact-list">
          <span>Phone: {siteContent.contact.phone}</span>
          <span>{siteContent.contact.note}</span>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
