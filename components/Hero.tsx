import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const trustedUserImages = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
  ];

  const mainImageUrl =
    "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop";

  const galleryStripImages = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=100",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100",
  ];

  const trustedLogosText = [
    "Our First Meeting ❤️",
    "Beautiful Memories 📸",
    "Endless Conversations 💬",
    "Laughs & Smiles 😊",
    "Moments I’ll Never Forget 💖",
  ];

  const [current, setCurrent] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const images = [
    "/pihu_image.jpeg",
    "/pihu.jpeg",
    "/pihu3.jpeg",
    "/pihu4.jpeg",
    "/pihu5.jpeg",
  ];

  // 🔁 Auto slide every 1 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    setBgIndex(current);
  }, [current, hasStarted]);

  return (
    <>
      <section id="home" className="relative z-10 min-h-screen overflow-hidden">
        {/* 🔥 Dynamic Background */}
        <div className="absolute inset-0 z-0">
          {hasStarted &&
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                  bgIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

          {/* Overlay for readability */}
          {hasStarted && <div className="absolute inset-0 bg-black/50" />}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
            <div className="text-left">
              <motion.a
                href="https://prebuiltui.com/tailwind-templates?ref=pixel-forge"
                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                }}
              >
                <div className="flex -space-x-2">
                  {/* {trustedUserImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Client ${i + 1}`}
                      className="size-6 rounded-full border border-black/50"
                      width={40}
                      height={40}
                    />
                  ))} */}
                </div>
                <span className="text-xl text-gray-200/90">
                  Made just for you, with all my love ❤️
                </span>
              </motion.a>

              <motion.h1
                className="text-4xl md:text-5xl font-bold italic leading-tight mb-6 max-w-xl"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                This is my lovely sweetheart pihuu…
                <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                  and memories with her❤️
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 max-w-lg mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.2,
                }}
              >
                A small collection of the moments that mean the most to me,
                because every moment with you is unforgettable ❤️
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.3,
                }}
              >
                <a className="w-full sm:w-auto">
                  <GhostButton
                    className="max-sm:w-full max-sm:justify-center py-3 px-5"
                    onClick={() => {
                      window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <PlayIcon className="size-4" />
                    Let’s Relive Our Memories ❤️
                  </GhostButton>
                </a>
              </motion.div>
            </div>

            {/* Right: modern mockup card */}
            <motion.div
              className="mx-auto w-full max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.5,
              }}
            >
              {/* <motion.div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent">
                <div className="relative aspect-16/10 bg-gray-900">
                  <img
                    src="/pihu_image.jpeg"
                    alt="agency-work-preview"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div> */}

              <motion.div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent">
                <div className="relative aspect-16/10 bg-gray-900 overflow-hidden">
                  {/* 🔥 Slider */}
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                      transform: `translateX(-${current * 100}%)`,
                    }}
                  >
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => {
                          setBgIndex(index); // show background immediately
                          setHasStarted(true); // start auto sync from now
                          audioRef.current?.play();
                        }}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover shrink-0"
                      />
                    ))}
                  </div>

                  {/* 🔘 Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                    {hasStarted &&
                      images.map((_, index) => (
                        <span
                          key={index}
                          onClick={() => setBgIndex(index)}
                          className={`w-3 h-3 rounded-full cursor-pointer ${
                            current === index ? "bg-white" : "bg-white/40"
                          }`}
                        />
                      ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <motion.section
        className="border-y border-white/6 bg-white/1 max-md:mt-10"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full overflow-hidden py-6">
            <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
              {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                <span
                  key={i}
                  className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
