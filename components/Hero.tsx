import React, { useEffect, useRef, useState } from 'react';

// Physics Configuration
const FRICTION = 0.98;
const MOUSE_REPULSION = 1000;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
}

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Physics State
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouse.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Initialize and Run Physics Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize Particles (Bubbles)
    const initParticles = () => {
        particles.current = Array.from({ length: 12 }).map(() => {
            const radius = 40 + Math.random() * 90; // Slightly larger for better 3D effect
            return {
                x: Math.random() * (canvas.width - radius * 2) + radius,
                y: Math.random() * (canvas.height - radius * 2) + radius,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                radius,
                mass: radius
            };
        });
    };
    initParticles();

    const update = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.current.forEach((p, i) => {
            // Apply Velocity
            p.x += p.vx;
            p.y += p.vy;

            // Apply Friction
            p.vx *= FRICTION;
            p.vy *= FRICTION;

            // Wall Collisions
            if (p.x - p.radius < 0) { p.x = p.radius; p.vx *= -1; }
            if (p.x + p.radius > canvas.width) { p.x = canvas.width - p.radius; p.vx *= -1; }
            if (p.y - p.radius < 0) { p.y = p.radius; p.vy *= -1; }
            if (p.y + p.radius > canvas.height) { p.y = canvas.height - p.radius; p.vy *= -1; }

            // Mouse Repulsion
            const dx = p.x - mouse.current.x;
            const dy = p.y - mouse.current.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < 500) { // Increased interaction radius
                const force = (500 - dist) / 500;
                const angle = Math.atan2(dy, dx);
                const push = force * 2.0; 
                p.vx += Math.cos(angle) * push;
                p.vy += Math.sin(angle) * push;
            }

            // Particle Collisions
            for (let j = i + 1; j < particles.current.length; j++) {
                const p2 = particles.current[j];
                const dx = p2.x - p.x;
                const dy = p2.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = p.radius + p2.radius;

                if (distance < minDistance) {
                    const angle = Math.atan2(dy, dx);
                    const tx = p.x + Math.cos(angle) * minDistance;
                    const ty = p.y + Math.sin(angle) * minDistance;
                    const ax = (tx - p2.x) * 0.05; 
                    const ay = (ty - p2.y) * 0.05;
                    
                    p.vx -= ax;
                    p.vy -= ay;
                    p2.vx += ax;
                    p2.vy += ay;
                }
            }

            // Ambient float
            if (Math.abs(p.vx) < 0.1) p.vx += (Math.random() - 0.5) * 0.05;
            if (Math.abs(p.vy) < 0.1) p.vy += (Math.random() - 0.5) * 0.05;

            // Draw 3D Blue Bubble Effect
            const gradient = ctx.createRadialGradient(
                p.x - p.radius * 0.3, 
                p.y - p.radius * 0.3, 
                p.radius * 0.1, 
                p.x, 
                p.y, 
                p.radius
            );
            
            // 3D Lighting: Deep Electric Blue
            gradient.addColorStop(0, 'rgba(147, 197, 253, 0.9)'); // Bright highlight (Blue-300)
            gradient.addColorStop(0.2, 'rgba(59, 130, 246, 0.6)'); // Core (Blue-500)
            gradient.addColorStop(0.6, 'rgba(30, 58, 138, 0.3)'); // Deep depth (Blue-900)
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fade edge

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        });

        animationFrameId.current = requestAnimationFrame(update);
    };

    update();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-transparent">
      
      {/* Interactive Physics Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
      />

      {/* Fixed Background Typography - Parallax Effect */}
      <div 
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-0 mix-blend-difference"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
          <div className="flex flex-col items-center leading-[0.8] select-none">
            <h1 className="font-display font-extrabold text-[18vw] tracking-tighter text-white/10 opacity-100 whitespace-nowrap">
              ABRAHAM
            </h1>
            <h1 className="font-display font-extrabold text-[18vw] tracking-tighter text-white/10 opacity-100 whitespace-nowrap ml-[1em]">
              OLVERA
            </h1>
          </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-end pb-32 pointer-events-none">
        {/* Content Card */}
        <div className="max-w-4xl pointer-events-auto">
            <div className="flex items-center gap-4 mb-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
                <div className="h-[1px] w-20 bg-primary"></div>
                <span className="text-sm font-mono uppercase tracking-widest text-primary">Dubai • UAE</span>
            </div>

            <h2 className="font-display font-bold text-6xl md:text-8xl text-white mb-8 leading-[0.9] animate-reveal" style={{ animationDelay: '0.3s' }}>
              ARQUITECTO<br/>
              <span className="text-gray-500">DEL FUTURO.</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl animate-reveal" style={{ animationDelay: '0.4s' }}>
              Reubicación estratégica, inversiones de alto impacto y dominio de la IA. 
              Ayudo a visionarios a construir su legado en la economía digital.
            </p>

            <div className="mt-12 flex gap-6 animate-reveal" style={{ animationDelay: '0.5s' }}>
                <a href="#ventures" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                  Explorar Proyectos
                </a>
                <a href="#contact" className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md">
                  Hablemos
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;