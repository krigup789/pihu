"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const galleryData = [
  {
    id: 1,
    images: [
      "/killer6.jpeg",
      "/killer5.jpeg",
      "/killer4.jpeg",
      "/killer3.jpeg",
      "/killer2.jpeg",
      "/killer.jpeg",
    ],
    caption: "my pihu ❤️",
    date: "",
  },
  {
    id: 2,
    images: [
      "/saree.jpeg",
      "/saree2.jpeg",
      "/saree3.jpeg",
      "/saree4.jpeg",
      "/saree5.jpeg",
      // "/saree6.jpeg",
      // "/saree7.jpeg",
    ],
    caption: "pihu in saree 🌙",
    date: "July 2024",
  },
  {
    id: 3,
    images: [
      "/red.jpeg",
      "/red2.jpeg",
      "/red3.jpeg",
      "/red4.jpeg",
      "/red5.jpeg",
    ],
    caption: "my red queen 💖",
    date: "August 2024",
  },
  {
    id: 4,
    images: [
      "/photoshoot2.jpeg",
      // "/photoshoot7.jpeg",
      "/photoshoot3.jpeg",
      "/photoshoot4.jpeg",
      "/photoshoot5.jpeg",
      "/photoshoot6.jpeg",
      "/photoshoot.jpeg",
    ],
    caption: "Photoshoot vibes 📸",
    date: "April 2025",
  },
  {
    id: 5,
    images: [
      "/orange6.jpeg",
      // "/orange2.jpeg",
      // "/orange3.jpeg",
      // "/orange4.jpeg",
      "/orange5.jpeg",
      "/orange.jpeg",
      "/orange7.jpeg",
      "/orange9.jpeg",
    ],
    caption: "beautiful in orange 🍊",
    date: "10 May 2025",
  },
  {
    id: 6,
    images: [
      "/home2.jpeg",
      "/home.jpeg",
      "/home3.jpeg",
      "/home4.jpeg",
      "/home5.jpeg",
      "/home6.jpeg",
      "/home7.jpeg",
    ],
    caption: "Unoffical photos 📸",
    date: "14 July 2025",
  },
  {
    id: 7,
    images: [
      "/farewell2.jpeg",
      "/farewell.jpeg",
      // "/brown2.jpeg",
      // "/good.jpeg",
      // "/good3.jpeg",
      // "/good4.jpeg",
    ],
    caption: "Miss farewell 💖",
    date: "14 July 2025",
  },
  {
    id: 8,
    images: ["/pihu_image.jpeg", "/pihu.jpeg", "/pihu4.jpeg", "/pihu5.jpeg"],
    caption: "My sweetheart 💖",
    date: "14 July 2025",
  },
  {
    id: 9,
    images: ["/good.jpeg", "/good3.jpeg", "/good4.jpeg", "/good6.jpeg"],
    caption: "Miss pihu 💖",
    date: "14 July 2025",
  },
];

// 💖 CARD COMPONENT
function GalleryCard({
  item,
  index,
  activeCard,
  currentImage,
  setSelectedImage,
}) {
  const [manualIndex, setManualIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const current = activeCard === index ? currentImage : 0;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="cursor-pointer group"
      onClick={() =>
        setSelectedImage({
          images: item.images,
          currentIndex: current,
        })
      }
    >
      {/* 💎 CARD */}
      <div
        className="
          relative overflow-hidden rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_35px_rgba(124,58,237,0.25)]
          hover:shadow-[0_0_55px_rgba(168,85,247,0.45)]
          transition-all duration-500
        "
      >
        {/* ✨ Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

        {/* 🔥 Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-100 cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {item.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="
                w-full h-full object-cover shrink-0
                group-hover:scale-105 transition duration-700
              "
            />
          ))}
        </div>

        {/* 🌌 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* 💖 Caption */}
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <p className="text-sm md:text-base text-white font-medium">
            {item.caption}
          </p>
        </div>

        {/* ⚪ Dots */}
        <div className="absolute bottom-4 right-4 flex gap-1.5 z-20">
          {item.images.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-5 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ImageSliderModal({ selectedImage, setSelectedImage }) {
  const [current, setCurrent] = useState(selectedImage.currentIndex || 0);

  const images = selectedImage.images;

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ⌨️ keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % images.length);
      }

      if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }

      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, setSelectedImage]);

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/90 backdrop-blur-xl
        flex items-center justify-center
        p-4
      "
      onClick={() => setSelectedImage(null)}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative max-w-6xl w-96"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✨ Glow */}
        <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-3xl" />

        {/* 🖼️ Slider */}
        <div className="overflow-hidden rounded-3xl border border-white/10 relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="
                  w-96 max-h-[70vh]
                  object-cover shrink-0
                "
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const [activeCard, setActiveCard] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const nextImage = prev + 1;

        // ✅ if current card completed all images
        if (nextImage >= galleryData[activeCard].images.length) {
          setActiveCard((prevCard) => (prevCard + 1) % galleryData.length);

          return 0;
        }

        return nextImage;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [activeCard]);

  return (
    <section
      id="Gallery"
      className="py-28 px-4 text-white relative z-10"
      onMouseEnter={() => window.switchToInteractionMusic?.()}
      onMouseLeave={() => window.restoreMainMusic?.()}
      onTouchStart={() => window.switchToInteractionMusic?.()}
    >
      {/* 💖 Heading */}
      <div className="text-center mb-16">
        <h2
          className="
            text-3xl md:text-5xl font-bold
            bg-gradient-to-r from-white to-white/50
            bg-clip-text text-transparent
          "
        >
          My Pihuu Gallery
        </h2>

        <p className="text-gray-400 mt-3 text-xl md:text-base">
          photo's of my GF❤️
        </p>
      </div>

      {/* 🔥 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryData.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={index}
            activeCard={activeCard}
            currentImage={currentImage}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>

      {/* 🔥 PREMIUM MODAL */}
      {selectedImage && (
        <ImageSliderModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </section>
  );
}
