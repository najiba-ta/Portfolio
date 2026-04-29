"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SplitText } from "@/utils/splitText";
import { useMouseTilt } from "@/hooks/useMouseTilt";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax on scroll
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);


  const charVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  return (
    <header ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden perspective-1000 bg-transparent">
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent backdrop-blur-[2px] z-10" />
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] z-20 animate-pulse" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-30 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 md:max-w-2xl"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-label-sm font-label-sm dark:text-white/60 text-black/60 uppercase tracking-widest">Available for hire</span>
          </motion.div>

          <h1 className="font-display text-display leading-none text-on-surface">
            <SplitText text="Hi, I'm" variants={charVariants} />{" "}
            <span className="inline-block relative">
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" as const }}
                className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#bd00ff,#ecb2ff,#bd00ff)] bg-[length:200%_auto]"
              >
                Najiba
              </motion.span>
            </span>
            ,<br />
            <SplitText text="Frontend Developer" variants={charVariants} />
          </h1>

          <motion.p variants={fadeUpVariant} className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Specializing in high-performance React and Next.js applications. Transforming complex requirements into elegant, interactive frontend solutions.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 pt-4">
            <button data-cursor="View" className="bg-[#FF8A00] text-black px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 flex items-center gap-2 group relative overflow-hidden">
              <span className="relative z-10">Projects</span>
              <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </button>
            <button data-cursor="Open" className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all">
              Hire Me
            </button>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex items-center gap-6 pt-4">
            {[
              { icon: <FaFacebookF />, url: "https://www.facebook.com/najibatakarrum", color: "#1877F2" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/naju_is_here", color: "#E4405F" },
              { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/najiba-webdev/", color: "#0A66C2" },
              { icon: <SiGmail />, url: "mailto:shahidnajiba@gmail.com", color: "#EA4335" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target={social.url.startsWith("mailto") ? undefined : "_blank"}
                rel={social.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.2, color: social.color }}
                whileTap={{ scale: 0.9 }}
                className="dark:text-white/40 text-black/40 text-2xl transition-colors duration-300"
                data-cursor="Open"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] dark:text-white/50 text-black/50">Scroll</span>
        <div className="w-[1px] h-12 dark:bg-white/10 bg-black/10 overflow-hidden relative">
          <motion.div 
            className="w-full h-full dark:bg-white bg-black origin-top"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "circInOut" as const }}
          />
        </div>
      </motion.div>
    </header>
  );
}
