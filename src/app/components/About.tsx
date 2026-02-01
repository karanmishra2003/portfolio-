"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const highlights = [
    {
      icon: "🤖",
      title: "AI & LLM Expert",
      desc: "Building intelligent systems with GPT-4, LangChain, and vector databases",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30"
    },
    {
      icon: "🧩",
      title: "Full Stack Developer",
      desc: "End-to-end development with React, FastAPI, and cloud technologies",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      desc: "Extracting insights from data using SQL, MongoDB, and visualization tools",
      color: "from-green-500/20 to-emerald-500/20 border-green-500/30"
    },
    {
      icon: "🚀",
      title: "Problem Solver",
      desc: "Tackling complex challenges with elegant, scalable solutions",
      color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" 
      />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
          whileInView={{ scale: [1, 1.02, 1] }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 text-center text-lg leading-relaxed mb-8"
          >
            I am an <motion.span 
              whileHover={{ scale: 1.05, color: "#a855f7" }}
              className="text-purple-400 font-semibold inline-block"
            >Information Technology undergraduate</motion.span> with a strong focus on <motion.span 
              whileHover={{ scale: 1.05, color: "#ec4899" }}
              className="text-pink-400 font-semibold inline-block"
            >AI-driven application development</motion.span>, 
            full-stack engineering, and <motion.span 
              whileHover={{ scale: 1.05, color: "#06b6d4" }}
              className="text-cyan-400 font-semibold inline-block"
            >data analytics</motion.span>. I enjoy building scalable, production-ready systems using technologies like 
            <motion.span 
              whileHover={{ scale: 1.05, color: "#eab308" }}
              className="text-yellow-400 font-semibold inline-block mx-1"
            >Python</motion.span>, 
            <motion.span 
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
              className="text-blue-400 font-semibold inline-block"
            >React</motion.span>, and modern large language models with hands-on experience in containerization and cloud-native deployment.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-center text-lg leading-relaxed mb-8"
          >
            I have industry exposure as a <motion.span 
              whileHover={{ scale: 1.05, color: "#22c55e" }}
              className="text-green-400 font-semibold inline-block"
            >Data Analyst Intern at KBR</motion.span>, where I delivered data-driven solutions that improved 
            operational efficiency. Passionate about <motion.span 
              whileHover={{ scale: 1.05, color: "#f97316" }}
              className="text-orange-400 font-semibold inline-block"
            >Generative AI</motion.span>, 
            <motion.span 
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              className="text-violet-400 font-semibold inline-block mx-1"
            >LLMOps</motion.span>, and real-world problem solving, I actively work on 
            projects that combine intelligent systems with clean architecture and impactful user experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-br ${item.color} backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group cursor-pointer`}
            >
              <motion.div 
                className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">{item.desc}</p>
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
