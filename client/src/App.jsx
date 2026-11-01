import Particles from './reactbits/Particles';
import Aurora from './reactbits/Aurora';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#070a12' }}>
      {/* ReactBits: Aurora animated background */}
      <Aurora
        colorStops={['#6366f1', '#a855f7', '#38bdf8']}
        speed={0.4}
        blend={0.6}
        amplitude={1.2}
      />

      {/* ReactBits: Particle network */}
      <Particles
        count={70}
        color="#6366f1"
        size={1.2}
        speed={0.25}
        connectDistance={130}
        opacity={0.45}
      />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

