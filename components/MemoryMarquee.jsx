"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MemoryMarquee() {
  const [stopScroll, setStopScroll] = useState(false);

  const cardData = [
    {
      title: "Our First Meeting ❤️",
      image: "/pihu_image.jpeg",
    },
    {
      title: "Late Night Talks 🌙",
      image: "/pihu.jpeg",
    },
    {
      title: "Dhanolti Trip 🏔️",
      image: "/pihu4.jpeg",
    },
    {
      title: "Letters 💌",
      image: "/pihu5.jpeg",
    },
    {
      title: "That Cute Planned Day 😄",
      image: "/pihu_image.jpeg",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Moments That Matter ❤️
        </h2>
      </div>

      <style>
        {`
          .marquee-inner {
            animation: marqueeScroll linear infinite;
          }

          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div
        className="overflow-hidden w-full relative max-w-6xl mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent" />

        {/* Scroll */}
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 3000 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(card)}
                className="w-52 mx-4 h-[18rem] relative group rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={card.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 backdrop-blur-md bg-black/40">
                  <p className="text-white text-sm font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent" />
      </div>
      {/* 🔥 MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.image}
            alt="preview"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
