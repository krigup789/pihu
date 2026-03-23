"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const galleryData = [
  {
    id: 1,
    image: "/pihu_image.jpeg",
    caption: "Our first memory ❤️",
    date: "June 2024",
  },
  {
    id: 2,
    image: "/pihu.jpeg",
    caption: "Late night talks 🌙",
    date: "July 2024",
  },
  {
    id: 3,
    image: "/pihu3.jpeg",
    caption: "Beautiful moments together 💖",
    date: "August 2024",
  },
  {
    id: 4,
    image: "/pihu4.jpeg",
    caption: "Dhanolti trip 🏔️",
    date: "April 2025",
  },
  {
    id: 5,
    image: "/pihu5.jpeg",
    caption: "Letters 💌",
    date: "10 May 2025",
  },
  {
    id: 6,
    image: "/pihu_image.jpeg",
    caption: "That cute planned day 😄",
    date: "14 July 2025",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="Gallery" className="py-24 px-4 text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Our Memories 📸</h2>
        <p className="text-gray-400 mt-2">
          Moments we lived, memories we created ❤️
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {galleryData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-300">{item.caption}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.image}
            alt="preview"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
