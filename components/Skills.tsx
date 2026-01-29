import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { LayoutGrid, ScrollText } from 'lucide-react';

const SkillTicker: React.FC<{ skills: any[]; direction: 'left' | 'right' }> = ({ skills, direction }) => {
    return (
        <div className="flex overflow-hidden w-full select-none mask-gradient hover:pause-animation group">
            <motion.div
                className="flex gap-4 md:gap-8 py-4"
                animate={{
                    x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 80, // Slowed down for smoother animation
                        ease: "linear",
                    },
                }}
            >
                {/* Duplicate the array to create seamless loop */}
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                    <div 
                        key={`${skill.name}-${index}`}
                        className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-full shadow-sm whitespace-nowrap group-hover:border-accent/50 transition-colors"
                    >
                        {typeof skill.icon === 'string' ? (
                            <i className={`${skill.icon} text-2xl text-gray-600 dark:text-gray-300`}></i>
                        ) : (
                            <span className="text-gray-600 dark:text-gray-300">{skill.icon}</span>
                        )}
                        <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                    </div>
                ))}
            </motion.div>
            <style>{`
                .hover\\:pause-animation:hover > div {
                    animation-play-state: paused !important;
                }
            `}</style>
        </div>
    );
};

const Skills: React.FC = () => {
  const [viewMode, setViewMode] = useState<'scroll' | 'grid'>('scroll');

  // Flatten all skills into one or two arrays
  const allSkills = SKILL_CATEGORIES.flatMap(cat => cat.skills);
  const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section id="skills" className="py-32 bg-gray-50/50 dark:bg-dark-bg/50 relative overflow-hidden">
        {/* Gradients to fade edges (Only in scroll mode) */}
        {viewMode === 'scroll' && (
            <>
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-dark-bg to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-dark-bg to-transparent z-10 pointer-events-none" />
            </>
        )}

      <div className="container mx-auto px-8 md:px-20 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
             <div className="text-center md:text-left">
                <span className="text-accent font-mono text-sm tracking-widest uppercase">Tech Stack</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900 dark:text-white">
                    System <span className="text-gray-400 dark:text-gray-600">Architecture</span>
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl">
                    The tools and technologies I use to bring ideas to life.
                </p>
             </div>

             <div className="flex gap-2 bg-white dark:bg-dark-card p-1.5 rounded-full border border-gray-200 dark:border-dark-border">
                 <button
                    onClick={() => setViewMode('scroll')}
                    className={`p-2 rounded-full transition-all ${viewMode === 'scroll' ? 'bg-accent text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
                    aria-label="Scroll View"
                 >
                     <ScrollText className="w-5 h-5" />
                 </button>
                 <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-accent text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
                    aria-label="Grid View"
                 >
                     <LayoutGrid className="w-5 h-5" />
                 </button>
             </div>
        </div>
      </div>

      <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {viewMode === 'scroll' ? (
                <motion.div 
                    key="scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                >
                    <SkillTicker skills={row1} direction="left" />
                    <SkillTicker skills={row2} direction="right" />
                </motion.div>
            ) : (
                <motion.div
                    key="grid"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="container mx-auto px-8 md:px-20"
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {allSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.03 }}
                                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all group"
                            >
                                {typeof skill.icon === 'string' ? (
                                    <i className={`${skill.icon} text-4xl mb-3 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors`}></i>
                                ) : (
                                    <span className="mb-3 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors [&>svg]:w-10 [&>svg]:h-10">{skill.icon}</span>
                                )}
                                <span className="font-medium text-gray-800 dark:text-gray-200 text-center">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
          </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;