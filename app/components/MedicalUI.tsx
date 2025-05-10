import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type PulseWrapperProps = {
  children: ReactNode;
  scale?: number;
  duration?: number;
};

export const PulseWrapper: React.FC<PulseWrapperProps> = ({ 
  children, 
  scale = 1.2, 
  duration = 1.5 
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
        opacity: [1, 0.7, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}; 