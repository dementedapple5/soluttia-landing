import React from 'react';
import { motion } from 'framer-motion';

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative rounded-full px-8 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-950 group overflow-hidden bg-neutral-900 border border-neutral-800 ${className}`}
    >
      {/* Beam Container */}
      <div className="absolute inset-0 -top-[100%] left-[50%] h-[300%] w-[150%] -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
         <div className="animate-[spin_4s_linear_infinite] w-full h-full bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20" />
      </div>
      
      {/* Inner Mask to create the border effect */}
      <div className="absolute inset-[1px] rounded-full bg-neutral-950 z-0" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};