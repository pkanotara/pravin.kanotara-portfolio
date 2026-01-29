import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  isDark: boolean;
  mode: 'snow' | 'stars';
}

interface Particle {
  x: number;
  y: number;
  size: number;
  // Snow specific
  swayAmplitude?: number;
  swayFrequency?: number;
  swayOffset?: number;
  rotation?: number;
  rotationSpeed?: number;
  char?: string;
  isSettled?: boolean;
  settleTime?: number;
  // Star specific
  speed?: number;
  trailLength?: number;
  // Common
  opacity: number;
  vx: number;
  vy: number;
  layer: 'front' | 'back';
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ isDark, mode }) => {
  const canvasFrontRef = useRef<HTMLCanvasElement>(null);
  const canvasBackRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameId = useRef<number>(0);

  useEffect(() => {
    const canvasFront = canvasFrontRef.current;
    const canvasBack = canvasBackRef.current;
    if (!canvasFront || !canvasBack) return;

    const ctxFront = canvasFront.getContext('2d', { alpha: true });
    const ctxBack = canvasBack.getContext('2d', { alpha: true });
    if (!ctxFront || !ctxBack) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let particles: Particle[] = [];
    
    // Drastically reduced snow count for minimal effect
    let particleCount = 0;
    if (mode === 'stars') {
         particleCount = window.innerWidth < 768 ? 40 : 80;
    } else {
         // Snow: Very sparse (20 on mobile, 40 on desktop)
         particleCount = window.innerWidth < 768 ? 20 : 40;
    }

    const snowflakeChars = ['\u2744', '\u2745', '\u2746']; // ❄ ❅ ❆

    const initParticles = () => {
      canvasFront.width = window.innerWidth;
      canvasFront.height = window.innerHeight;
      canvasBack.width = window.innerWidth;
      canvasBack.height = window.innerHeight;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(true));
      }
    };

    const createParticle = (randomY: boolean = false): Particle => {
      const isBack = Math.random() < 0.4;
      const layer = isBack ? 'back' : 'front';
      
      if (mode === 'snow') {
        const sizeBase = layer === 'front' ? 14 : 10;
        const sizeVar = layer === 'front' ? 12 : 6;
        return {
          x: Math.random() * window.innerWidth,
          y: randomY ? Math.random() * window.innerHeight : -30,
          size: Math.random() * sizeVar + sizeBase,
          swayAmplitude: Math.random() * 20 + 10,
          swayFrequency: Math.random() * 0.02 + 0.01,
          swayOffset: Math.random() * Math.PI * 2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 1.0,
          char: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)],
          opacity: layer === 'front' ? (Math.random() * 0.4 + 0.4) : (Math.random() * 0.2 + 0.1),
          vx: 0,
          vy: 0,
          layer,
          isSettled: false,
          settleTime: 0
        };
      } else {
        // --- Star Mode Refined (Glowing Streaks) ---
        const sizeBase = layer === 'front' ? 2 : 1.5;
        return {
          x: Math.random() * window.innerWidth,
          y: randomY ? Math.random() * window.innerHeight : -100,
          size: Math.random() * 1.5 + sizeBase,
          opacity: layer === 'front' ? (Math.random() * 0.4 + 0.2) : (Math.random() * 0.2 + 0.1),
          vx: 0,
          vy: 0,
          speed: Math.random() * 3 + 2,
          trailLength: Math.random() * 10 + 5,
          layer
        };
      }
    };

    const updateParticles = () => {
      ctxFront.clearRect(0, 0, canvasFront.width, canvasFront.height);
      ctxBack.clearRect(0, 0, canvasBack.width, canvasBack.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // --- Snow Accumulation ---
        if (mode === 'snow' && p.isSettled) {
             p.opacity -= 0.003; 
             p.settleTime! += 1;
             
             const ctx = p.layer === 'front' ? ctxFront : ctxBack;
             ctx.font = `${p.size}px sans-serif`;
             ctx.fillStyle = isDark 
                ? `rgba(255, 255, 255, ${p.opacity})` 
                : `rgba(100, 116, 139, ${p.opacity})`;
             ctx.save();
             ctx.translate(p.x, p.y);
             ctx.rotate((p.rotation! * Math.PI) / 180);
             ctx.fillText(p.char!, -p.size / 2, -p.size / 2);
             ctx.restore();

             if (p.opacity <= 0) {
                 const newP = createParticle(false);
                 Object.assign(p, newP);
             }
             continue;
        }

        let dx_move = 0;
        let dy_move = 0;

        if (mode === 'snow') {
          p.swayOffset! += p.swayFrequency!;
          const sway = Math.cos(p.swayOffset!) + Math.sin(p.swayOffset! * 2) * 0.3;
          dx_move = sway * 0.5; 
          const speedMultiplier = p.layer === 'front' ? 1.1 : 0.8;
          dy_move = (1 + (p.size / 10)) * 0.6 * speedMultiplier;
          p.rotation! += p.rotationSpeed! + (sway * 0.5);
        } else {
          // --- Star Physics (Diagonal Rain) ---
          dx_move = p.speed! * 0.3; 
          dy_move = p.speed!;
        }

        // --- Interaction ---
        let dx = p.x - mouseRef.current.x;
        let dy = p.y - mouseRef.current.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        const interactionRadius = mode === 'snow' ? 200 : 100;

        if (distance < interactionRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = Math.pow((interactionRadius - distance) / interactionRadius, 3);
          
          const repulsionStrength = mode === 'snow' 
             ? (p.layer === 'front' ? 4 : 1.5)
             : 0.5;
          
          p.vx += forceDirectionX * force * repulsionStrength;
          p.vy += forceDirectionY * force * repulsionStrength;
        }

        p.x += p.vx + dx_move;
        p.y += p.vy + dy_move;

        p.vx *= 0.92;
        p.vy *= 0.92;

        // --- Boundary Check ---
        const buffer = 50;
        const floor = window.innerHeight;
        
        if (mode === 'snow' && p.y > floor - 10) {
             if (Math.random() < 0.3) {
                 p.y = floor - Math.random() * 10;
                 p.isSettled = true;
             } else if (p.y > floor + buffer) {
                 resetParticle(p);
             }
        } else if (p.y > floor + buffer || p.x > window.innerWidth + buffer || p.x < -buffer) {
             resetParticle(p);
        }

        // --- Rendering ---
        const ctx = p.layer === 'front' ? ctxFront : ctxBack;
        
        if (mode === 'snow') {
            ctx.font = `${p.size}px sans-serif`;
            ctx.fillStyle = isDark 
                ? `rgba(255, 255, 255, ${p.opacity})` 
                : `rgba(100, 116, 139, ${p.opacity})`;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation! * Math.PI) / 180);
            ctx.fillText(p.char!, -p.size / 2, -p.size / 2);
            ctx.restore();
        } else {
            // --- Star Rendering (Streak) ---
            const color = isDark ? "255, 255, 255" : "71, 85, 105"; 
            
            const trailVectorX = p.speed! * 0.3;
            const trailVectorY = p.speed!;
            
            const trailStartX = p.x;
            const trailStartY = p.y;
            const trailEndX = p.x - (trailVectorX * p.trailLength!);
            const trailEndY = p.y - (trailVectorY * p.trailLength!);

            const grad = ctx.createLinearGradient(trailStartX, trailStartY, trailEndX, trailEndY);
            grad.addColorStop(0, `rgba(${color}, ${p.opacity})`);
            grad.addColorStop(1, `rgba(${color}, 0)`);

            ctx.beginPath();
            ctx.moveTo(trailStartX, trailStartY);
            ctx.lineTo(trailEndX, trailEndY);
            ctx.strokeStyle = grad;
            ctx.lineWidth = p.size * 0.6; 
            ctx.lineCap = 'round';
            ctx.stroke();

            // Glowing Head
            if (p.layer === 'front') {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
                ctx.shadowBlur = 4;
                ctx.shadowColor = `rgba(${color}, 0.5)`;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
      }

      frameId.current = requestAnimationFrame(updateParticles);
    };

    const resetParticle = (p: Particle) => {
        const newP = createParticle(false);
        if (mode === 'stars') {
             if (Math.random() < 0.3) {
                 p.x = -20;
                 p.y = Math.random() * window.innerHeight * 0.7;
             } else {
                 p.x = Math.random() * (window.innerWidth + 100);
                 p.y = -20;
             }
        } else {
             p.x = Math.random() * window.innerWidth;
             p.y = -30;
        }
        
        p.vx = 0;
        p.vy = 0;
        p.size = newP.size;
        p.layer = newP.layer;
        p.opacity = newP.opacity;
        
        if (mode === 'snow') {
             p.char = newP.char;
             p.rotation = Math.random() * 360;
             p.swayOffset = Math.random() * Math.PI * 2;
             p.isSettled = false;
             p.settleTime = 0;
        } else {
             p.speed = newP.speed;
             p.trailLength = newP.trailLength;
        }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('resize', initParticles);

    initParticles();
    updateParticles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', initParticles);
      cancelAnimationFrame(frameId.current);
    };
  }, [isDark, mode]);

  return (
    <>
        <canvas ref={canvasBackRef} className="fixed inset-0 pointer-events-none z-[5]" aria-hidden="true" />
        <canvas ref={canvasFrontRef} className="fixed inset-0 pointer-events-none z-[100]" aria-hidden="true" />
    </>
  );
};

export default ParticleBackground;