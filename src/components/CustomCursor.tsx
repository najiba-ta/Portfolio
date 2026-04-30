"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the main cursor
  const springX = useSpring(mouseX, { damping: 25, stiffness: 400, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 400, mass: 0.5 });

  // Slower springs for the trailing dot
  const trailX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.8 });
  const trailY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    // Check if device supports hover
    const checkMobile = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    checkMobile();
    
    if (isMobile) return;

    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      
      // Handle interactive elements
      const interactiveEl = target.closest("a, button, [data-cursor]");
      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor");
        if (text) {
          setCursorText(text);
          setCursorVariant("text");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(189, 0, 255, 0.5)",
      mixBlendMode: "screen" as const,
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(255, 138, 0, 0.2)",
      border: "1px solid rgba(255, 138, 0, 0.5)",
      mixBlendMode: "screen" as const,
    },
    text: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      mixBlendMode: "normal" as const,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none flex items-center justify-center rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        {cursorVariant === "text" && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold tracking-widest text-white uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
      
      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[998] pointer-events-none blur-[1px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: cursorVariant === "default" ? 0.5 : 0,
          scale: cursorVariant === "default" ? 1 : 0
        }}
      />
    </>
  );
}
