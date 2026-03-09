import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SiteHeader from './components/SiteHeader'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <div className="page-shell">
      <SiteHeader />
      {/*
        Avatar integration is intentionally disabled for now.
        Keep the files in place so it can be re-enabled later without rebuilding it from scratch.
      */}

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
