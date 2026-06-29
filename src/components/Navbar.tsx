import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Briefcase, Mail, BarChart3, User } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/80 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-[#111111]/50 border border-white/10 rounded-full p-1 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-[#00c6ff]/10 to-[#0072ff]/10 text-[#00c6ff] border border-[#00c6ff]/20'
                  : 'text-neutral-400 hover:text-white border border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Contact CTA */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-[#00c6ff]/10"
        >
          Hire Me
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0e] border-b border-[#222222] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-left transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-[#00c6ff]/10 to-[#0072ff]/10 text-[#00c6ff] border-l-2 border-[#00c6ff]'
                        : 'text-neutral-400 hover:text-white hover:bg-[#111111]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-center font-semibold cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
