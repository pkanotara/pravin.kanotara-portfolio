import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse values for instant tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // OPTIMIZED PHYSICS:
  // Reduced mass (0.1 -> 0.05) makes it accelerate significantly faster (less drag).
  // Adjusted stiffness to ensure it snaps to the cursor position almost instantly.
  const springConfig = { damping: 20, stiffness: 800, mass: 0.05 };
  
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices immediately
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      // Direct update of motion values prevents React re-renders
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Performance Optimization: 
      // Removed `window.getComputedStyle` check which causes layout thrashing/lag.
      // Relying on specific tags and classes is significantly faster.
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');

      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Pointer - Immediate tracking (Raw Mouse Values) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[9999]"
        style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
        }}
      />
      
      {/* Ring - Spring Physics */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-accent mix-blend-difference will-change-transform"
        style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%'
        }}
        animate={{
          scale: isHovering ? 2.5 : 1, 
          borderWidth: isHovering ? 0 : 1.5,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'transparent', 
        }}
        transition={{ 
            duration: 0.1, // Fast transition for snappy feel
            ease: "easeOut" 
        }} 
      />
    </>
  );
};

export default CustomCursor;