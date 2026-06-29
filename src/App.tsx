import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-neutral-200 antialiased font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* About Section */}
      <About />

      {/* Skills Tracker Section */}
      <Skills />

      {/* Projects Grid Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Page Footer */}
      <Footer />

      {/* Dynamic printable Resume CV Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

