"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBackground from "./SectionBackground";

gsap.registerPlugin(ScrollTrigger);

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  xOffset: number;
  delay: number;
}

function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      xOffset: Math.random() * 50 - 25,
      delay: Math.random() * 5,
    }));
    // We expect a single cascading render on mount to initialize random values.
    setParticles(generated); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen opacity-50">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, p.xOffset, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function CTA() {
  const ctaRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, 
        { clipPath: "inset(100% 0 0 0)", y: 50 },
        { 
          clipPath: "inset(0% 0 0 0)", 
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 60%",
          }
        }
      );
    }
  }, { scope: ctaRef });

  return (
    <section ref={ctaRef} className="relative py-48 overflow-hidden bg-transparent flex items-center justify-center min-h-[80vh] transition-colors duration-500">
      <SectionBackground variant="secondary" />
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" as const }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Workspace Background"
          className="w-full h-full object-cover dark:opacity-50 opacity-80"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2YuwREfGjnjGxxkVKftAeZkBlnm2BgSMsHwOj3YA7F3eOmimEBV1UHhc77H4AkF12URvBABGyZgzu_3i00XtwKqdmMPrCTummpt9OnE0_pPmbQgN1whkQ2MO_5q_3orOjBZOZbqn3C3hWd7mMa4JCvZgaASBJUrYgSZ3ccoDopFCZpYDCx_FTvswRXgPSHGWibcIWC0YiVt7SPyDmvNZf5itSE1bmMrdb6pJZrnlUlQqVRBbg8NJ1zPkWfASt1qdFOtXrgdDvJw"
        />
      </motion.div>
      
      {/* Animated Gradient Overlay */}
      <motion.div 
        animate={{ 
          background: [
            "linear-gradient(to bottom, var(--color-background) 0%, rgba(189,0,255,0.05) 50%, var(--color-background) 100%)",
            "linear-gradient(to bottom, var(--color-background) 0%, rgba(255,138,0,0.03) 50%, var(--color-background) 100%)",
            "linear-gradient(to bottom, var(--color-background) 0%, rgba(189,0,255,0.05) 50%, var(--color-background) 100%)"
          ] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" as const }}
        className="absolute inset-0"
      />
      
      <FloatingParticles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center space-y-12">
        <h2 ref={headingRef} className="font-display text-[10vw] md:text-[6vw] leading-none text-on-surface tracking-tighter" style={{ clipPath: "inset(100% 0 0 0)" }}>
          Transforming Ideas<br/>Into Reality
        </h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
          viewport={{ once: true }}
          className="text-on-surface-variant text-h3 font-body-lg max-w-2xl mx-auto"
        >
          Let&apos;s build the next generation of digital tools together. Ready to start your project?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.button 
            animate={{
              boxShadow: ["0 0 0px rgba(255,138,0,0)", "0 0 40px rgba(255,138,0,0.4)", "0 0 0px rgba(255,138,0,0)"]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="Open"
            className="bg-[#FF8A00] text-black px-12 py-6 rounded-2xl font-bold text-xl transition-transform relative overflow-hidden group"
          >
            <span className="relative z-10">Let&apos;s Get Started</span>
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 rounded-2xl"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
