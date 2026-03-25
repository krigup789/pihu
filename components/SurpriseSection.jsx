"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const messages = [
  "Tum meri life ka best part ho ❤️",
  "Har din tumhare saath aur special lagta hai 💖",
  "Tum ho toh sab perfect lagta hai ✨",
  "Mujhe tumhari har choti baat pasand hai 😄",
  "Tum meri aadat nahi… zarurat ho ❤️",
  "I Love You My Lovely Sweetheart Pihuu ❤️",
];

export default function SurpriseSection() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
    setOpen(true);
  };

  return (
    <section className="py-24 px-4 text-white text-center">
      {/* Button */}
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.6)] text-white font-semibold"
      >
        Click only if you love me 😏
      </motion.button>

      {/* 💌 MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-[#1a1230] p-8 rounded-2xl max-w-md w-[90%] text-center relative shadow-[0_0_40px_rgba(124,58,237,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            {/* Message */}
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-gray-200 leading-relaxed"
            >
              {message}
            </motion.p>

            {/* ❤️ Glow Heart */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="text-3xl mt-6"
            >
              ❤️
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
