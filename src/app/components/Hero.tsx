"use client";
import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="hero" className="min-h-screen pt-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10 min-h-screen flex items-center"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full">
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm mb-6"
            >
              Available for opportunities
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">Karan Mishra</span>
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 mb-6"
            >
              Information Technology Undergraduate | AI & Full Stack Developer
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-300 leading-relaxed mb-8 max-w-lg"
            >
              Information Technology undergraduate with hands-on experience in AI-driven application development, full-stack engineering, and data analytics. Skilled in building scalable systems using Python, React, FastAPI, and modern LLM frameworks.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row items-center gap-4'
            >
              <motion.a
                href="/KaranGenAInew.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/30"
              >
                <span>Download CV</span>
                <MdOutlineFileDownload className="ml-2 text-xl" />
              </motion.a>

              <div className='flex items-center gap-4 text-2xl'>
                <motion.a
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://github.com/karanmishra2003"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://www.linkedin.com/in/karan-mishra-4374762a0/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://wa.me/919315635453"
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -5 }}
                  href="https://x.com/KARAN_MISHRA_14"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaSquareXTwitter />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-2xl opacity-30"
              />
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <Image
                    src="/Profile.jpeg"
                    alt="Karan Mishra - AI & Full Stack Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  Open to Work
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-gray-500"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
