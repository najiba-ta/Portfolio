"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SplitText } from "@/utils/splitText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax on scroll
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);


  const charVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  return (
    <header ref={containerRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden perspective-1000">
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Developer Background" 
            fill
            priority
            className="object-cover opacity-90 dark:opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background backdrop-blur-[1px] z-10" />
        <div className="absolute inset-0 bg-white/[0.01] dark:bg-black/[0.01] z-10" />
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] z-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-30 flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-12 md:gap-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 md:max-w-2xl text-center md:text-left"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-[10px] md:text-label-sm font-label-sm dark:text-white/60 text-black/60 uppercase tracking-widest">Available for hire</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-display leading-[1.1] text-on-surface tracking-tighter">
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
            ,<br className="hidden md:block" />
            <SplitText text="Frontend Developer" variants={charVariants} />
          </h1>

          <motion.p variants={fadeUpVariant} className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-lg mx-auto md:mx-0">
            Specializing in high-performance React and Next.js applications. Transforming complex requirements into elegant, interactive frontend solutions.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <motion.button 
              data-cursor="View" 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 209, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center gap-2 group relative overflow-hidden transition-colors"
            >
              <span className="relative z-10">Projects</span>
              <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-xl md:text-2xl">arrow_outward</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </motion.button>
            <motion.button 
              data-cursor="Open" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 209, 255, 0.1)", borderColor: "rgba(0, 209, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 text-on-surface px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all"
            >
              Hire Me
            </motion.button>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex items-center gap-4 md:gap-6 pt-4 justify-center md:justify-start">
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
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: `${social.color}20`,
                  borderColor: `${social.color}40`,
                  boxShadow: `0 0 20px ${social.color}30`
                }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 transition-all duration-300 group"
                style={{ color: social.color }}
                data-cursor="Open"
              >
                <div className="group-hover:scale-110 transition-transform duration-300 text-sm md:text-base">
                  {social.icon}
                </div>
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
