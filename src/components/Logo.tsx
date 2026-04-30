"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 flex items-center justify-center cursor-pointer group"
    >
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
      
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bd00ff" />
            <stop offset="100%" stopColor="#00D1FF" />
          </linearGradient>
          <filter id="logo-blur">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Stylized NT Path */}
        {/* The design: A continuous-feeling path where the 'N' transitions into the 'T' top bar */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M25 75V25L60 75V25M50 25H85M67.5 25V75"
          stroke="url(#nt-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "url(#logo-blur)" }}
        />

        {/* Minimalist Tech Elements */}
        <motion.rect 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          x="63.5" y="71" width="8" height="8" rx="2" 
          fill="#00D1FF" 
          className="animate-pulse"
        />
      </svg>
    </motion.div>
  );
}
