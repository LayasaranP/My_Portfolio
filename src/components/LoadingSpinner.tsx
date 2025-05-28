
import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full mx-auto mb-4"
        />
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Loading Portfolio...
        </motion.h2>
        
        <motion.div
          animate={{ width: ['0%', '100%', '0%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mt-4 rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
