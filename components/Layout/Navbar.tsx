import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X, Snowflake, Sparkles, ZapOff } from 'lucide-react';

type EffectMode = 'snow' | 'stars' | 'off';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  effectMode: EffectMode;
  toggleEffect: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, effectMode, toggleEffect }) => {
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (!href.startsWith('#')) return;

    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Height of navbar + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping
      try {
        window.history.pushState(null, "", href);
      } catch (err) {
        // Ignore history errors
      }
    }
  };

  const getEffectIcon = () => {
    switch (effectMode) {
      case 'snow': return <Snowflake className="w-4 h-4" />;
      case 'stars': return <Sparkles className="w-4 h-4" />;
      default: return <ZapOff className="w-4 h-4" />;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-8 md:px-20 flex justify-center">
        <div 
          className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-7xl ${
             scrolled 
             ? 'bg-white/50 dark:bg-black/50 backdrop-blur-xl shadow-lg border border-gray-200/50 dark:border-white/10' 
             : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')}
            className="flex items-center gap-2 group z-50 focus:outline-none"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white font-mono">
              PRVN
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
             {/* Effect Toggle (Desktop) */}
             <button
               onClick={toggleEffect}
               className={`hidden md:flex p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-accent ${
                 effectMode !== 'off'
                   ? 'text-accent bg-accent/10 hover:bg-accent/20' 
                   : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
               }`}
               title="Toggle Effects"
             >
               {getEffectIcon()}
             </button>

             <ThemeToggle isDark={isDark} toggle={toggleTheme} />
             
             <a 
               href="#contact"
               onClick={(e) => handleScroll(e, '#contact')}
               className="hidden md:inline-flex ml-2 px-5 py-2 text-sm font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
             >
               Let's Connect
             </a>
             
             {/* Mobile Menu Button */}
             <button 
               className="md:hidden p-2 text-gray-900 dark:text-white z-50"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               aria-label="Toggle mobile menu"
             >
               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute top-24 left-4 right-4 bg-white/95 dark:bg-dark-card/95 backdrop-blur-2xl border border-gray-200 dark:border-dark-border rounded-3xl p-6 shadow-2xl md:hidden z-40"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200 py-3 px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
             
             <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />

             <div className="flex items-center justify-between px-4 py-2">
               <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Effects</span>
               <button
                 onClick={() => toggleEffect()}
                 className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                   effectMode !== 'off'
                     ? 'bg-accent/10 text-accent' 
                     : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                 }`}
               >
                 {getEffectIcon()}
                 {effectMode}
               </button>
             </div>

             <a 
               href="#contact"
               onClick={(e) => handleScroll(e, '#contact')}
               className="text-center w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl mt-2 hover:opacity-90 transition-opacity"
             >
               Contact Me
             </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;