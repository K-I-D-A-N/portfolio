import { X, Mail, Phone, MapPin, Printer, Download, BookOpen, Briefcase, Award } from 'lucide-react';
import { motion } from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-[#111111] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] text-neutral-200"
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d0d0d] rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs font-mono text-neutral-500 ml-2">eyerusalem_habte_cv.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#00c6ff]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV printable area */}
        <div id="printable-cv" className="flex-1 overflow-y-auto p-8 md:p-12 print:p-0 print:bg-white print:text-black">
          {/* Print specific global styles override */}
          <style dangerouslySetInnerHTML={{ __html: `
            @media print {
              body * {
                visibility: hidden;
              }
              #printable-cv, #printable-cv * {
                visibility: visible;
              }
              #printable-cv {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                color: #000000 !important;
                background-color: #ffffff !important;
              }
              .no-print {
                display: none !important;
              }
              .print-text-dark {
                color: #111111 !important;
              }
              .print-text-muted {
                color: #555555 !important;
              }
              .print-border {
                border-color: #dddddd !important;
              }
              .print-bg-light {
                background-color: #f5f5f5 !important;
              }
            }
          `}} />

          {/* CV Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-white/10 pb-6 mb-6 print:border-gray-300">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white print:text-black tracking-tight">
                Eyerusalem Habte
              </h1>
              <p className="text-[#00c6ff] font-sans font-medium text-lg mt-1 print:text-blue-600">
                Frontend Developer | Mobile App Developer
              </p>
              <p className="text-sm text-neutral-400 mt-1 print:text-gray-600">
                4th Year Information Systems Student at Addis Ababa University
              </p>
            </div>
            <div className="mt-4 md:mt-0 space-y-1.5 text-xs text-neutral-400 print:text-gray-700 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00c6ff] print:text-blue-600" />
                <a href="mailto:ehabte936@gmail.com" className="hover:underline">ehabte936@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00c6ff] print:text-blue-600" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Main CV Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Summary, Skills, Info */}
            <div className="space-y-6 md:border-r md:border-white/5 md:pr-6 print:border-gray-200">
              {/* Professional Profile */}
              <div>
                <h3 className="text-sm font-display font-bold text-white print:text-black uppercase tracking-wider mb-3">
                  Profile
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed print:text-gray-700">
                  I am a passionate 4th year Information Systems student at Addis Ababa University specializing in frontend web and mobile app development. With deep expertise in React and React Native, I am dedicated to building modern, user-centric web and mobile solutions that solve real-world challenges.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-sm font-display font-bold text-white print:text-black uppercase tracking-wider mb-3">
                  Education
                </h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-200 print:text-black">
                      BSc in Information Systems
                    </h4>
                    <p className="text-xs text-[#00c6ff] print:text-blue-600">
                      Addis Ababa University
                    </p>
                    <p className="text-[10px] text-neutral-500 font-mono mt-0.5">
                      2022 - Present (4th Year)
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Technologies */}
              <div>
                <h3 className="text-sm font-display font-bold text-white print:text-black uppercase tracking-wider mb-3">
                  Technical Expertise
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'React Native', 'JavaScript', 'HTML/CSS', 'Java', 'C++', 'C#', 'PHP', 'Django', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 print:bg-gray-100 print:text-black print:border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (2/3): Experience, Projects */}
            <div className="col-span-2 space-y-6">
              {/* Projects */}
              <div>
                <h3 className="text-sm font-display font-bold text-white print:text-black uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-white/10 pb-1.5 print:border-gray-200">
                  <Briefcase className="w-4 h-4 text-[#00c6ff] print:text-blue-600" />
                  Key Projects
                </h3>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-semibold text-neutral-100 print:text-black">
                        FAMBETRENT Mobile Application
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-500">React Native</span>
                    </div>
                    <p className="text-xs text-[#00c6ff] font-medium print:text-blue-600">Rental Platform App • Team Project • Demo: drive.google.com/file/d/1Vh72MM5nj8lPfGSFAzptxKD7pdaxjh9v</p>
                    <p className="text-xs text-neutral-400 mt-1 print:text-gray-700 leading-relaxed">
                      Developed as a collaborative team project to connect landlords and tenants in Ethiopia. Implemented fully functional booking workflows, property discovery searches, and secure property listing/management features.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-semibold text-neutral-100 print:text-black">
                        EduFun Kids Learning Zone
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-500">Web Dev</span>
                    </div>
                    <p className="text-xs text-[#00c6ff] font-medium print:text-blue-600">Interactive Educational Platform • Live: edu-fun-kids-learning-zone.vercel.app</p>
                    <p className="text-xs text-neutral-400 mt-1 print:text-gray-700 leading-relaxed">
                      An interactive web learning system designed for children aged 3–8 years. Built with adaptive learning games, colorful activities, and specific Ethiopian cultural educational content to support local curriculums.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-semibold text-neutral-100 print:text-black">
                        Dormitory Management System (DHMS)
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-500">Full-Stack / Web</span>
                    </div>
                    <p className="text-xs text-[#00c6ff] font-medium print:text-blue-600">AAU Dormitory Portal • Team Project • Live: aau-dhms.vercel.app</p>
                    <p className="text-xs text-neutral-400 mt-1 print:text-gray-700 leading-relaxed">
                      Developed as a collaborative team project to streamline student dormitory operations at Addis Ababa University. Features room allocations, automated maintenance reports, laundry schedules, and disciplinary logging.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements & Goals */}
              <div>
                <h3 className="text-sm font-display font-bold text-white print:text-black uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-white/10 pb-1.5 print:border-gray-200">
                  <Award className="w-4 h-4 text-[#00c6ff] print:text-blue-600" />
                  Key Attributes & Focus
                </h3>
                <ul className="text-xs text-neutral-400 print:text-gray-700 space-y-2 list-disc list-inside leading-relaxed">
                  <li>Strong foundations in object-oriented programming (C++, Java, C#).</li>
                  <li>Proficient with modern web design systems and styling principles.</li>
                  <li>Eager to work collaboratively inside cross-functional agile engineering teams.</li>
                  <li>Focused on crafting high-fidelity user experiences across web and mobile layouts.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer note in printed CV */}
          <div className="hidden print:block text-center border-t border-gray-200 pt-6 mt-8">
            <p className="text-[10px] text-gray-500 font-mono">
              Eyerusalem Habte &bull; ehabte936@gmail.com &bull; Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
