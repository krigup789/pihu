"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const videoData = [
  {
    id: 2,
    title: "Before Relationship 😄",
    videos: ["/tapasya.mp4", "/dhanolti.mp4", "/gift.mp4", "/birthday.mp4"],
    thumbnails: [
      "/pihu_image.jpeg",
      "/pihu2.jpeg",
      "/pihu.jpeg",
      "/pihu4.jpeg",
    ],
  },
  {
    id: 1,
    title: "My Sweetheart ❤️",
    videos: ["/killer.mp4", "/saree.mp4", "/oct.mp4"],
    thumbnails: ["/killer6.jpeg", "/saree4.jpeg", "/killer.jpeg"],
  },
  {
    id: 3,
    title: "My Pihu 🥰",
    videos: ["/my_pihu.mp4", "/music_video.mp4", "/mela.mp4"],
    thumbnails: ["/pihu_image.jpeg", "/10_may.jpeg", "/killer4.jpeg"],
  },
  {
    id: 4,
    title: "videocalls and date🥰",
    videos: ["/date.mp4", "/videocall.mp4", "/videocall2.mp4"],
    thumbnails: ["/photoshoot4.jpeg", "/good4.jpeg", "/good3.jpeg"],
  },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 🎬 OPEN MODAL
  const handleOpenVideo = (item, index = 0) => {
    setSelectedVideo(item);
    setSelectedIndex(index);

    const music = document.getElementById("bg-music");

    if (music) {
      music.pause();
    }
  };

  // ❌ CLOSE MODAL
  const handleCloseVideo = () => {
    setSelectedVideo(null);

    const music = document.getElementById("bg-music");

    if (music) {
      music.play().catch(() => {});
    }
  };

  // ⬅➡ NAVIGATION
  const nextVideo = () => {
    setSelectedIndex((prev) => (prev + 1) % selectedVideo.videos.length);
  };

  const prevVideo = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? selectedVideo.videos.length - 1 : prev - 1,
    );
  };

  return (
    <section
      id="Video"
      className="py-24 px-4 text-white relative z-10"
      onTouchStart={() => window.restoreMainMusic?.()}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          Our Moments
        </h2>

        <p className="text-gray-400 mt-3">
          Some memories are better in motion ❤️
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videoData.map((item, cardIndex) => (
          <VideoCard key={item.id} item={item} onOpen={handleOpenVideo} />
        ))}
      </div>

      {/* 🎬 MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={handleCloseVideo}
        >
          {/* CLOSE */}
          <button
            onClick={handleCloseVideo}
            className="absolute top-5 right-5 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full"
          >
            <X className="text-black" />
          </button>

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl w-full"
          >
            {/* VIDEO */}
            <video
              key={selectedIndex}
              src={selectedVideo.videos[selectedIndex]}
              controls
              autoPlay
              className="w-full max-h-[75vh] rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(124,58,237,0.5)]"
            />

            {/* ⬅ LEFT */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full"
            >
              <ChevronLeft className="text-white" />
            </button>

            {/* ➡ RIGHT */}
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full"
            >
              <ChevronRight className="text-white" />
            </button>

            {/* 🎞️ THUMBNAILS */}
            {/* <div className="flex gap-3 mt-5 overflow-x-auto pb-2">
              {selectedVideo.thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-28 h-20 object-cover rounded-xl cursor-pointer border-2 transition ${
                    selectedIndex === index
                      ? "border-purple-400 scale-105"
                      : "border-transparent opacity-70"
                  }`}
                />
              ))}
            </div> */}
          </motion.div>
        </div>
      )}
    </section>
  );
}

// 💖 VIDEO CARD
function VideoCard({ item, onOpen }) {
  const [current, setCurrent] = useState(0);

  // 🔁 AUTO THUMB SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % item.thumbnails.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [item.thumbnails.length]);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group cursor-pointer"
      onClick={() => onOpen(item, current)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_35px_rgba(124,58,237,0.25)]">
        {/* 🎞️ SLIDER */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-80"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {item.thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Play className="text-white size-12 opacity-90 group-hover:scale-125 transition duration-300" />
        </div>

        {/* TITLE */}
        <div className="absolute bottom-4 left-4 z-10">
          <p className="text-white font-medium">{item.title}</p>
        </div>
      </div>
    </motion.div>
  );
}
