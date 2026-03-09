import { skillGroups } from '../content'
import SectionHeading from './SectionHeading'

function SkillsSection() {
  return (
    <section id="skills" className="section" data-section>
      <SectionHeading
        eyebrow="Skills"
        title="A balanced toolkit across product, interface, and intelligence"
        description="The layout is intentionally polished and editable, so we can refine the stack later without changing the visual system."
      />

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <div className="skill-card-header">
              <span className="metal-pill">{group.title}</span>
              <p>{group.description}</p>
            </div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
