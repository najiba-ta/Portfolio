"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax effect on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none">
      <motion.div
        style={{ y, scale }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: { duration: 2, ease: "easeOut" }
        }}
        className="relative w-full h-[120vh]"
      >
        <Image
          src="/global-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Animated slow pan for a living feel */}
        <motion.div
          animate={{
            x: ["-2%", "2%", "-2%"],
            y: ["-2%", "2%", "-2%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          {/* Main Overlay - Dark/Light mode sensitive */}
          <div className="absolute inset-0 bg-background/60 dark:bg-background/80 transition-colors duration-500" />
          
          {/* Subtle tech gradient to add depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/5 via-transparent to-secondary-container/5" />
          
          {/* Vignette effect to draw focus to content */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
