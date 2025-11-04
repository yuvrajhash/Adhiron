"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Leaf,
  FlaskConical,
  ShieldCheck,
  Globe2,
  Star,
  Microscope,
  Users,
  MessageCircle,
  Award,
  PhoneCall,
  Mail,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const FLOATING_COMPOUNDS = [
  "CoQ10",
  "Ashwagandha",
  "Curcumin",
  "D3",
  "Brahmi",
  "Magnesium",
  "Neem",
  "Glutathione",
  "Amla",
  "Tulsi",
];

// Sample testimonials data (replace or extend)
const testimonials = [
  {
    name: "Pratik",
    title: "Chief Pharmacologist",
    quote:
      "Adhiron consistently delivers high-quality, innovative ingredients that meet the strictest regulatory standards.",
    imageUrl: "https://source.unsplash.com/100x100/?woman,doctor",
  },
  {
    name: "Pratik",
    title: "Health Solutions Inc.",
    quote:
      "Our commitment to sustainability and quality assurance makes them a trusted partner in manufacturing.",
    imageUrl: "https://source.unsplash.com/100x100/?man,business",
  },
];

// Company story image placeholders (replace with your own)
const storyImages = [
  "https://source.unsplash.com/600x400/?laboratory,pharmaceutical",
  "https://source.unsplash.com/600x400/?team,work",
  "https://source.unsplash.com/600x400/?manufacturing,plant",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, type: "spring" },
  }),
};

export default function AboutPage() {
  const [compounds, setCompounds] = useState([]);
  
  useEffect(() => {
    document.body.style.fontFamily = "'Manrope', sans-serif";
    
    // Initialize compounds with window dimensions after component mounts
    setCompounds(
      FLOATING_COMPOUNDS.map((name) => ({
        name,
        style: {
          opacity: 0.12 + Math.random() * 0.2,
          x: Math.random() * window.innerWidth * 0.9,
          y: Math.random() * window.innerHeight * 0.8,
          scale: 0.9 + Math.random() * 0.8,
          rotate: Math.random() * 360,
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 80}%`,
          color: Math.random() > 0.5 ? "#2563eb33" : "#05966933",
        }
      }))
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-50 via-emerald-50 to-indigo-100 overflow-x-hidden font-sans pt-24 pb-16">
      {/* Floating Molecules Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {compounds.map((compound, i) => (
          <motion.div
            key={compound.name}
            initial={{
              opacity: compound.style.opacity,
              x: compound.style.x,
              y: compound.style.y,
              scale: compound.style.scale,
              rotate: compound.style.rotate,
            }}
            animate={{
              y: ["0%", "20%", "0%"],
              x: ["0%", "10%", "0%"],
              opacity: [
                0.12 + Math.random() * 0.9,
                0.3,
                0.12 + Math.random() * 0.9,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 8,
              ease: "linear",
            }}
            className="absolute select-none font-bold text-[1.2rem] md:text-2xl uppercase tracking-widest"
            style={{
              color: compound.style.color,
              left: compound.style.left,
              top: compound.style.top,
              filter: "blur(0.5px)",
            }}
          >
            {compound.name}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center max-w-4xl mx-auto px-4 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "-0.1em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-teal-600 to-green-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          About Adhiron Group
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-teal-900 text-xl mt-4 max-w-2xl mx-auto"
        >
          Pioneering Excellence in Herbal & Nutraceutical Science
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 1, duration: 1 }}
          className="mx-auto h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mt-6"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mt-8"
        >
          <ChevronDown size={32} className="text-blue-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 max-w-6xl space-y-24">

        {/* 1. Company Overview */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="bg-white/90 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <Leaf className="text-green-500" size={36} />
            Company Overview
          </h2>
          <p className="text-blue-900 text-lg leading-relaxed mb-4">
          With over six years of expertise, Adhiron Group is a vertically integrated herbaceutical and nutraceutical enterprise from India—rooted in tradition and powered by science. We specialize in natural ingredients, custom formulations, manufacturing, and branding, delivering safe, effective, and customizable wellness solutions for human and animal health across global markets, backed by full regulatory and quality compliance.            </p>
          <p className="text-blue-800 text-lg leading-relaxed">
            Our core focus is on innovation, quality, and sustainability, ensuring that our products meet global regulatory standards and improve health outcomes worldwide.
          </p>
        </motion.div>

        {/* 2. Mission, Vision & Values */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="grid md:grid-cols-3 gap-10"
        >
          <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-3xl shadow-lg p-8 flex flex-col items-center border border-blue-100">
            <FlaskConical className="text-blue-600 mb-3" size={40} />
            <h3 className="text-xl font-bold text-blue-800 mb-2">Mission</h3>
            <p className="text-blue-700 text-center text-lg">
            Our mission is to create the perfect synergy between science and nature, blending traditional knowledge with cutting-edge research for truly effective formulations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl shadow-lg p-8 flex flex-col items-center border border-green-100">
            <Globe2 className="text-green-600 mb-3" size={40} />
            <h3 className="text-xl font-bold text-green-800 mb-2">Vision</h3>
            <p className="text-green-700 text-center text-lg">
            To be the world's most trusted leader in herbaceutical and nutraceutical science, delivering natural, effective, and accessible wellness solutions that inspire healthier lives and global well-being.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 via-white to-red-50 rounded-3xl shadow-lg p-8 flex flex-col items-center border border-yellow-200">
            <Star className="text-yellow-500 mb-3" size={40} />
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Values</h3>
            <p className="text-yellow-700 text-center text-lg">
            Integrity, innovation, quality, sustainability, and patient-centricity guide everything we do. Through a vertically integrated approach, we deliver top-quality, affordable wellness solutions with care and responsibility.
            </p>
          </div>
        </motion.div>

        {/* 3. Company Storytelling */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="bg-white/90 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center gap-3">
            <Users className="text-teal-500" size={36} />
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-blue-900 text-lg leading-relaxed">
              <p>
              Adhiron Group began its journey in 2019 with a bold and purposeful vision—to bridge the ancient wisdom of Indian herbal medicine with the evolving demands of modern nutraceutical science. Drawing on the deep legacy of Ayurveda and the healing power of nature, we set out to create wellness solutions that are not only effective and safe, but also globally relevant. From the very beginning, our goal has been to deliver products that empower healthier lives—naturally.                </p>
              <p>
              Over the years, we have built a fully integrated ecosystem, offering everything from raw herbal materials to finished, branded consumer products. Our capabilities span custom formulation, private label manufacturing, branding, labeling, packaging, and regulatory compliance—making us a true one-stop solution for wellness businesses around the world. Our vertical integration enables us to maintain unmatched consistency, quality control, and speed-to-market, helping our clients stand out in a competitive global market.                </p>
              <p>Headquartered in Uttrakhand, India — where the science of life "Ayurveda" was born, Adhiron Group operates with a unique blend of traditional knowledge and cutting-edge technology. Our state-of-the-art manufacturing units and advanced R&D infrastructure are supported by a team of dedicated scientists, quality experts, and industry professionals, all united by a commitment to excellence. With a focus on global regulatory standards, we ensure every product meets the highest benchmarks for safety, efficacy, and compliance.</p>
              <p>Our reach today spans continents, yet our values remain grounded. We serve both the human wellness and animal health sectors with equal dedication, developing natural solutions tailored to diverse lifestyles and markets. What sets us apart is not only our expertise, but also our unwavering commitment to research, sustainability, and customer-centricity. Every step we take is guided by integrity and a deep respect for nature.</p>
              <p>As we look to the future, Adhiron Group continues to grow as a trusted partner in the global wellness revolution. We are proud to support brands and businesses in creating impactful products—while staying true to our mission: to make high-quality, science-backed herbal and nutraceutical solutions accessible worldwide. Rooted in tradition, powered by innovation—this is the spirit of Adhiron.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              '/images/logo22.jpg',
              '/images/mortar.webp',
              '/images/cap.jpg',
              '/images/logo2.jpg'
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Company history ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={index < 2} // Prioritize first two images
                />
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>

        {/* 4. Research, Innovation & Quality Assurance */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="bg-white/90 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
            <Microscope className="text-blue-500" size={36} />
            Research, Innovation & Quality Assurance
          </h2>
          <p className="text-blue-900 text-lg mb-4">
            Our cutting-edge R&D facilities and expert scientists drive innovation in herbal extraction, formulation, and delivery technologies. We prioritize:
          </p>
          <ul className="list-disc list-inside text-blue-800 space-y-2 text-lg">
            <li>Standardization and validation of herbal extracts</li>
            <li>Advanced delivery systems including liposomal and nano-encapsulation</li>
            <li>Compliance with global GMP and regulatory standards</li>
            <li>Comprehensive quality control and traceability</li>
            <li>Clinical safety and efficacy studies</li>
          </ul>
        </motion.div>

        {/* 7. Call to Action */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={7}
          className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl shadow-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Partner with Adhiron Group?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our product portfolio, custom formulations, and how we can support your manufacturing needs.
          </p>
          <a
            href="mailto:info@adhirongroup.com"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}
