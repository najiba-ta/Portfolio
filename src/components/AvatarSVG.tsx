"use client";

import { motion } from "framer-motion";

export default function AvatarSVG() {
  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center group">
      {/* Ambience / Glow */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
      
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Skin Base with Subsurface Scattering Feel */}
          <radialGradient id="skin-mesh" cx="50%" cy="40%" r="50%" fx="40%" fy="30%">
            <stop offset="0%" stopColor="#FFDBAC" />
            <stop offset="70%" stopColor="#F1C27D" />
            <stop offset="100%" stopColor="#D4A373" />
          </radialGradient>
          
          {/* Hair with Shine */}
          <linearGradient id="hair-pro" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#3D2B1F" />
            <stop offset="30%" stopColor="#4A3428" />
            <stop offset="100%" stopColor="#1A120B" />
          </linearGradient>

          {/* Shadow Layers */}
          <filter id="soft-depth" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Neck Structure */}
        <path d="M42 75C42 75 42 85 50 85C58 85 58 75 58 75" fill="#D4A373" />
        <rect x="42" y="68" width="16" height="15" fill="url(#skin-mesh)" />
        
        {/* Face - 3D Volume Shape */}
        <path d="M28 45C28 32 38 23 50 23C62 23 72 32 72 45V55C72 67 62 77 50 77C38 77 28 67 28 55V45Z" fill="url(#skin-mesh)" />
        
        {/* Eyes - Realistic Focus */}
        <g filter="url(#soft-depth)" opacity="0.9">
          <circle cx="41" cy="52" r="3.5" fill="white" />
          <circle cx="41" cy="52" r="2" fill="#1A120B" />
          <circle cx="40" cy="51" r="0.8" fill="white" />
          
          <circle cx="59" cy="52" r="3.5" fill="white" />
          <circle cx="59" cy="52" r="2" fill="#1A120B" />
          <circle cx="58" cy="51" r="0.8" fill="white" />
        </g>

        {/* Brows */}
        <path d="M36 46C38 44 44 44 46 46" stroke="#3D2B1F" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M54 46C56 44 62 44 64 46" stroke="#3D2B1F" strokeWidth="1.2" strokeLinecap="round" />

        {/* Mouth - Natural Smile */}
        <path d="M43 66C45 68.5 55 68.5 57 66" stroke="#9E4B4B" strokeWidth="1.2" strokeLinecap="round" />

        {/* Hair - Facebook/WhatsApp 3D Style */}
        <path d="M25 45C25 28 35 18 50 18C65 18 75 28 75 45V50C75 50 73 40 50 40C27 40 25 50 25 50V45Z" fill="url(#hair-pro)" />
        
        {/* Upper Body / Professional Blazer */}
        <path d="M20 85C25 78 35 76 50 76C65 76 75 78 80 85V100H20V85Z" fill="#2D2D2D" />
        <path d="M35 76L50 95L65 76" stroke="#1A120B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
