import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Coffee, Globe, Code, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-8 md:px-20 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto"
        >
            {/* The Big Card */}
            <div className="relative bg-white/60 dark:bg-dark-card/60 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 border border-white/40 dark:border-white/5 shadow-2xl overflow-hidden">
                
                {/* Decorative Elements inside card */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
                    
                    {/* Left Column: Avatar & Quick Info */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-center text-center space-y-8">
                        
                        {/* Avatar Wrapper */}
                        <div className="relative group">
                            {/* Spinning Border Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-tr from-accent via-purple-500 to-accent rounded-full opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-spin-slow" />
                            
                            {/* Image Container */}
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[6px] border-white dark:border-dark-card shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <img 
                                    src="https://raw.githubusercontent.com/pkanotara/Prvn.Portfolio/refs/heads/main/profile.png" 
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-4 right-4 bg-white dark:bg-dark-card p-3 rounded-full shadow-xl border border-gray-100 dark:border-white/10 animate-float">
                                <Code className="w-6 h-6 text-accent" />
                            </div>
                        </div>

                        <div className="space-y-4 w-full">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Pravin Kanotara</h3>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                                    <Terminal className="w-4 h-4" />
                                    <span>Full stack Developer</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3 pt-2">
                                 <div className="px-4 py-2.5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-2 shadow-sm">
                                    <Globe className="w-4 h-4 text-purple-500" /> Ahmedabad,India
                                 </div>
                                 <div className="px-4 py-2.5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-2 shadow-sm">
                                    <Coffee className="w-4 h-4 text-orange-500" /> Fuelled by Coffee
                                 </div>
                                 <div className="px-4 py-2.5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-2 shadow-sm">
                                    <Sparkles className="w-4 h-4 text-yellow-500" /> Open for Work
                                 </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio & Stats */}
                    <div className="lg:col-span-7 flex flex-col justify-center h-full pt-4 lg:pt-8">
                        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-accent"></span>
                            Who Am I?
                        </span>
                        
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">digital experiences</span> that matter.
                        </h2>
                        
                        <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg lg:text-xl">
                            <p>
                                I’m <strong className="text-gray-900 dark:text-white">Pravin Kanotara</strong>, a passionate Frontend Engineer and final-year Computer Science student. My journey sits at the intersection of logical engineering and creative design.
                            </p>
                            <p>
                                I specialize in the <span className="text-accent">React ecosystem</span>, focusing on crafting pixel-perfect, accessible, and performant web applications. At Su-k-Em Tech Lab, I honed my skills by building real-world products that solve actual problems, not just writing code that compiles.
                            </p>
                            <p>
                                I believe in clean architecture, smooth animations, and the user-first approach. When I'm not debugging, I'm exploring new UI trends or optimizing component reusability.
                            </p>
                        </div>

                        {/* Stats Grid inside the card */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 mt-10 border-t border-gray-200 dark:border-white/10">
                            <div>
                                <span className="block text-4xl font-bold text-gray-900 dark:text-white mb-1">10+</span>
                                <span className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Projects Built</span>
                            </div>
                             <div>
                                <span className="block text-4xl font-bold text-gray-900 dark:text-white mb-1">100%</span>
                                <span className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Dedication</span>
                            </div>
                            <div className="hidden md:block">
                                <span className="block text-4xl font-bold text-gray-900 dark:text-white mb-1">24/7</span>
                                <span className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Curiosity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;