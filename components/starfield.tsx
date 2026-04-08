'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    speed: number;
}

interface MouseCluster {
    x: number;
    y: number;
    age: number;
    maxAge: number;
}

interface Ripple {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    opacity: number;
    createdAt: number;
}

interface RadiatingParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
    age: number;
    maxAge: number;
    hue: number;
}

export function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const radiatingParticles = useRef<RadiatingParticle[]>([]);
    const lastParticlePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Generate stars
        const stars: Star[] = [];
        const starCount = 200;

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                opacity: Math.random() * 0.5 + 0.3,
                speed: Math.random() * 0.3 + 0.1,
            });
        }

        // Mouse move handler with radiating stars effect
        const handleMouseMove = (e: MouseEvent) => {
            const newPos = { x: e.clientX, y: e.clientY };

            // Calculate distance from last particle position
            const distFromLast = Math.sqrt(
                Math.pow(newPos.x - lastParticlePos.current.x, 2) +
                Math.pow(newPos.y - lastParticlePos.current.y, 2)
            );

            // Create radiating star particles every 25 pixels of movement
            if (distFromLast > 25) {
                const particleCount = 12;
                for (let i = 0; i < particleCount; i++) {
                    const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
                    const speed = Math.random() * 3 + 2;
                    const hue = Math.random() * 60 + 220; // Purple to blue range

                    radiatingParticles.current.push({
                        x: newPos.x,
                        y: newPos.y,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        radius: Math.random() * 1.5 + 1,
                        opacity: 0.9,
                        age: 0,
                        maxAge: 60,
                        hue: hue,
                    });
                }
                lastParticlePos.current = { ...newPos };
            }

            mousePos.current = newPos;
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animationId: number;
        const animate = () => {
            // Clear canvas with semi-transparent dark background
            ctx.fillStyle = 'rgba(9, 14, 35)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw regular stars
            stars.forEach((star) => {
                // Twinkle effect
                star.opacity += (Math.random() - 0.5) * 0.05;
                star.opacity = Math.max(0.1, Math.min(1, star.opacity));

                // Draw star
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                // Add glow effect
                const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3);
                gradient.addColorStop(0, `rgba(100, 200, 255, ${star.opacity * 0.4})`);
                gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
                ctx.fill();

                // Slight movement
                if (Math.random() > 0.98) {
                    star.x += (Math.random() - 0.5) * 2;
                    star.y += (Math.random() - 0.5) * 2;

                    // Wrap around screen
                    if (star.x < 0) star.x = canvas.width;
                    if (star.x > canvas.width) star.x = 0;
                    if (star.y < 0) star.y = canvas.height;
                    if (star.y > canvas.height) star.y = 0;
                }
            });

            // Update and draw radiating particles
            for (let i = radiatingParticles.current.length - 1; i >= 0; i--) {
                const particle = radiatingParticles.current[i];

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.age++;

                if (particle.age > particle.maxAge) {
                    radiatingParticles.current.splice(i, 1);
                    continue;
                }

                // Fade out over time
                const progress = particle.age / particle.maxAge;
                particle.opacity = (1 - progress) * 0.9;

                // Slightly shrink the particle
                const size = particle.radius * (1 - progress * 0.3);

                // Draw main star particle
                ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${particle.opacity})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
                ctx.fill();

                // Add glow effect
                const particleGradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, size * 3
                );
                particleGradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${particle.opacity * 0.3})`);
                particleGradient.addColorStop(1, `hsla(${particle.hue}, 100%, 60%, 0)`);
                ctx.fillStyle = particleGradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}
