"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Kellogg Brown & Root (KBR)",
      duration: "July 2024 – September 2024",
      description: [
        "Designed and developed an interactive Complaint Management Dashboard using Power BI and Excel, reducing complaint resolution time by 20% through automated insights",
        "Managed, analyzed, and visualized large datasets to support data-driven business decisions for internal stakeholders",
        "Redesigned chat file formats and implemented backward compatibility, improving reliability and efficiency of search functionality",
        "Collaborated with cross-functional teams to ensure accurate data reporting and operational improvements"
      ],
      technologies: ["Power BI", "Excel", "SQL", "Data Visualization", "Data Analytics"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-24 px-4 relative bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent dark:via-purple-900/10" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-pink-600/20 dark:bg-pink-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/20 dark:bg-cyan-600/30 rounded-full blur-3xl animate-pulse" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 text-transparent bg-clip-text dark:from-pink-400 dark:via-purple-400 dark:to-cyan-400"
          whileInView={{ scale: [1, 1.05, 1] }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          My professional journey and industry exposure
        </motion.p>

        <div className="relative">
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 md:left-1/2 md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ originY: 0 }}
          />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-16 md:pl-0 md:flex md:justify-center mb-8"
            >
              <div className="md:w-3/4">
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
                  }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="text-3xl text-purple-600 dark:text-purple-400"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <FaBriefcase />
                    </motion.span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  </motion.div>
                  <motion.div 
                    className="flex flex-wrap items-center gap-3 mb-6 text-gray-600 dark:text-gray-400"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.span 
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      whileHover={{ color: "#9333ea" }}
                    >
                      {exp.company}
                    </motion.span>
                    <motion.span 
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCalendarAlt />
                      <span className="text-base">{exp.duration}</span>
                    </motion.span>
                  </motion.div>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((desc, i) => (
                      <motion.li 
                        key={i} 
                        className="text-gray-700 dark:text-gray-300 text-lg flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.span 
                          className="text-purple-600 dark:text-purple-400 mt-1 text-xl"
                          whileHover={{ scale: 1.5, color: "#ec4899" }}
                        >
                          •
                        </motion.span>
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full text-sm border border-purple-200 dark:border-purple-500/30 cursor-default hover:bg-purple-200 dark:hover:bg-purple-500/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.div
                className="absolute left-6 top-8 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-900 z-10"
                whileHover={{ scale: 1.5 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
