import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ParticleBackground from './components/ui/ParticleBackground';

type EffectMode = 'snow' | 'stars' | 'off';

const App: React.FC = () => {
  // Initialize theme from system preference or default to dark
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [effectMode, setEffectMode] = useState<EffectMode>('snow');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleEffect = () => {
    setEffectMode(prev => {
      if (prev === 'snow') return 'stars';
      if (prev === 'stars') return 'off';
      return 'snow';
    });
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300 selection:bg-accent/30 selection:text-accent-dark dark:selection:text-accent-light ${typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches ? '' : 'cursor-none'}`}>
      
      <CustomCursor />
      
      {effectMode !== 'off' && <ParticleBackground isDark={isDark} mode={effectMode} />}
      
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        effectMode={effectMode}
        toggleEffect={toggleEffect}
      />
      
      <main className="relative">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Achievements />
      </main>

      <Contact />
      
      {/* Subtle Noise Texture for Premium Feel */}
      <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none z-[1] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

export default App;