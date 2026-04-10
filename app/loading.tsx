"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Logo / Initial */}
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white text-lg">
          R
        </div>

        {/* Text */}
        <p className="text-gray-400 text-sm tracking-wide">
          Loading...
        </p>

        {/* Animated line */}
        <div className="w-24 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

    </div>
  );
}