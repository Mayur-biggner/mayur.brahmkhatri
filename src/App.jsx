import Navbar      from './components/Navbar.jsx'
import Hero        from './components/Hero.jsx'
import Skills      from './components/Skills.jsx'
import Experience  from './components/Experience.jsx'
import Projects    from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact     from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
