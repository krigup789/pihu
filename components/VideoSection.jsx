"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

const videoData = [
  {
    id: 1,
    thumbnail: "/pihu3.jpeg",
    video: "/video2.mp4",
    title: "Our First Video ❤️",
  },
  {
    id: 2,
    thumbnail: "/pihu4.jpeg",
    video: "/video2.mp4",
    title: "Cute Moments Together 😄",
  },
  {
    id: 3,
    thumbnail: "/pihu5.jpeg",
    video: "/video2.mp4",
    title: "Trips & Memories 🏔️",
  },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔥 NEW: open video + pause music
  const handleOpenVideo = (item) => {
    setSelectedVideo(item);

    const music = document.getElementById("bg-music");
    if (music) {
      music.pause();
    }
  };

  // 🔥 NEW: close video + resume music
  const handleCloseVideo = () => {
    setSelectedVideo(null);

    const music = document.getElementById("bg-music");
    if (music) {
      music.play().catch(() => {});
    }
  };

  return (
    <section
      id="Video"
      className="py-24 px-4 text-white hover:shadow-[0_0_30px_rgba(255,105,180,0.4)] transition-shadow duration-300 rounded-xl"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Our Moments 🎥</h2>
        <p className="text-gray-400 mt-2">
          Some memories are better in motion ❤️
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {videoData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer rounded-xl overflow-hidden"
            onClick={() => handleOpenVideo(item)}
          >
            {/* Thumbnail */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Play className="text-white size-10 opacity-80 group-hover:scale-125 transition" />
            </div>

            {/* Title */}
            <div className="absolute bottom-3 left-3 text-sm text-white">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"
            onClick={handleCloseVideo}
          >
            <X size={20} />
          </button>

          {/* Video */}
          <motion.video
            src={selectedVideo.video}
            controls
            autoPlay
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
