import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section id="about" className="section" data-section>
      <SectionHeading
        eyebrow="About"
        title="A thoughtful technical profile with room to grow"
        description="This is a clean placeholder for your personal story, background, and the kind of work you want to be known for."
      />

      <div className="about-grid">
        <p>
          I am an engineer who enjoys shaping practical software with a strong eye
          for clarity, adaptability, and meaningful user experience.
        </p>
        <p>
          My current direction combines software engineering with AI and machine
          learning, aiming to build tools that feel useful, light, and quietly
          powerful.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
