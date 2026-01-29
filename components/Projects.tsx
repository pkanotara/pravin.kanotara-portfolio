import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 5);

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 flex items-end justify-between border-b border-gray-200 dark:border-gray-800 pb-8"
        >
            <div>
                <span className="text-accent font-mono text-sm tracking-widest uppercase block mb-2">Portfolio</span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">Selected Works</h2>
            </div>
            <div className="hidden md:block">
               <span className="text-sm font-mono text-gray-500">
                  {PROJECTS.length} Projects Shipped
               </span>
            </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px] grid-flow-dense perspective-1000"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => {
               // Grid Logic: 'dense' flow packs items efficiently
               const colSpan = project.size === 'wide' || project.size === 'large' ? 'md:col-span-2' : 'col-span-1';
               const rowSpan = project.size === 'tall' || project.size === 'large' ? 'md:row-span-2' : 'row-span-1';
               const isHovered = hoveredId === project.id;
               const isBlurred = hoveredId !== null && hoveredId !== project.id;

               return (
                <motion.div
                  key={project.id}
                  layoutId={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                      opacity: isBlurred ? 0.4 : 1, 
                      scale: isHovered ? 1.02 : (isBlurred ? 0.95 : 1),
                      filter: isBlurred ? 'blur(2px) grayscale(50%)' : 'none'
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`${colSpan} ${rowSpan} group relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 cursor-pointer transition-all duration-500`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                    {/* Inner Glow Border */}
                    <div className={`absolute inset-0 rounded-3xl z-30 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                         style={{ boxShadow: 'inset 0 0 30px rgba(6,182,212,0.15), inset 0 0 0 1px rgba(6,182,212,0.3)' }} 
                    />

                    {/* Background Image */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.img 
                            src={project.imageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out"
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                        />
                        {/* Intelligent Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                        {/* Top Actions */}
                        <div className="flex justify-end gap-3 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                             {project.github && (
                                <a href={project.github} className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors border border-white/20">
                                    <Github className="w-5 h-5" />
                                </a>
                             )}
                             {project.link && (
                                <a href={project.link} className="p-2.5 bg-accent rounded-full text-white hover:bg-white hover:text-accent transition-colors shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                             )}
                        </div>

                        {/* Bottom Info */}
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <motion.div layout>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-md">{project.title}</h3>
                                
                                <div className="h-1 w-12 bg-accent rounded-full mb-4 group-hover:w-20 transition-all duration-500" />
                                
                                <p className="text-gray-300 text-sm mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-3 py-1 text-[10px] md:text-xs font-bold text-white/70">+ {project.tags.length - 3}</span>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
               );
            })}
          </AnimatePresence>
        </motion.div>

        {PROJECTS.length > 5 && (
            <div className="mt-20 text-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 hover:border-accent transition-all duration-300"
                >
                    {showAll ? 'Show Less' : 'View All Projects'}
                    {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default Projects;