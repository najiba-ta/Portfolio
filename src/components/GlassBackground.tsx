"use client";

import { motion } from "framer-motion";

export default function GlassBackground() {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Animated Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[10%] w-[60vw] h-[60vh] bg-primary-container/20 dark:bg-primary-container/10 rounded-full blur-[120px] opacity-50"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[5%] w-[50vw] h-[50vh] bg-secondary-container/20 dark:bg-secondary-container/10 rounded-full blur-[100px] opacity-40"
      />

      {/* Modern Frosted Glass Effect */}
      <div className="absolute inset-0 bg-background/30 dark:bg-background/60 backdrop-blur-[120px]" />
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
