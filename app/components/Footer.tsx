"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  // Enhanced animation variants with better easing
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother motion
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  // New hover animation for social icons
  const socialIconHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.15, 
      y: -4,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Additional animations for decorative elements
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.7, 0.5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden py-14">
      {/* Enhanced gradient line with animation */}
      <motion.div 
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"
      />
      
      {/* Enhanced background pattern with animations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-10 left-10 w-48 h-48 rounded-full border-2 border-medical"
        />
        <motion.div 
          variants={pulseAnimation}
          initial="initial"
          animate="animate"
          className="absolute bottom-20 right-20 w-72 h-72 rounded-full border-2 border-herbal"
        />
        <motion.div 
          animate={{ 
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-40 right-40 w-24 h-24 rounded-full border-2 border-accent"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* Company Info - Enhanced */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <h3 className="text-2xl font-bold mb-5 relative inline-block font-display tracking-wide">
              Adhiron Group
              <motion.span 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
              />
            </h3>
            <p className="text-gray-200 mb-5 font-light leading-relaxed text-base">
              Your trusted partner in healthcare, providing premium herbaceutical and nutraceutical 
              products for humans and animals since 2019.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  variants={socialIconHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  href={social.href} 
                  className="text-gray-200 hover:text-primary transition-all duration-300 bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full shadow-lg hover:shadow-primary/20"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <h3 className="text-2xl font-bold mb-5 relative inline-block font-display tracking-wide">
              Quick Links
              <motion.span 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
              />
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-200 hover:text-primary transition-all duration-300 flex items-center group text-base"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-3 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products - Enhanced */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <h3 className="text-2xl font-bold mb-5 relative inline-block font-display tracking-wide">
              Products
              <motion.span 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
              />
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/products/herbal-extracts-manufacturer", label: "Herbal Extracts Ingredients" },
                { href: "/products/nutraceutical-ingredients-supplier", label: "Nutraceutical Ingredients" },
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index + 0.3, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-200 hover:text-primary transition-all duration-300 flex items-center group text-base"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-3 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Enhanced */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <h3 className="text-2xl font-bold mb-5 relative inline-block font-display tracking-wide">
              Contact Us
              <motion.span 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
              />
            </h3>
            <ul className="space-y-4">
                {[
                  {
                    icon: <MapPin size={18} />,
                    content: "156, Bahadarpur,Selaqui,Dehradun-248197,Uttrakhand",
                    delay: 0.1
                  },
                  {
                    icon: <Phone size={18} />,
                    content: "+91 87911 40933",
                    delay: 0.2
                  },
                  {
                    icon: <Phone size={18} />,
                    content: "+91 95572 13436",
                    delay: 0.25
                  },
                  {
                    icon: <Mail size={18} />,
                    content: "Pratik@adhiron.com",
                    delay: 0.3
                  },
                  {
                    icon: <Mail size={18} />,
                    content: "Shradha@adhiron.com",
                    delay: 0.35
                  }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-primary/20 p-2.5 rounded-full text-medical mt-0.5 flex-shrink-0 group-hover:bg-primary/40 transition-colors"
                  >
                    {item.icon}
                  </motion.span>
                  <span className="text-gray-200 leading-relaxed text-base font-light">
                    {item.content}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom section - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-10 text-center"
        >
          <p className="flex items-center justify-center text-gray-300 text-base">
            © {new Date().getFullYear()} Adhiron Group. All rights reserved. Made with 
            <motion.span 
              animate={{ 
                scale: [1, 1.3, 1],
                color: ["#f56565", "#e53e3e", "#f56565"]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="mx-2 text-herbal"
            >
              <Heart size={16} fill="currentColor" />
            </motion.span>
            for better health
          </p>
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;