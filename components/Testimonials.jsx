"use client";

import { motion } from "framer-motion";

const lovePoints = [
  {
    id: 1,
    text: "Your mandh mandh muskaan 😊",
    sub: "It makes everything better",
  },
  {
    id: 2,
    text: "Your kindness 💖",
    sub: "You care in ways no one else does",
  },
  {
    id: 3,
    text: "Your laugh 😄",
    sub: "It’s my favorite sound",
  },
  {
    id: 4,
    text: "The way you understand me 🥹",
    sub: "Even when I don’t say anything",
  },
  {
    id: 5,
    text: "Your presence ❤️",
    sub: "Everything feels right when you’re around",
  },
  {
    id: 6,
    text: "Your Vloging ❤️",
    sub: "I love how you capture moments",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 text-white rounded-xl">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          What I Love About You 💬
        </h2>
        <p className="text-gray-400 mt-2">
          Little things… but they mean everything ❤️
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {lovePoints.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              stiffness: 120,
            }}
            className="bg-white/3 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center shadow-lg hover:shadow-pink-500/20 transition"
          >
            {/* Main text */}
            <h3 className="text-xl font-semibold mb-2">{item.text}</h3>

            {/* Sub text */}
            <p className="text-gray-400 text-sm">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
