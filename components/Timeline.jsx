"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    id: 1,
    title: "28 June 2024 ❤️",
    description:
      "The day it all started… a normal meeting that became something unforgettable.",
    image: "/pihu_image.jpeg",
  },
  {
    id: 2,
    title: "July – Late Night Talks 🌙",
    description:
      "That night we talked till 4 AM… and everything started changing.",
    image: "/pihu.jpeg",
  },
  {
    id: 3,
    title: "Trips & Memories 🏔️",
    description:
      "Mussoorie, Paonta Sahib, FRI… every place became special with you.",
    image: "/pihu3.jpeg",
  },
  {
    id: 4,
    title: "Dhanolti Trip 🌄",
    description:
      "One of the most peaceful and beautiful moments… just you, me, and nature ❤️",
    image: "/pihu4.jpeg",
  },
  {
    id: 5,
    title: "10 May – Letters 💌",
    description:
      "The first time we expressed everything through letters… unforgettable.",
    image: "/pihu5.jpeg",
  },
  {
    id: 6,
    title: "14 July 😄",
    description: "I thought it was random… but madam ji ka pura plan tha 😂",
    image: "/pihu_image.jpeg",
  },
  {
    id: 7,
    title: "29 August 2025 ❤️",
    description: "The day I truly expressed my feelings… everything changed.",
    image: "/pihu.jpeg",
  },
];

export default function Timeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="Timeline" className="relative py-24 px-4 text-white">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold">Our Journey ❤️</h2>
        <p className="text-gray-400 mt-3">
          Every moment, every memory, every feeling…
        </p>
      </div>

      {/* Timeline Container */}
      <div ref={ref} className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <motion.div
          style={{ height }}
          className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-gradient-to-b via-white"
        />
        <motion.div
          style={{ top: height }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
        />
        {/* Timeline Items */}
        <div className="space-y-20">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group flex flex-col md:flex-row items-center gap-20 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
              }}
            >
              {/* Image */}
              <div className="flex-1 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left max-w-md">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
