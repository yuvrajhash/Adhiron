"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type MapSectionProps = {
  embedSrc: string;
  mapsLink: string;
  heightClass?: string;
  ariaLabel?: string;
};

const MapSection = ({ embedSrc, mapsLink, heightClass = "h-[400px]", ariaLabel = "Google Map" }: MapSectionProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`rounded-lg overflow-hidden shadow-lg relative ${heightClass}`}
    >
      <iframe
        title={ariaLabel}
        src={embedSrc}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>

      <div className="absolute top-3 right-3 z-10">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 hover:bg-white text-blue-700 font-medium px-4 py-2 rounded-md shadow border border-blue-100 transition"
        >
          Open in Google Maps
        </a>
      </div>
    </motion.div>
  );
};

export default MapSection;