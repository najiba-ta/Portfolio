"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "circInOut" as const }}
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-on-surface/10 to-transparent origin-left"
      />
    </div>
  );
}
