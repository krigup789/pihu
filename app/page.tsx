"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import MemoryMarquee from "@/components/MemoryMarquee";
import VideoSection from "@/components/VideoSection";
import LoveLetter from "@/components/LoveLetter";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import { useEffect, useState, FormEvent } from "react";
import FloatingHearts from "@/components/FloatingHearts";

export default function Page() {
  const CORRECT_PASSWORD = "chiku i love you";

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError("");

      // 🔥 PLAY MUSIC AFTER LOGIN
      setTimeout(() => {
        const music = document.getElementById("bg-music") as HTMLAudioElement;
        if (music) {
          music.volume = 0.5;
          music.play().catch(() => {});
        }
      }, 300);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden">
        {/* 🌸 Background Gradient Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-tr from-pink-600/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute right-10 bottom-10 w-[300px] h-[150px] bg-gradient-to-bl from-pink-500/20 to-transparent rounded-full blur-2xl" />
        </div>

        {/* 💖 Floating Hearts (if you made component) */}
        <FloatingHearts count={50} />

        {/* 💌 Login Card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-10 text-center shadow-[0_0_40px_rgba(255,105,180,0.2)]"
        >
          {/* Title */}
          <h1 className="text-3xl font-semibold">Just for You ❤️</h1>

          <p className="text-gray-400 text-sm mt-2">
            Enter the password to unlock our memories 💌
          </p>

          {/* Input */}
          <div className="relative mt-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 
                       text-white placeholder-white/50 outline-none
                       focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40
                       transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Error */}
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-full text-white 
                     bg-gradient-to-r from-pink-500 to-pink-600
                     hover:from-pink-600 hover:to-pink-700
                     shadow-[0_0_20px_rgba(255,105,180,0.4)]
                     hover:shadow-[0_0_30px_rgba(255,105,180,0.7)]
                     transition-all duration-300
                     hover:scale-105 active:scale-95"
          >
            Unlock 💖
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Gallery />
      <MemoryMarquee />
      <VideoSection />
      <LoveLetter />
      <Testimonials />
      <Team />
      <Faq />
    </>
  );
}
