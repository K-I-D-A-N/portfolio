import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Project } from '../types';
import { Smartphone, Laptop, CheckCircle2, ChevronRight, ExternalLink, Github, Sparkles, Users, Play } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'fambetrent',
      title: 'FAMBETRENT Mobile App',
      subtitle: 'React Native Rental Platform',
      description: 'A modern, high-performance mobile application designed to seamlessly connect landlords and tenants in Ethiopia, eliminating intermediaries. Developed as a collaborative team project.',
      technologies: ['React Native', 'Expo', 'JavaScript', 'Context API', 'AsyncStorage'],
      type: 'Mobile',
      features: [
        'Direct landlord-to-tenant instant messaging',
        'Advanced property discovery and smart filters',
        'Secure booking request and approval system',
        'Property portfolio management dashboard for landlords',
        'Ethiopian Birr payment structure integrations'
      ],
      isTeamProject: true,
      videoUrl: 'https://drive.google.com/file/d/1Vh72MM5nj8lPfGSFAzptxKD7pdaxjh9v/view?usp=sharing'
    },
    {
      id: 'edufun',
      title: 'EduFun Kids Learning Zone',
      subtitle: 'Interactive Children Learning Hub',
      description: 'An interactive and colorful web learning platform developed for kids aged 3–8 years to learn foundational mathematics, alphabets, and skills.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API', 'CSS Animations'],
      type: 'Web',
      features: [
        'Adaptive mini-games for basic arithmetic and spelling',
        'Rich Ethiopian cultural educational illustrations & tales',
        'Voice synthesis and responsive audio encouragement cues',
        'Parent progression tracker dashboard',
        'Gamified learning badges and reward systems'
      ],
      liveUrl: 'https://edu-fun-kids-learning-zone.vercel.app/'
    },
    {
      id: 'dhms',
      title: 'Dormitory Management System (DHMS)',
      subtitle: 'AAU Housing & Dorm Portal',
      description: 'A robust web-based system designed to coordinate and streamline student dormitory operations at Addis Ababa University. Developed as a collaborative team project.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Conceptual Django', 'Conceptual PostgreSQL'],
      type: 'Web',
      features: [
        'Automated room and bed allocation algorithms for freshmen',
        'Real-time student maintenance request logging',
        'Laundry facility schedules and peak load trackers',
        'Disciplinary actions logging and administrative dashboard',
        'Secure student identity database'
      ],
      isTeamProject: true,
      liveUrl: 'https://aau-dhms.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-[#00c6ff]/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-[#0072ff]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-[#00c6ff] uppercase tracking-widest flex items-center justify-center mb-3">
            Selected Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Key Projects
          </h2>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.type === 'Mobile' ? Smartphone : Laptop;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-[#00c6ff]/40 hover:bg-[#0c0c0f] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#00c6ff]/5 overflow-hidden"
              >
                {/* Glowing subtle top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00c6ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Header Card Info */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#00c6ff] group-hover:bg-[#00c6ff]/10 group-hover:border-[#00c6ff]/20 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.isTeamProject && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono tracking-wider font-semibold text-[#00c6ff] bg-[#00c6ff]/10 px-2.5 py-1 rounded-full border border-[#00c6ff]/25">
                          <Users className="w-3 h-3" /> Team Project
                        </span>
                      )}
                      <span className="text-[10px] font-mono tracking-wider font-semibold text-neutral-500 uppercase bg-[#111111] px-2.5 py-1 rounded-full border border-white/5">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#00c6ff] transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-400 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-neutral-500 leading-relaxed mb-6 group-hover:text-neutral-400 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[9px] font-mono bg-neutral-900 text-neutral-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#111111] text-neutral-500 border border-white/5">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Call-to-action button */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-white/10 hover:border-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#00c6ff] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00c6ff]/10 hover:bg-[#00c6ff]/20 border border-[#00c6ff]/20 hover:border-[#00c6ff]/40 text-xs font-semibold text-[#00c6ff] transition-all cursor-pointer"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-xs font-semibold text-red-400 transition-all cursor-pointer"
                        title="Demo Video"
                      >
                        <Play className="w-4 h-4 fill-red-400/20" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Detailed Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-[#111111] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden max-h-[85vh] overflow-y-auto"
              >
                {/* Header detail */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00c6ff]/15 flex items-center justify-center text-[#00c6ff]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-400">Project Details</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-2.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <p className="text-sm font-semibold text-[#00c6ff]">
                    {selectedProject.subtitle}
                  </p>
                  {selectedProject.isTeamProject && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono tracking-wider font-semibold text-[#00c6ff] bg-[#00c6ff]/10 px-2 py-0.5 rounded-full border border-[#00c6ff]/25">
                      <Users className="w-2.5 h-2.5" /> Team Project
                    </span>
                  )}
                </div>

                {/* Bio Description */}
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Features list */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <CheckCircle2 className="w-4 h-4 text-[#00c6ff] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All Tech Stack */}
                <div className="mb-6 pt-5 border-t border-white/10">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                    Tech Stack Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#0d0d0e] text-[#00c6ff] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-5 border-t border-white/10 items-stretch sm:items-center">
                  <div className="text-xs text-neutral-500 italic flex-1 self-center">
                    Demonstration prototype configured for recruitments.
                  </div>
                  <div className="flex gap-2 justify-end">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#00c6ff]/10 hover:bg-[#00c6ff]/20 border border-[#00c6ff]/30 text-[#00c6ff] text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.videoUrl && (
                      <a
                        href={selectedProject.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-red-400/20" />
                        Demo Video
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                    >
                      OK, Got It
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
