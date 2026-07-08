import { useState, useEffect } from 'react';
import { FileText, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";
import { downloadCvPdf } from '../data/cvData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownload = () => {
    downloadCvPdf();
  };

  // Typewriter effect for Name
  const [nameText, setNameText] = useState('');
  const fullName = "Eyerusalem Habte";

  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout;
    
    const typeName = () => {
      setNameText(fullName.substring(0, index + 1));
      index++;
      if (index < fullName.length) {
        timer = setTimeout(typeName, 80);
      }
    };
    
    timer = setTimeout(typeName, 300);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect for Roles
  const roles = [
    "Frontend & Mobile App Developer",
    "React & React Native Engineer",
    "Information Systems Student"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setRoleText(prev => {
          const next = fullText.substring(0, prev.length + 1);
          if (next === fullText) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
          } else {
            timer = setTimeout(tick, 100);
          }
          return next;
        });
      } else {
        setRoleText(prev => {
          const next = fullText.substring(0, prev.length - 1);
          if (next === '') {
            setIsDeleting(false);
            setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
            timer = setTimeout(tick, 200);
          } else {
            timer = setTimeout(tick, 50);
          }
          return next;
        });
      }
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [currentRoleIndex, isDeleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden pt-24 px-6"
    >
      {/* Background Decorative Gradients - slowly moving for immersive visual depth */}
      <motion.div 
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#00c6ff]/4 blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-15%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#0072ff]/4 blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 50, -50, 0],
          scale: [0.95, 1.05, 0.95, 0.95],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[25%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#7000ff]/3 blur-[150px] pointer-events-none" 
      />

      {/* Futuristic Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Available for hire tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-medium text-emerald-400">Available for Opportunities</span>
        </motion.div>

        {/* Name with elegant typewriter cursor */}
        <div className="min-h-[64px] md:min-h-[96px] flex items-center justify-center mb-6">
          <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-tight text-white flex items-center">
            <span>{nameText}</span>
            {nameText.length < fullName.length && (
              <span className="inline-block w-[3px] md:w-[5px] h-[0.95em] bg-white ml-2 rounded-full animate-pulse" />
            )}
          </h1>
        </div>

        {/* Roles/Title with a Cyan typewriter cursor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-h-[36px] md:min-h-[48px] flex items-center justify-center mb-4"
        >
          <h2 className="font-display font-semibold text-xl md:text-3xl text-neutral-300 flex items-center">
            <span className="bg-gradient-to-r from-[#00c6ff] via-sky-400 to-[#0072ff] bg-clip-text text-transparent">
              {roleText}
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-neutral-400 text-sm md:text-base leading-relaxed mb-10 font-sans"
        >
          4th year Information Systems student at{' '}
          <span className="text-white font-medium hover:text-[#00c6ff] transition-colors duration-200">
            Addis Ababa University
          </span>{' '}
          specializing in crafting high-performance, modern, and user-centric systems.
        </motion.p>

        {/* Button Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00c6ff]/10 to-[#0072ff]/10 border border-[#00c6ff]/30 text-white hover:text-[#00c6ff] hover:border-[#00c6ff]/60 font-semibold text-sm active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#00c6ff]/5 cursor-pointer"
          >
            <FileText className="w-4.5 h-4.5 text-[#00c6ff]" />
            <span>Download CV / Resume</span>
          </button>
        </motion.div>
      </div>

      {/* Floating scroll trigger at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-neutral-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
