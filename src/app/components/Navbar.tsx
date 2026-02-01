"use client";
import React, { useState, useEffect } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter, FaSun, FaMoon } from "react-icons/fa6";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/karanmishra2003", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/karan-mishra-4374762a0/", color: "hover:text-blue-700 dark:hover:text-blue-400" },
    { icon: <FaWhatsapp />, href: "https://wa.me/9315635453", color: "hover:text-green-700 dark:hover:text-green-400" },
    { icon: <FaSquareXTwitter />, href: "https://x.com/KARAN_MISHRA_14", color: "hover:text-gray-900 dark:hover:text-white" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              KM
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors text-sm font-medium relative group"
                    >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-4"
          >
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-yellow-500 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </motion.button>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`text-gray-700 dark:text-gray-400 transition-colors ${social.color}`}
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 dark:text-white text-2xl focus:outline-none"
            >
              {menuOpen ? <FiX /> : <FiAlignJustify />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <div className="flex items-center gap-6 pt-4">
                <motion.button
                  onClick={() => {
                    toggleTheme();
                    setMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-yellow-500 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
                </motion.button>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className={`text-gray-700 dark:text-gray-400 transition-colors ${social.color.replace('hover:text-white', 'hover:text-gray-900')}`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
