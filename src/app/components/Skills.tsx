"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiFastapi, SiStreamlit, SiTailwindcss, SiMongodb, SiMysql, SiOpensearch, SiCplusplus } from "react-icons/si";
import { BsCpu } from "react-icons/bs";

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { icon: <FaPython />, name: "Python", color: "text-yellow-500", level: 95 },
        { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400", level: 90 },
        { icon: <SiCplusplus />, name: "C++", color: "text-blue-500", level: 85 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { icon: <FaReact />, name: "React.js", color: "text-blue-400", level: 90 },
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500", level: 85 },
        { icon: <SiFastapi />, name: "FastAPI", color: "text-teal-400", level: 88 },
        { icon: <SiStreamlit />, name: "Streamlit", color: "text-red-400", level: 85 },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400", level: 92 },
        { icon: <BsCpu />, name: "LangChain", color: "text-purple-400", level: 85 },
        { icon: <BsCpu />, name: "LangGraph", color: "text-pink-400", level: 82 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, name: "MySQL", color: "text-blue-500", level: 85 },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500", level: 88 },
        { icon: <SiOpensearch />, name: "OpenSearch", color: "text-amber-400", level: 80 },
        { icon: <FaDatabase />, name: "Vector DBs", color: "text-violet-400", level: 82 },
      ]
    },
    {
      title: "AI & LLM Tools",
      skills: [
        { icon: <BsCpu />, name: "OpenAI GPT-4", color: "text-emerald-400", level: 95 },
        { icon: <BsCpu />, name: "Google Gemini", color: "text-blue-400", level: 90 },
        { icon: <BsCpu />, name: "Groq", color: "text-orange-400", level: 88 },
        { icon: <BsCpu />, name: "Llama Models", color: "text-cyan-400", level: 85 },
        { icon: <BsCpu />, name: "Ollama", color: "text-purple-400", level: 82 },
        { icon: <BsCpu />, name: "DeepSeek", color: "text-red-400", level: 80 },
        { icon: <BsCpu />, name: "Pydantic", color: "text-yellow-400", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { icon: <FaDocker />, name: "Docker", color: "text-blue-400", level: 85 },
        { icon: <FaGitAlt />, name: "Git", color: "text-orange-500", level: 92 },
        { icon: <FaGithub />, name: "GitHub", color: "text-white", level: 90 },
        { icon: <BsCpu />, name: "GitOps", color: "text-cyan-400", level: 80 },
        { icon: <BsCpu />, name: "Power BI", color: "text-yellow-400", level: 78 },
        { icon: <BsCpu />, name: "SharePoint", color: "text-blue-300", level: 75 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* removed decorative empty circle per request */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent dark:via-blue-900/10" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-600/20 dark:bg-cyan-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
          whileInView={{ scale: [1, 1.05, 1] }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-400 text-center mb-14 max-w-2xl mx-auto"
        >
          A comprehensive overview of my technical skills and expertise in AI, full-stack development, and modern technologies
        </motion.p>

        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex} 
            variants={itemVariants}
            initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pl-2 border-l-4 border-purple-500 flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
              >
                {catIndex === 0 ? "💻" : catIndex === 1 ? "🛠️" : catIndex === 2 ? "🗄️" : catIndex === 3 ? "🤖" : "⚙️"}
              </motion.span>
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.05, zIndex: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative cursor-pointer"
                >
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-300"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <div className="relative flex flex-col items-center p-4 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-white dark:group-hover:bg-gray-900">
                    <motion.div 
                      className={`${skill.color} text-4xl mb-2`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="text-gray-900 dark:text-white font-medium text-sm group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">{skill.name}</span>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
