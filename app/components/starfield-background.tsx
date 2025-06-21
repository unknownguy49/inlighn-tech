"use client";

import { useEffect, useRef } from "react";

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    // Generate stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame: number;

    // Helper to get current theme
    const getTheme = () => {
      if (document.documentElement.classList.contains("light")) return "light";
      if (document.documentElement.classList.contains("dark")) return "dark";
      return "light";
    };

    let theme = getTheme();

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.fillStyle = theme === "light" ? "#fff" : "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      // Draw and animate stars
      stars.forEach((star) => {
        // Update twinkle
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle =
          theme === "light"
            ? `rgba(0, 0, 0, ${star.opacity * twinkle})`
            : `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();

        // Add subtle glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle =
            theme === "light"
              ? `rgba(0,0,0,${star.opacity * twinkle * 0.15})`
              : `rgba(255,255,255,${star.opacity * twinkle * 0.3})`;
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const newTheme = getTheme();
      if (newTheme !== theme) {
        theme = newTheme;
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    animate(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{ pointerEvents: "none" }}
    />
  );
}
