"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-white/6 border-t border-white/6 pt-10 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center md:flex-row items-center md:items-start justify-between gap-10 py-10 border-b border-white/10 text-center md:text-left">
          <div>
            <img src="/logo.png" alt="logo" className="h-15" />
            <p className="max-w-[410px] mt-6 text-lg leading-relaxed">
              This is not just a website… it’s a collection of our memories,
              moments, and everything I feel for you ❤️
            </p>
          </div>
        </div>

        <motion.p
          className="py-4 text-center text-xl text-gray-400 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Made with{" "}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-pink-400"
          >
            ❤️
          </motion.span>{" "}
          by Chiku, for Pihu 💖
        </motion.p>
      </div>
    </motion.footer>
  );
}
