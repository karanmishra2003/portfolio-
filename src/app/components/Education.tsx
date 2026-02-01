"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaAward, FaCertificate } from "react-icons/fa";

const Education = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const education = [
    {
      degree: "B.Tech (Bachelor of Technology)",
      field: "Information Technology",
      institution: "Maharaja Surajmal Institute of Technology (MSIT), New Delhi",
      year: "2022 - 2026 (Expected)",
      score: "CGPA: 8.4",
      description: "Focused on AI/ML, full-stack development, and data analytics. Active participant in technical events and hackathons. Strong foundation in software engineering principles and modern technologies."
    }
  ];

  const certifications = [
    {
      title: "Generative AI Fundamentals",
      issuer: "Harish Neel",
      year: "2025",
      icon: "🤖"
    },
    {
      title: "LLMOps & RAG Systems",
      issuer: "Udemy",
      year: "2025",
      icon: "🔗"
    }
  ];

  const achievements = [
    {
      title: "Founder - Hacker's Hideout",
      event: "Community Leadership",
      description: "Established and led a tech-focused community for collaboration, peer learning, and knowledge sharing among students and developers"
    },
    {
      title: "LLMOps & AIOps Bootcamp",
      event: "Professional Development",
      description: "Completed intensive bootcamp by Krish Naik focusing on production deployment, monitoring, and scaling of AI systems"
    },
    {
      title: "Gen AI & LLM Initiatives",
      event: "Self-Learning",
      description: "Actively engaged in Generative AI and LLM-focused learning with hands-on projects in LLMOps and AIOps"
    },
    {
      title: "Hackathon Participant",
      event: "4+ Hackathons",
      description: "Active participant in multiple hackathons including Smart India Hackathon and various tech competitions"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent dark:via-purple-900/20" 
      />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/20 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-500 text-transparent bg-clip-text dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400"
          whileInView={{ scale: [1, 1.05, 1] }}
          viewport={{ once: true }}
        >
          Education & Achievements
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          My academic journey and accomplishments
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <motion.span
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-purple-600 dark:text-purple-400"
              >
                <FaGraduationCap />
              </motion.span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                >
                  <motion.h4 
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                    whileHover={{ color: "#9333ea" }}
                  >
                    {edu.degree}
                  </motion.h4>
                  <motion.p 
                    className="text-purple-600 dark:text-purple-400 mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.field}
                  </motion.p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <motion.span
                      whileHover={{ color: "#22c55e", scale: 1.05 }}
                    >
                      {edu.year}
                    </motion.span>
                    <motion.span 
                      className="text-green-600 dark:text-green-400 font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      {edu.score}
                    </motion.span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-3">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <motion.span
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.5 }}
                className="text-blue-600 dark:text-blue-400"
              >
                <FaCertificate />
              </motion.span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    className="text-3xl mb-3"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <motion.h4 
                    className="text-gray-900 dark:text-white font-medium mb-1"
                    whileHover={{ color: "#3b82f6" }}
                  >
                    {cert.title}
                  </motion.h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                  <motion.p 
                    className="text-purple-600 dark:text-purple-400 text-xs mt-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert.year}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="mb-8 bg-gray-100 dark:bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 border border-gray-200 dark:border-purple-500/30 rounded-2xl p-6 text-center cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
              className="flex items-center justify-center gap-3 mb-2"
            >
              <span className="text-4xl">🏆</span>
              <motion.h4 
                className="text-2xl font-bold text-gray-900 dark:text-white"
                whileHover={{ color: "#f0abfc" }}
              >
                4+ Hackathons
              </motion.h4>
              <span className="text-4xl">🎯</span>
            </motion.div>
            <p className="text-gray-700 dark:text-gray-700">
              Active participant in multiple hackathons including <motion.span
                whileHover={{ color: "#f97316", scale: 1.05 }}
                className="text-orange-500 dark:text-orange-400 font-semibold inline-block"
              >Smart India Hackathon</motion.span> and various tech competitions
            </p>
          </motion.div>
          
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <motion.span
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-pink-600 dark:text-pink-400"
            >
              <FaAward />
            </motion.span>
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 40px -12px rgba(236, 72, 153, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {index + 1}
                </motion.div>
                <motion.h4 
                  className="text-gray-900 dark:text-white font-medium mb-1"
                  whileHover={{ color: "#f472b6" }}
                >
                  {achievement.title}
                </motion.h4>
                <motion.p 
                  className="text-purple-600 dark:text-purple-400 text-sm mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {achievement.event}
                </motion.p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
