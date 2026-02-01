"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className = "", animate = true }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent ${className}`}
      animate={
        animate
          ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }
          : undefined
      }
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.span>
  );
}

export function NeonText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`relative ${className}`}
      style={{
        textShadow: `
          0 0 10px rgba(139, 92, 246, 0.8),
          0 0 20px rgba(139, 92, 246, 0.6),
          0 0 30px rgba(139, 92, 246, 0.4),
          0 0 40px rgba(236, 72, 153, 0.4)
        `,
      }}
    >
      {children}
    </span>
  );
}

export function GlitchText({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-red-500 opacity-70"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        aria-hidden
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-cyan-500 opacity-70"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
        aria-hidden
      >
        {children}
      </motion.span>
    </div>
  );
}

export function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.05,
            delay: index * 0.05,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-0.5 h-8 bg-purple-500 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.span>
  );
}
