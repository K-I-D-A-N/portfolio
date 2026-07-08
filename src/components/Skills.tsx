import { useState } from 'react';
import { motion } from "framer-motion";
import { Skill } from '../types';
import { Layout, Smartphone, FileCode2, Database, Network, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Mobile' | 'Languages' | 'Backend' | 'Networking' | 'Databases' | 'Tools'>('All');

  const skills: Skill[] = [
    { name: 'HTML', percentage: 90, category: 'Frontend' },
    { name: 'CSS', percentage: 85, category: 'Frontend' },
    { name: 'JavaScript', percentage: 80, category: 'Frontend' },
    { name: 'React', percentage: 75, category: 'Frontend' },
    { name: 'React Native', percentage: 70, category: 'Mobile' },
    { name: 'C++', percentage: 85, category: 'Languages' },
    { name: 'Java', percentage: 80, category: 'Languages' },
    { name: 'C#', percentage: 75, category: 'Languages' },
    { name: 'PHP', percentage: 80, category: 'Languages' },
    { name: 'Basic Django', percentage: 50, category: 'Backend' },
    { name: 'TCP/IP', percentage: 80, category: 'Networking' },
    { name: 'Routing & Switching', percentage: 75, category: 'Networking' },
    { name: 'VLANs', percentage: 75, category: 'Networking' },
    { name: 'Subnetting', percentage: 70, category: 'Networking' },
    { name: 'Cisco Packet Tracer', percentage: 85, category: 'Networking' },
    { name: 'Basic Network Troubleshooting', percentage: 60, category: 'Networking' },
    { name: 'PostgreSQL', percentage: 70, category: 'Databases' },
    { name: 'MySQL', percentage: 75, category: 'Databases' },
    { name: 'SQL', percentage: 80, category: 'Databases' },
    { name: 'Git', percentage: 65, category: 'Tools' },
    { name: 'GitHub', percentage: 75, category: 'Tools' },
    { name: 'VS Code', percentage: 85, category: 'Tools' },
    { name: 'Figma', percentage: 70, category: 'Tools' },
    { name: 'Vercel', percentage: 70, category: 'Tools' },
    { name: 'Render', percentage: 50, category: 'Tools' },
    { name: 'npm', percentage: 75, category: 'Tools' },
  ];

  const categories = [
    { id: 'All', label: 'All Tech' },
    { id: 'Frontend', label: 'Frontend', icon: Layout },
    { id: 'Mobile', label: 'Mobile', icon: Smartphone },
    { id: 'Languages', label: 'Core Languages', icon: FileCode2 },
    { id: 'Backend', label: 'Backend/Frameworks', icon: Database },
    { id: 'Networking', label: 'Networking', icon: Network },
    { id: 'Databases', label: 'Databases', icon: Database },
    { id: 'Tools', label: 'Tools & Tech', icon: Wrench },
  ] as const;

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[30%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-[#00c6ff]/3 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-[#0072ff]/3 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-[#00c6ff] uppercase tracking-widest flex items-center justify-center mb-3">
            My Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = 'icon' in cat ? cat.icon : null;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white border-transparent shadow-lg shadow-[#00c6ff]/15'
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skill Progress Bar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-5 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#00c6ff]/30 hover:bg-[#121215] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#00c6ff]/5"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-display font-bold text-neutral-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-semibold text-[#00c6ff]">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="h-1.5 w-full bg-neutral-950 rounded-full overflow-hidden">
                {/* Progress Bar Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"
                />
              </div>

              {/* Category tag under progress bar */}
              <div className="mt-2.5 flex justify-end">
                <span className="text-[9px] font-mono tracking-wider text-neutral-500 uppercase">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
