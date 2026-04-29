"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import SectionBackground from "./SectionBackground";

function ServiceCard({ 
  icon, 
  title, 
  desc, 
  isHovered, 
  onHoverStart, 
  onHoverEnd 
}: { 
  icon: string, 
  title: string, 
  desc: string,
  isHovered: boolean,
  onHoverStart: () => void,
  onHoverEnd: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY } = useMouseTilt(cardRef, 10);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      animate={{
        scale: isHovered ? 1.05 : 1,
        z: isHovered ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative glass-card p-8 rounded-3xl group cursor-none perspective-1000 z-10"
      data-cursor="View"
    >
      {/* Animated Glow Border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(189,0,255,0.8)_360deg)]"
        />
        <div className="absolute inset-[1px] bg-surface-container rounded-[calc(1.5rem-1px)] z-10"></div>
      </div>

      <div className="relative z-20 transform-gpu" style={{ transform: "translateZ(30px)" }}>
        <motion.div 
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors duration-500"
        >
          <span className="material-symbols-outlined text-primary group-hover:text-white dark:group-hover:text-black" style={{ fontVariationSettings: "'FILL' 1" }}>
            {icon}
          </span>
        </motion.div>
        <h3 className="font-h3 text-h3 mb-4 transition-colors text-on-surface group-hover:text-primary">{title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed transition-colors group-hover:text-on-surface">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const servicesData = [
    { icon: "star", title: "React Development", desc: "Crafting dynamic, reusable, and high-performance component architectures with a focus on seamless user interactions." },
    { icon: "speed", title: "Next.js Optimization", desc: "Leveraging SSR, SSG, and ISR to build lightning-fast, SEO-friendly web applications that provide superior performance." },
    { icon: "javascript", title: "Modern JavaScript", desc: "Writing clean, modular ES6+ code that ensures scalability, maintainability, and efficient logic across complex frontend systems." },
    { icon: "database", title: "Full-Stack Integration", desc: "Connecting frontend excellence with MongoDB databases to create robust, data-driven applications within the MERN ecosystem." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="py-32 bg-transparent px-8 relative overflow-hidden transition-colors duration-500" id="services">
      <SectionBackground variant="accent" />
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden perspective-1000">
        <motion.div 
          animate={{ translateZ: [-100, -50, -100], rotateZ: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
          className="absolute -right-[20%] top-[10%] w-[800px] h-[800px] border border-on-surface/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="font-display text-h1 text-on-surface">Building Innovative Web Solutions</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">
            Providing a comprehensive suite of digital services designed to elevate your brand and optimize your digital presence.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              animate={{
                scale: hoveredIdx !== null && hoveredIdx !== idx ? 0.95 : 1,
                opacity: hoveredIdx !== null && hoveredIdx !== idx ? 0.6 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                desc={service.desc}
                isHovered={hoveredIdx === idx}
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
