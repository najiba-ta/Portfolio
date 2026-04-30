"use client";

import { motion } from "framer-motion";

interface SectionBackgroundProps {
  variant?: "primary" | "secondary" | "accent" | "minimal";
  className?: string;
}

export default function SectionBackground({ variant = "primary", className = "" }: SectionBackgroundProps) {
  const getGlowColor = () => {
    switch (variant) {
      case "secondary": return "bg-secondary-container/10";
      case "accent": return "bg-cyan-500/5";
      case "minimal": return "bg-primary-container/5";
      default: return "bg-primary-container/10";
    }
  };

  return (
    <div className={`absolute inset-0 z-[-1] pointer-events-none overflow-hidden ${className}`}>
      {/* Tech Grid Pattern - Consistent across all */}
      <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Tech Glows - Variation based on variant */}
      <motion.div
        animate={{
          x: variant === "secondary" ? ["10%", "-10%", "10%"] : ["-10%", "10%", "-10%"],
          y: variant === "accent" ? ["20%", "-20%", "20%"] : ["-20%", "20%", "-20%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-0 left-0 w-[60vw] h-[60vh] ${getGlowColor()} rounded-full blur-[120px]`}
      />

      <motion.div
        animate={{
          x: variant === "primary" ? ["20%", "-20%", "20%"] : ["-20%", "20%", "-20%"],
          y: ["10%", "-10%", "10%"],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute bottom-0 right-0 w-[50vw] h-[50vh] ${variant === "accent" ? "bg-primary-container/10" : getGlowColor()} rounded-full blur-[100px]`}
      />

      {/* Abstract Tech Lines */}
      {variant !== "minimal" && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: [0, 0.1, 0] }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                delay: i * 4,
                ease: "linear",
              }}
              className="absolute h-[1px] w-[400px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              style={{ top: `${30 + i * 20}%`, transform: "rotate(-5deg)" }}
            />
          ))}
        </div>
      )}

      {/* Frosted Glass Overlay - Core Aesthetic */}
      <div className="absolute inset-0 bg-background/15 dark:bg-background/60 backdrop-blur-[8px]" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
