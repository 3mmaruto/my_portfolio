import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import FloatingAvatar from './components/FloatingAvatar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SiteHeader from './components/SiteHeader'
import SkillsSection from './components/SkillsSection'
import useScrollGuide from './hooks/useScrollGuide'
import useTypedContent from './hooks/useTypedContent'

function App() {
  const scrollGuide = useScrollGuide()
  const { typedContent, autoGuide, isUserScrolling } = useTypedContent()

  const avatarGuide = isUserScrolling ? scrollGuide : autoGuide
  const showCursor = !autoGuide.isComplete

  return (
    <div className="page-shell">
      <SiteHeader />
      <FloatingAvatar
        activeIndex={avatarGuide.activeIndex}
        direction={avatarGuide.direction}
        localProgress={avatarGuide.localProgress}
        isAutoMode={!isUserScrolling}
      />

      <main className="page-content">
        <HeroSection typedContent={typedContent.hero} showCursor={showCursor && !isUserScrolling} />
        <AboutSection typedContent={typedContent.about} showCursor={showCursor && !isUserScrolling} />
        <SkillsSection
          typedDescription={typedContent.skills.description}
          showCursor={showCursor && !isUserScrolling}
        />
        <ProjectsSection
          typedDescription={typedContent.projects.description}
          showCursor={showCursor && !isUserScrolling}
        />
        <ContactSection
          typedDescription={typedContent.contact.description}
          showCursor={showCursor && !isUserScrolling}
        />
      </main>
    </div>
  )
}

export default App
