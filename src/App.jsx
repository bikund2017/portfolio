import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Seperation from './components/Seperation'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Particle from './components/Particle.jsx'
import SnowParticles from './components/SnowParticle.jsx'
import GithubStats from './components/GithubStats.jsx'
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/LenisScroll.jsx'

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient1'>
  <CustomCursor />
      <Header />
      <SmoothScroll>
        <section id='Home'>
          {/* <Particle /> */}
          <Hero />
        </section>
        {/* <Seperation /> */}
        <section id='Technologies'>
          <Skills />
        </section>
        {/* <Seperation /> */}
        <section id='Projects'>
          <SnowParticles />
          <Projects />
        </section>
       
        <section id='Coding Stats'>
        <SnowParticles />
          <GithubStats/>
        </section>
    
        <section id='About'>
          <About />
        </section>
      </SmoothScroll>
      <Footer />
    </div>
  )
}

export default App