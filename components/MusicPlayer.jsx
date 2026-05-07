"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    // 🎵 interaction music
    const interactionMusic = document.getElementById("interaction-music");

    // 🔥 stop interaction music
    if (interactionMusic) {
      interactionMusic.pause();
      //interactionMusic.currentTime = 0;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  useEffect(() => {
    window.switchToInteractionMusic = switchToInteractionMusic;
    window.restoreMainMusic = restoreMainMusic;
  }, []);

  const switchToInteractionMusic = () => {
    const bgMusic = document.getElementById("bg-music");
    const interactionMusic = document.getElementById("interaction-music");

    if (bgMusic && interactionMusic) {
      bgMusic.pause();

      interactionMusic.volume = 0.5;
      interactionMusic.play().catch(() => {});
    }
  };

  const restoreMainMusic = () => {
    const bgMusic = document.getElementById("bg-music");
    const interactionMusic = document.getElementById("interaction-music");

    if (bgMusic && interactionMusic) {
      interactionMusic.pause();

      bgMusic.volume = 0.5;
      bgMusic.play().catch(() => {});
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

  return (
    <>
      {/* 🎵 Audio */}
      <audio id="bg-music" ref={audioRef} loop preload="auto">
        <source src="/music2.mp3" type="audio/mpeg" />
      </audio>
      <audio id="interaction-music" loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* 🎧 Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-24 z-50 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white"
      >
        {playing ? "Pause 🎵" : "Play 🎵"}
      </button>
    </>
  );
}
