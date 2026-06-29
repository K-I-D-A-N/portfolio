import { Calendar, Mail, MapPin, Award, GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#00c6ff]/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#0072ff]/2 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-[#00c6ff] uppercase tracking-widest flex items-center justify-center mb-3">
            Profile Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* strict bio paragraph requirement with University Badge */}
            <div className="border-l-2 border-[#00c6ff] pl-5 bg-white/1 py-4 pr-4 rounded-r-lg relative">
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-sans font-normal mb-6">
                As a fourth-year Information Systems student at Addis Ababa University, I am deeply committed to building professional web and mobile software applications. 
                I specialize in frontend web development and cross-platform mobile app development, leveraging React and React Native to craft fluid, performant user interfaces. 
                My passion lies in designing and engineering beautiful, responsive digital experiences that bridge elegant styling and structural functionality. 
                I strive to deploy modern web and mobile systems that solve real-world problems and provide robust value to users and organizations.
              </p>
              
              {/* AAU student badge integrated directly inside */}
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-[#00c6ff]/10 flex items-center justify-center text-[#00c6ff]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-mono">UNIVERSITY</p>
                  <p className="text-xs font-bold text-white">4th Year AAU Student</p>
                </div>
              </div>
            </div>

            {/* Personal Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center text-neutral-300">
                  <MapPin className="w-4 h-4 text-[#00c6ff]" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase">Location</p>
                  <p className="text-xs font-semibold text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center text-neutral-300">
                  <Mail className="w-4 h-4 text-[#00c6ff]" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase">Direct Email</p>
                  <a href="mailto:ehabte936@gmail.com" className="text-xs font-semibold text-white hover:text-[#00c6ff] transition-colors">
                    ehabte936@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center text-neutral-300">
                  <Award className="w-4 h-4 text-[#00c6ff]" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase">Specialties</p>
                  <p className="text-xs font-semibold text-white">UI/UX & Mobile Tech</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center text-neutral-300">
                  <Calendar className="w-4 h-4 text-[#00c6ff]" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase">Current Role</p>
                  <p className="text-xs font-semibold text-white">4th Year Student Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
