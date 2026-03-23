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
    const audio = audioRef.current;

    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <>
      {/* 🎵 Audio */}
      <audio id="bg-music" ref={audioRef} loop preload="auto">
        <source src="/music2.mp3" type="audio/mpeg" />
      </audio>

      {/* 🎧 Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-5 z-50 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white"
      >
        {playing ? "Pause 🎵" : "Play 🎵"}
      </button>
    </>
  );
}
