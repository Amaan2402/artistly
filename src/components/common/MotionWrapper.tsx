"use client";

import { motion } from "framer-motion";

export function MotionFadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }} // cubic-bezier
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
