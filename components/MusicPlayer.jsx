"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!audioRef.current) return;

      audioRef.current.volume = 0.5;

      const playAudio = async () => {
        try {
          await audioRef.current.play();
          setPlaying(true);
          console.log("Music started ✅");
        } catch (err) {
          console.log("Autoplay blocked ❌", err);
        }
      };

      playAudio();
    };

    // 🔥 Use multiple events (fixes mobile + desktop)
    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  return (
    <>
      {/* 🎵 Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music2.mp3" type="audio/mpeg" />
      </audio>

      {/* 🎧 Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-25 z-50 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white"
      >
        {playing ? "Pause 🎵" : "Play 🎵"}
      </button>
    </>
  );
}
