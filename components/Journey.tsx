import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { ChevronDown, Award, Briefcase, Calendar } from 'lucide-react';
import { Experience } from '../types';

const ExperienceItem: React.FC<{ exp: Experience; index: number; isLast: boolean }> = ({ exp, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-12 md:pl-20 py-2 group"
    >
      {/* Timeline Node */}
      <div 
        className={`absolute left-[3px] md:left-[11px] top-6 w-4 h-4 rounded-full border-4 z-10 transition-colors duration-300 ${
            index === 0 
            ? 'bg-accent border-accent shadow-[0_0_15px_rgba(6,182,212,0.6)]' 
            : 'bg-white dark:bg-dark-bg border-gray-300 dark:border-gray-600 group-hover:border-accent'
        }`} 
      />

      <motion.div 
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative bg-white dark:bg-dark-card/50 backdrop-blur-sm rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
              isExpanded 
              ? 'border-accent/30 shadow-lg ring-1 ring-accent/10' 
              : 'border-gray-100 dark:border-dark-border hover:border-gray-300 dark:hover:border-gray-700'
          }`}
      >
         <div className="p-6">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                 <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                        {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {exp.period}</span>
                    </div>
                 </div>
                 <motion.div 
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded-full self-start md:self-center"
                 >
                     <ChevronDown className="w-4 h-4" />
                 </motion.div>
             </div>
             
             <AnimatePresence>
                 {isExpanded && (
                     <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.3 }}
                     >
                         <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800/50">
                             <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                 {exp.description}
                             </p>
                             <div className="space-y-3">
                               <h4 className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                                   <Award className="w-3 h-3" /> Impact & Achievements
                               </h4>
                               <ul className="space-y-2">
                                 {exp.achievements.map((item, i) => (
                                   <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2.5">
                                     <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                                     <span className="leading-relaxed">{item}</span>
                                   </li>
                                 ))}
                               </ul>
                             </div>
                         </div>
                     </motion.div>
                 )}
             </AnimatePresence>
         </div>
      </motion.div>
    </motion.div>
  );
};

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-20 relative z-10 max-w-5xl">
        <div className="mb-16">
            <span className="text-accent font-mono text-sm tracking-widest uppercase">My Path</span>
            <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Career Journey</h2>
        </div>

        <div className="relative">
             {/* Gradient Vertical Line */}
            <div className="absolute left-[9px] md:left-[17px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-accent via-gray-200 dark:via-gray-800 to-transparent" />
            
            <div className="space-y-6">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceItem 
                  key={exp.id} 
                  exp={exp} 
                  index={index} 
                  isLast={index === EXPERIENCES.length - 1} 
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;