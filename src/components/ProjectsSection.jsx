import { projectCards, siteContent } from '../content'
import SectionHeading from './SectionHeading'

function ProjectsSection() {
  return (
    <section id="projects" className="section" data-section>
      <SectionHeading
        eyebrow={siteContent.projects.eyebrow}
        title={siteContent.projects.title}
        description={siteContent.projects.description}
      />

      <div className="project-grid">
        {projectCards.map((project) => (
          <article key={project.title} className="project-card">
            <span className="metal-pill">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ul className="project-points">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  className="project-link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
