import { projectCards } from '../content'
import SectionHeading from './SectionHeading'

function ProjectsSection() {
  return (
    <section id="projects" className="section" data-section>
      <SectionHeading
        eyebrow="Projects"
        title="Reserved space for future case studies and polished project stories"
        description="These cards are placeholders for upcoming work and can be replaced with real projects, links, and results later."
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
