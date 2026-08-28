import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorParticles from './components/CursorParticles';
import BackgroundGlassObjects from './components/BackgroundGlassObjects';

function App() {
  return (
    <div className="relative min-h-screen bg-[#FBFBFD] text-[#111827] overflow-x-hidden font-sans selection:bg-purple-600 selection:text-white">
      <BackgroundGlassObjects />
      <CursorParticles />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Certificates />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
