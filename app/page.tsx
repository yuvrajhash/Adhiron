"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, HeartPulse, Mail, Leaf, Factory, TestTube2, Tags } from "lucide-react";

export default function Home() {
  // --- Animation Variants ---
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };
  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const staggerSlow = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } }
  };
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: ["-8px", "8px", "-8px"],
      transition: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
    }
  };
  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
    }
  };

  // --- Services Data for ServicesHero Section ---
  const services = [
    {
      title: "Sourcing & Supply of Raw Materials",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      description: "High-purity herbal extracts, powders, and nutraceutical ingredients derived from nature under stringent quality control."
    },
    {
      title: "Private Labeling & Branding Solutions",
      icon: <Tags className="w-6 h-6 text-blue-600" />,
      description: "Complete brand building support from product development to market positioning tailored to your brand's identity."
    },
    {
      title: "Product Manufacturing",
      icon: <Factory className="w-6 h-6 text-orange-600" />,
      description: "Custom formulations including capsules, tablets, powders and topical applications manufactured in GMP-certified facilities."
    },
    {
      title: "Quality & Regulatory Compliance",
      icon: <TestTube2 className="w-6 h-6 text-purple-600" />,
      description: "Rigorous testing adhering to AYUSH, FSSAI and WHO-GMP standards."
    }
  ];

  return (
    <div className="overflow-hidden font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main2.jpg"
            alt="laboratory"
            fill
            className="object-cover brightness-[0.65] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70"></div>
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"
            initial="initial"
            animate="animate"
            variants={pulseAnimation}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-indigo-500/30 blur-3xl"
            initial="initial"
            animate="animate"
            variants={pulseAnimation}
          ></motion.div>
          {/* DNA Helix Animation */}
          <div className="absolute left-10 top-1/4 bottom-1/4 w-16 opacity-30">
            <motion.div
              className="absolute top-0 w-4 h-4 rounded-full bg-blue-400"
              initial={{ y: 0 }}
              animate={{ y: [0, 200, 400, 600, 400, 200, 0], x: [0, 8, 0, 8, 0, 8, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-0 w-3 h-3 rounded-full bg-purple-400"
              initial={{ y: 150 }}
              animate={{ y: [150, 350, 550, 350, 150, -50, 150], x: [8, 0, 8, 0, 8, 0, 8] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-0 w-2 h-2 rounded-full bg-indigo-400"
              initial={{ y: 300 }}
              animate={{ y: [300, 500, 300, 100, -100, 100, 300], x: [0, 8, 0, 8, 0, 8, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
          {/* Floating Medical Icons */}
          <motion.div
            className="absolute top-20 right-20 text-white/30"
            initial="initial"
            animate="animate"
            variants={floatAnimation}
          >
            <HeartPulse size={48} />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-40 text-white/30"
            initial="initial"
            animate="animate"
            variants={floatAnimation}
            style={{ animationDelay: "1s" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19.25 4.75H4.75V19.25H19.25V4.75Z" />
              <path d="M9.75 8.75V15.25" />
              <path d="M14.25 8.75V15.25" />
              <path d="M7.75 12H16.25" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute top-40 right-1/3 text-white/30"
            initial="initial"
            animate="animate"
            variants={floatAnimation}
            style={{ animationDelay: "2s" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="7" />
              <path d="M12 9V15" />
              <path d="M9 12H15" />
            </svg>
          </motion.div>
        </div>
        <div className="container mx-auto px-6 z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-5 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-base font-semibold tracking-wide"
            >
              Pure Ingredients Powerful Results
            </motion.span>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-shadow-sm"
            >
              <span className="text-green-500">Rooted In Nature,</span> <br />
              Growing With <span className="relative inline-block">You
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1.2 }}
                  className="absolute -bottom-2 left-0 h-1 bg-blue-400 rounded-full opacity-80"
                />
              </span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
              }}
              className="text-xl md:text-2xl mb-8 max-w-xl text-white leading-relaxed font-light"
            >
              Pioneering healthcare solutions with cutting-edge research, natural ingredients, and scientific innovation.
            </motion.p>
            {/* Medical Icons Row */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
              }}
              className="flex flex-wrap gap-6 mb-12"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-base font-medium">Clinically Tested</span>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-base font-medium">Advanced Formulas</span>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                  </svg>
                </div>
                <span className="text-base font-medium">Natural Ingredients</span>
              </motion.div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }
              }}
              className="flex flex-wrap gap-5"
            >
              <Link
                href="/products/herbal-extracts-manufacturer"
                className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition-all border border-white/30 hover:translate-y-[-5px] shadow-lg relative overflow-hidden group text-base"
              >
                <span>Herbal Extracts Ingredients</span>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
              <Link
                href="/products/nutraceutical-ingredients-supplier"
                className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition-all border border-white/30 hover:translate-y-[-5px] shadow-lg relative overflow-hidden group text-base"
              >
                <span className="relative z-10">Nutraceutical Ingredients</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-700"></div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute -right-2 -top-2 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
                />
              </Link>
            </motion.div>
            {/* Medical-themed scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <span className="text-base text-white mb-3 font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-8 h-12 rounded-full border-2 border-white/40 flex items-center justify-center"
              >
                <motion.div
                  animate={{ height: ["20%", "40%", "20%"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 bg-white/80 rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fabio-oyXis2kALVg-unsplash.jpg"
            alt="Manufacturing Facility"
            fill
            className="object-cover opacity-20"
            priority
          />
         <div className="absolute inset-0 bg-white" />
        </div>
        {/* Content Container */}
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content Section */}
              <div className="space-y-8">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Solutions That<br />
                    <span className="text-green-600">We Deliver</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    End-to-end services across the herbaceutical and nutraceutical value chain
                  </p>
                </motion.div>
                {/* Services List */}
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="group p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Featured Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
              >
                <Image
                  src="/images/dna-163466_1920.jpg"
                  alt="Quality Control Process"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">GMP Certified Facilities</h3>
                    <p className="opacity-90">State-of-the-art manufacturing infrastructure meeting global standards</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Medical & Herbal Features Section with Improved Typography */}
      <section className="py-28 relative overflow-hidden">
        {/* Medical-themed background with better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 to-white"></div>
        
        {/* Animated molecular structure */}
        <div className="absolute left-0 top-0 w-full h-full opacity-15 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-[20%] w-4 h-4 rounded-full bg-blue-500"
            animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-40 left-[25%] w-3 h-3 rounded-full bg-indigo-500"
            animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute top-60 left-[15%] w-5 h-5 rounded-full bg-purple-500"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Right side molecules */}
          <motion.div 
            className="absolute top-30 right-[20%] w-4 h-4 rounded-full bg-teal-500"
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />
          <motion.div 
            className="absolute top-50 right-[25%] w-3 h-3 rounded-full bg-green-500"
            animate={{ y: [0, 12, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
          
          {/* Connecting lines with improved visibility */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.line 
              x1="20%" y1="20" x2="25%" y2="40"
              stroke="#818cf8" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            />
            <motion.line 
              x1="25%" y1="40" x2="15%" y2="60"
              stroke="#818cf8" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.5 }}
            />
            <motion.line 
              x1="80%" y1="30" x2="75%" y2="50"
              stroke="#4ade80" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.7 }}
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerSlow}
        className="text-center mb-20"
      >
        <div className="flex justify-center mb-5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-800 text-base font-semibold tracking-wide"
          >
            Advanced Healthcare Solutions
          </motion.span>
        </div>
        
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative inline-block tracking-tight"
        >
          Medical & Herbal <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Innovations</span>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full opacity-60"
          />
        </motion.h2>
        
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
          }}
          className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          Our solutions combine cutting-edge medical research with the healing power of natural ingredients, creating advanced formulations that promote optimal health and wellness.
        </motion.p>
      </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerSlow}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                  </svg>
                ),
                color: "green",
                title: "Natural Ingredients",
                description: "Our formulations harness the power of carefully selected natural herbs and botanicals with proven therapeutic benefits."
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19.25 4.75H4.75V19.25H19.25V4.75Z" />
                    <path d="M9.75 8.75V15.25" />
                    <path d="M14.25 8.75V15.25" />
                    <path d="M7.75 12H16.25" />
                  </svg>
                ),
                color: "blue",
                title: "Advanced Formulations",
                description: "Cutting-edge technology combined with scientific research to create highly effective medical solutions."
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="7" />
                    <path d="M12 9V15" />
                    <path d="M9 12H15" />
                  </svg>
                ),
                color: "indigo",
                title: "Holistic Wellness",
                description: "Our approach integrates traditional herbal wisdom with modern medical science for comprehensive health benefits."
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                ),
                color: "teal",
                title: "Quality Assurance",
                description: "All our formulations undergo rigorous clinical testing to ensure safety, efficacy, and optimal therapeutic outcomes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      delay: index * 0.15
                    }
                  }
                }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                className={`bg-gradient-to-br ${
                  feature.color === "green" ? "from-green-500 to-green-600" :
                  feature.color === "blue" ? "from-blue-500 to-blue-600" :
                  feature.color === "indigo" ? "from-indigo-500 to-indigo-600" :
                  "from-teal-500 to-teal-600"
                } p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group text-white`}
              >
                {/* Animated medical-themed background elements */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  whileHover={{ scale: 1.2, opacity: 0.8 }}
                  transition={{ duration: 0.8 }}
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white opacity-10"
                />
                
                {/* Medical-themed particle animations */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <motion.div 
                    animate={{ y: [0, -10, 0], x: [0, 5, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white"
                  />
                  <motion.div 
                    animate={{ y: [0, 10, 0], x: [0, -5, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", delay: 0.3 }}
                    className="absolute top-3/4 left-1/2 w-1.5 h-1.5 rounded-full bg-white"
                  />
                  <motion.div 
                    animate={{ y: [0, -15, 0], x: [0, -7, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "loop", delay: 0.7 }}
                    className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-white"
                  />
                </motion.div>
                
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center shadow-inner">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-white/90 text-base leading-relaxed">{feature.description}</p>
                
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '40px' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className="h-1 bg-white/40 rounded-full mt-5 mx-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
{/* Mission & Values Section */}
<section className="py-28 relative overflow-hidden">
  {/* Background with gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 to-white"></div>
  
  {/* Animated molecular structure */}
  <div className="absolute left-0 top-0 w-full h-full opacity-15 pointer-events-none">
    <motion.div 
      className="absolute top-40 left-[30%] w-4 h-4 rounded-full bg-green-500"
      animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute top-60 left-[35%] w-3 h-3 rounded-full bg-blue-500"
      animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div 
      className="absolute top-80 left-[25%] w-5 h-5 rounded-full bg-indigo-500"
      animate={{ y: [0, 20, 0], opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    
    {/* Right side molecules */}
    <motion.div 
      className="absolute top-50 right-[30%] w-4 h-4 rounded-full bg-pink-500"
      animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
    />
    <motion.div 
      className="absolute top-70 right-[35%] w-3 h-3 rounded-full bg-yellow-500"
      animate={{ y: [0, 12, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
    />
    
    {/* Connecting lines */}
    <svg className="absolute inset-0 w-full h-full">
      <motion.line 
        x1="30%" y1="40" x2="35%" y2="60"
        stroke="#818cf8" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.line 
        x1="35%" y1="60" x2="25%" y2="80"
        stroke="#818cf8" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.5 }}
      />
      <motion.line 
        x1="70%" y1="50" x2="65%" y2="70"
        stroke="#ec4899" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 0.7 }}
      />
    </svg>
  </div>
  
  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerSlow}
      className="text-center mb-16"
    >
      <div className="flex justify-center mb-5">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-800 text-base font-semibold tracking-wide"
        >
          Our Foundation
        </motion.span>
      </div>
      
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative inline-block tracking-tight"
      >
        What Sets Us <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">Apart?</span>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-2 left-0 h-1 bg-green-500 rounded-full opacity-60"
        />
      </motion.h2>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerSlow}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {/* Indian Excellence */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 0 * 0.15
            }
          }
        }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
        className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group border border-gray-100 hover:border-green-100"
      >
        {/* Animated background elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.1 }}
          whileHover={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-green-100"
        />
        
        {/* Value content */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
              <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-800">Indian Excellence</h3>
          <p className="text-gray-600 leading-relaxed">Deeply rooted in India's herbal legacy with a forward-looking, globally scalable business model that combines tradition with innovation.</p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-green-500 rounded-full mt-5"
          />
        </div>
      </motion.div>

      {/* Vertical Integration */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 1 * 0.15
            }
          }
        }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
        className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group border border-gray-100 hover:border-blue-100"
      >
        {/* Animated background elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.1 }}
          whileHover={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-100"
        />
        
        {/* Value content */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7" />
              <path d="M18 4H6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4Z" />
              <path d="M6 14h1" />
              <path d="M9 14h6" /> 
              <path d="M17 14h1" />
              <path d="m9 18 3 3 3-3" />
              <path d="M12 8v13" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-800">Vertical Integration</h3>
          <p className="text-gray-600 leading-relaxed">Complete control from farm to formulation to final brand-ensuring consistency, quality, and unmatched speed-to-market.</p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-blue-500 rounded-full mt-5"
          />
        </div>
      </motion.div>

      {/* Science + Nature */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 2 * 0.15
            }
          }
        }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
        className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group border border-gray-100 hover:border-teal-100"
      >
        {/* Animated background elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.1 }}
          whileHover={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-teal-100"
        />
        
        {/* Value content */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6 text-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.5 2v.19A4 4 0 0 1 12 9h2a4 4 0 0 1 4 4c0 .52-.1 1.02-.29 1.48" />
              <path d="M8 2h8" />
              <path d="M18 14a4 4 0 1 1-8 0" />
              <path d="M4 18.5l5-3v3l5-3" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-800">Science + Nature</h3>
          <p className="text-gray-600 leading-relaxed">Blending traditional knowledge with cutting-edge research to create truly effective formulations that harness the best of both worlds.</p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="h-1 bg-teal-500 rounded-full mt-5"
          />
        </div>
      </motion.div>

      {/* Custom Solutions */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 3 * 0.15
            }
          }
        }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
        className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group border border-gray-100 hover:border-pink-100"
      >
        {/* Animated background elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.1 }}
          whileHover={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-pink-100"
        />
        
        {/* Value content */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6 text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M9 15.5v-7l7 7V8.5" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-800">Custom Solutions</h3>
          <p className="text-gray-600 leading-relaxed">Whether you're an entrepreneur, established brand, or wellness startup-we cater to your exact product and branding needs.</p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-pink-500 rounded-full mt-5"
          />
        </div>
      </motion.div>

      {/* Competitive Pricing */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 4 * 0.15
            }
          }
        }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
        className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group border border-gray-100 hover:border-yellow-100"
      >
        {/* Animated background elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.1 }}
          whileHover={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-100"
        />
        
        {/* Value content */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6 text-yellow-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m16 6 4 14" />
              <path d="M12 6v14" />
              <path d="M8 8v12" />
              <path d="M4 4v16" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-800">Competitive Pricing</h3>
          <p className="text-gray-600 leading-relaxed">Top-quality products at competitive prices, made possible through our efficient vertical integration and manufacturing expertise.</p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="h-1 bg-yellow-500 rounded-full mt-5"
          />
        </div>
      </motion.div>

      {/* Global Reach */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 5 * 0.15
            }
          }
        }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
        className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group border border-gray-100 hover:border-indigo-100"
      >
        {/* Animated background elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.1 }}
          whileHover={{ scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-indigo-100"
        />
        
        {/* Value content */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-800">Global Reach</h3>
          <p className="text-gray-600 leading-relaxed">While rooted in Indian traditions, our solutions are designed to meet international standards and appeal to global markets.</p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="h-1 bg-indigo-500 rounded-full mt-5"
          />
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
     

  
      {/* Section removed */}

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn} 
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-heading">Ready to Partner with Us?</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 font-body">
              Contact our team today to discuss your needs or learn more about our products and services.
            </p>
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              Get In Touch
              <Mail size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}