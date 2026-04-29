"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-background">
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
        }}
        transition={{ duration: 25, ease: "linear" as const, repeat: Infinity }}
        className="absolute top-0 left-[10%] h-[40vh] w-[40vw] rounded-full bg-primary-container/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-20%", "20%"],
        }}
        transition={{ duration: 30, ease: "linear" as const, repeat: Infinity }}
        className="absolute bottom-0 right-[10%] h-[50vh] w-[40vw] rounded-full bg-secondary-container/10 blur-[150px]"
      />
    </div>
  );
}
