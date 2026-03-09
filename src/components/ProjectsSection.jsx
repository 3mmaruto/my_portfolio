import { projectCards, siteContent } from '../content'
import SectionHeading from './SectionHeading'

function ProjectsSection({ typedDescription, showCursor }) {
  return (
    <section id="projects" className="section" data-section>
      <SectionHeading
        eyebrow={siteContent.projects.eyebrow}
        title={siteContent.projects.title}
        description={siteContent.projects.description}
        typedDescription={typedDescription}
        showCursor={showCursor && typedDescription.length > 0}
      />

      <div className="project-grid">
        {projectCards.map((project) => (
          <article key={project.title} className="project-card">
            <span className="metal-pill">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <span className="project-link">Project details later</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
