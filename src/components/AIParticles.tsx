import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'data' | 'neural' | 'spark';
}

interface AIParticlesProps {
  density?: number;
  speed?: number;
  interactive?: boolean;
}

const AIParticles: React.FC<AIParticlesProps> = ({ 
  density = 50, 
  speed = 0.5, 
  interactive = true 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      const types: Particle['type'][] = ['data', 'neural', 'spark'];
      const colors = ['#6B46C1', '#9D174D', '#059669', '#22D3EE'];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)]
      };
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < density; i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;

      switch (particle.type) {
        case 'data':
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'neural':
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case 'spark':
          ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
          break;
      }
      ctx.restore();
    };

    const connectParticles = () => {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = '#6B46C1';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      
      particles.forEach(particle => {
        // Apply base movement - this ensures particles always move
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Interactive mouse effect (gentle)
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const force = (120 - distance) / 120;
            particle.vx += dx * force * 0.00008;
            particle.vy += dy * force * 0.00008;
          }
        }

        // Boundary wrapping with smooth transition
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Gentle velocity damping
        particle.vx *= 0.998;
        particle.vy *= 0.998;

        // Ensure minimum movement to prevent particles from stopping
        const minSpeed = 0.1;
        const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (currentSpeed < minSpeed) {
          const angle = Math.random() * Math.PI * 2;
          particle.vx = Math.cos(angle) * minSpeed;
          particle.vy = Math.sin(angle) * minSpeed;
        }
      });
    };

    const animate = () => {
      // Ensure we don't have multiple animation loops running
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const animateFrame = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        updateParticles();
        connectParticles();
        
        particlesRef.current.forEach(drawParticle);
        
        // Continue animation loop
        animationRef.current = requestAnimationFrame(animateFrame);
      };

      animateFrame();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      // Cleanup
      isAnimatingRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [density, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AIParticles;