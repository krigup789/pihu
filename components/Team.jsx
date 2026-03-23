"use client";

import { motion } from "framer-motion";

const teamData = [
  {
    id: 1,
    name: "Me 😎",
    role: "The one who fell for you ❤️",
    image: "/pihu3.jpeg",
  },
  {
    id: 2,
    name: "Pihu 💖",
    role: "The most special person in my life",
    image: "/pihu4.jpeg",
  },
  {
    id: 3,
    name: "Us Together ❤️",
    role: "A story still being written…",
    image: "/pihu5.jpeg",
  },
];

export default function Team() {
  return (
    <section
      id="Team"
      className="py-24 px-4 text-white border-pink-400 shadow-[0_0_25px_rgba(255,105,180,0.5)] rounded-xl"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Us 👥</h2>
        <p className="text-gray-400 mt-2">
          Not just two people… a whole story ❤️
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((person, index) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-center ${
              person.id === 3 ? "shadow-pink-500/30" : ""
            }`}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{person.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
