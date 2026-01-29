import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, FileText } from 'lucide-react';

const ROLES = [
  "Frontend Engineer",
  "Full-Stack Developer",
  "UI/UX-Focused Developer",
  "Problem Solver",
  "Software Engineer",
  "Lifelong Learner"
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 40 : 100;
    
    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(prev => 
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Height of navbar + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      {/* Floating Elements (Decorative) */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-float delay-1000 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float delay-0 pointer-events-none" />

      <div className="container mx-auto px-8 md:px-20 relative z-10 flex flex-col items-center text-center">
        
        {/* Status Pill */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm hover:border-accent/50 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-300">
                    Available for projects
                </span>
            </div>
        </motion.div>

        {/* Dynamic Subheading (Moved Above Name) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-6 h-10 flex items-center justify-center gap-3"
        >
            <span>I am a</span>
            <span className="text-gray-900 dark:text-white font-medium border-b-2 border-accent/50 pb-1">
                {text}
            </span>
            <span className="animate-pulse w-0.5 h-8 bg-accent inline-block -ml-1" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-gray-900 dark:text-white mb-12"
        >
            Pravin Kanotara
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-6"
        >
            <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')}
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2 group"
            >
                View Selected Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
                href="https://drive.google.com/file/d/1Wb_s_vArgDiTKbI8OesubTNLpymD9Khz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full font-medium transition-all hover:bg-white/80 dark:hover:bg-white/10 flex items-center gap-2"
            >
                Resume
                <FileText className="w-4 h-4 opacity-50" />
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;