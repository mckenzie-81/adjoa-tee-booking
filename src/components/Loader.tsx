"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <h1 className="text-6xl font-light tracking-[0.3em] text-foreground">
          TEE
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mt-2 h-[1px] w-full bg-foreground origin-left"
        ></motion.div>
      </div>
    </motion.div>
  );
}