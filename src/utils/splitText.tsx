import React from "react";
import { motion, Variants } from "framer-motion";

export function SplitText({
  text,
  variants,
  className = "",
}: {
  text: string;
  variants: Variants;
  className?: string;
}) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              className="inline-block relative"
              variants={variants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
