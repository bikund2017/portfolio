import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SnowParticles from './components/SnowParticle';
import GithubStats from './components/GithubStats';
import Education from './components/Education';
import SmoothScroll from './components/LenisScroll';

function App(): React.ReactElement {
    return (
        <div className='min-h-screen flex flex-col bg-black'>
            {/* Removed CustomCursor */}
            <Header />
            <SmoothScroll>
                <section id='Home'>
                    <Hero />
                </section>
                <section id='Technologies'>
                    <Skills />
                </section>
                <section id='Projects'>
                    <SnowParticles />
                    <Projects />
                </section>

                <section id='Coding Stats'>
                    <GithubStats />
                </section>

                <section id='Education'>
                    <Education />
                </section>

                <section id='About'>
                    <About />
                </section>
            </SmoothScroll>
            <Footer />
        </div>
    );
}

export default App;
