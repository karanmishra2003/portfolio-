"use client";
import React from 'react';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 px-4 relative bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent dark:via-pink-900/10" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-pink-600/20 dark:bg-pink-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/20 dark:bg-cyan-600/30 rounded-full blur-3xl" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 text-transparent bg-clip-text dark:from-pink-400 dark:via-purple-400 dark:to-cyan-400"
        >
          My Projects
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          AI-powered applications and full-stack projects showcasing expertise in LLMs, RAG systems, React development, and modern web technologies
        </motion.p>

        <motion.div variants={itemVariants} className="max-w-5xl mx-auto px-4 md:px-8">
          <HoverEffect items={projects} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export const projects = [
  {
    id: "searchmind-ai",
    title: "SearchMind AI",
    description:
      "An intelligent conversational search system integrating real-time web search with LLMs using graph-based orchestration for dynamic tool routing and context-aware conversations.",
    link: "https://github.com/karanmishra2003",
  },
  {
    id: "quizgenius",
    title: "QuizGenius",
    description:
      "An adaptive AI-powered quiz generation platform for educational use, generating structured quizzes across multiple subjects with configurable difficulty levels using LLM pipelines.",
    link: "https://github.com/karanmishra2003",
  },
  {
    id: "documind",
    title: "DocuMind",
    description:
      "A production-ready multimodal RAG system for querying technical documents, processing both text and image data from PDFs with high-accuracy semantic search.",
    link: "https://github.com/karanmishra2003",
  },
  {
    id: "factorai",
    title: "FactorAI",
    description:
      "A web-based AI-powered application designed to analyze inputs and generate intelligent outputs using modern frontend technologies. It focuses on delivering a clean user experience while integrating AI-driven logic for smart decision-making and automation.",
    link: "https://github.com/karanmishra2003",
  },
];
