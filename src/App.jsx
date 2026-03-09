import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import FloatingAvatar from './components/FloatingAvatar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SiteHeader from './components/SiteHeader'
import SkillsSection from './components/SkillsSection'
import useScrollGuide from './hooks/useScrollGuide'

function App() {
  const { activeIndex, direction, localProgress } = useScrollGuide()

  return (
    <div className="page-shell">
      <SiteHeader />
      <FloatingAvatar
        activeIndex={activeIndex}
        direction={direction}
        localProgress={localProgress}
      />

      <main className="page-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
