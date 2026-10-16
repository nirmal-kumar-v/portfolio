import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import DSA from './sections/DSA';
import Education from './sections/Education';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent/30 selection:text-white relative">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[15%] -left-[10%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[140px]" />
        <div className="absolute top-[35%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo/5 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[15%] w-[35%] h-[35%] rounded-full bg-emerald/5 blur-[140px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <Achievements />
        <DSA />
        <Education />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
