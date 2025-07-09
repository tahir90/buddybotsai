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
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
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
          // Draw data node
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'neural':
          // Draw neural connection
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
          // Draw AI spark
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
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Interactive mouse effect
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.vx += dx * force * 0.0001;
            particle.vy += dy * force * 0.0001;
          }
        }

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Velocity damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      connectParticles();
      
      particlesRef.current.forEach(drawParticle);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
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