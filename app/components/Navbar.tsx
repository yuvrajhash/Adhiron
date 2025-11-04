"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartPulse, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Only Home and About Us here; Contact will be rendered last
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ];

  const contactLink = { name: "Contact", href: "/contact" };

  const productCategories = [
    { name: "Herbal Extracts Ingredients", href: "/products/herbal-extracts-manufacturer" },
    { name: "Nutraceutical Ingredients", href: "/products/nutraceutical-ingredients-supplier" },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * custom,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -2,
      color: "#2563eb",
      transition: { duration: 0.2 }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      height: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: {
      x: -10,
      opacity: 0,
      transition: { duration: 0.1 }
    },
    hover: {
      x: 5,
      color: "#2563eb",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-md'
      } transition-all duration-500`}
    >
      {/* Sparkle animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="sparkle-1 absolute w-1.5 h-1.5 rounded-full bg-blue-500 opacity-70 animate-pulse"></div>
        <div className="sparkle-2 absolute w-2 h-2 rounded-full bg-purple-500 opacity-60 animate-ping"></div>
        <div className="sparkle-3 absolute w-1.5 h-1.5 rounded-full bg-pink-500 opacity-70 animate-pulse"></div>
        <div className="sparkle-4 absolute w-2.5 h-2.5 rounded-full bg-indigo-500 opacity-50 animate-ping"></div>
        <div className="sparkle-5 absolute w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60 animate-pulse"></div>
        <div className="sparkle-6 absolute w-2 h-2 rounded-full bg-cyan-500 opacity-65 animate-ping"></div>
        <div className="sparkle-7 absolute w-1.5 h-1.5 rounded-full bg-violet-500 opacity-55 animate-pulse"></div>
      </div>

      {/* Gradient border at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>

      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center">
        {/* Logo/Brand */}
        <motion.div 
          variants={logoVariants}
          className="mr-auto"
        >
          <Link 
            href="/" 
            className="flex items-center"
          >
            <img
              src="/ecec9375-9d1d-4421-85d3-c46a07011759_removalai_preview.png"
              alt="Adhiron Logo"
              width={120}
              height={120}
              className="w-32 h-32 object-contain"
              style={{
                filter: 'contrast(1.05) brightness(1.02)'
              }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Home and About Us */}
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              variants={linkVariants}
              whileHover="hover"
            >
              <Link
                href={link.href}
                className="relative text-gray-700 font-medium text-base tracking-wide group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* Products Dropdown */}
          <motion.div
            custom={navLinks.length}
            variants={linkVariants}
            className="relative"
            onHoverStart={() => setProductsOpen(true)}
            onHoverEnd={() => setProductsOpen(false)}
          >
            <div className="flex items-center gap-1.5 text-gray-700 font-medium text-base tracking-wide cursor-pointer group">
              Products
              <motion.div
                animate={productsOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </div>

            {/* Products Dropdown Menu */}
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 md:left-1/2 transform md:-translate-x-1/2 mt-2 w-72 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl overflow-auto max-h-[70vh] z-50 border border-gray-100"
                >
                  <div className="grid grid-cols-1 divide-y divide-gray-100">
                    {productCategories.map((category) => (
                      <motion.div
                        key={category.name}
                        variants={dropdownItemVariants}
                        whileHover="hover"
                      >
                        <Link
                          href={category.href}
                          className="px-5 py-3.5 text-gray-700 transition-colors flex items-center gap-2 font-medium text-sm"
                        >
                          {category.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Link as Last Tab */}
          <motion.div
            custom={navLinks.length + 1}
            variants={linkVariants}
            whileHover="hover"
          >
            <Link
              href={contactLink.href}
              className="relative text-gray-700 font-medium text-base tracking-wide group"
            >
              {contactLink.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-primary-600 p-2"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg shadow-indigo-500/5"
          >
            <motion.div
              className="container mx-auto px-4 py-6 flex flex-col gap-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {/* Home and About Us */}
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors py-2.5 font-medium text-lg block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Products dropdown for mobile */}
              <motion.div
                className="border-t pt-3"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.2 }
                  }
                }}
              >
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors py-2.5 font-medium text-lg"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                >
                  Products
                  <motion.div
                    animate={mobileProductsOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          duration: 0.3,
                          staggerChildren: 0.05
                        }
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: { duration: 0.2 }
                      }}
                      className="pl-4 flex flex-col gap-2 mt-2"
                    >
                      {productCategories.map((category) => (
                        <motion.div
                          key={category.name}
                          variants={{
                            hidden: { x: -10, opacity: 0 },
                            visible: {
                              x: 0,
                              opacity: 1,
                              transition: { duration: 0.2 }
                            },
                            exit: {
                              x: -10,
                              opacity: 0,
                              transition: { duration: 0.1 }
                            }
                          }}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <Link
                            href={category.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors py-2 block font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            {category.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact as last tab */}
              <motion.div
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }
                }}
              >
                <Link
                  href={contactLink.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2.5 font-medium text-lg block"
                  onClick={() => setIsOpen(false)}
                >
                  {contactLink.name}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add custom CSS for sparkle animations */}
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(10%, 10%); }
          50% { transform: translate(13%, 15%); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(70%, 20%); }
          50% { transform: translate(75%, 25%); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(20%, 80%); }
          50% { transform: translate(25%, 85%); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(80%, 80%); }
          50% { transform: translate(85%, 75%); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(40%, 30%); }
          50% { transform: translate(45%, 35%); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translate(60%, 60%); }
          50% { transform: translate(65%, 55%); }
        }
        @keyframes float-7 {
          0%, 100% { transform: translate(30%, 50%); }
          50% { transform: translate(35%, 45%); }
        }

        .sparkle-1 {
          animation: float-1 4s ease-in-out infinite, pulse 2s ease-in-out infinite;
        }
        .sparkle-2 {
          animation: float-2 5s ease-in-out infinite, ping 3s ease-in-out infinite;
        }
        .sparkle-3 {
          animation: float-3 6s ease-in-out infinite, pulse 2.5s ease-in-out infinite;
        }
        .sparkle-4 {
          animation: float-4 7s ease-in-out infinite, ping 4s ease-in-out infinite;
        }
        .sparkle-5 {
          animation: float-5 5s ease-in-out infinite, pulse 3s ease-in-out infinite;
        }
        .sparkle-6 {
          animation: float-6 6s ease-in-out infinite, ping 2.5s ease-in-out infinite;
        }
        .sparkle-7 {
          animation: float-7 4.5s ease-in-out infinite, pulse 3s ease-in-out infinite;
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
