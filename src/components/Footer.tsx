"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <footer className="bg-[#0A0A0B] w-full border-t border-zinc-900 pt-24 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[20vh] bg-primary-container/10 rounded-[100%] blur-[100px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-16 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase opacity-80 mix-blend-screen">
          NAJIBA TAKARRUM
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 md:gap-16">
          {["Portfolio", "Services", "Experience", "Contact"].map((link, i) => (
            <a 
              key={i} 
              data-cursor="Open"
              className="group relative text-zinc-400 hover:text-white transition-colors font-sans text-sm uppercase tracking-[0.2em] py-2" 
              href={link === "Contact" ? "#" : `#${link.toLowerCase()}`}
            >
              {link}
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-container origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
          ))}
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex gap-8">
          {["public", "hub", "alternate_email"].map((icon, i) => (
            <motion.a 
              key={i}
              data-cursor="View"
              whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary-container hover:bg-primary-container/20 transition-colors" 
              href="#"
            >
              <span className="material-symbols-outlined text-3xl">{icon}</span>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div variants={itemVariants} className="pt-16 border-t border-white/5 w-full text-center flex flex-col items-center gap-4">
          <p className="font-sans text-xs tracking-widest text-zinc-600 uppercase">Engineered for Performance</p>
          <p className="font-sans text-sm text-zinc-500">© {new Date().getFullYear()} NAJIBA TAKARRUM. ALL RIGHTS RESERVED.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
