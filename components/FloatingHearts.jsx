"use client";

import { useEffect, useState } from "react";

export default function FloatingHearts({ count = 12 }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generated = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 20 + 10,
      symbol: Math.random() > 0.8 ? "❤️" : "❤️",
    }));

    setHearts(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, i) => (
        <span
          key={i}
          className="absolute text-pink-400 opacity-85 animate-pulse"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.symbol}
        </span>
      ))}
    </div>
  );
}
