"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TimeCounter() {
  const startDate = new Date("2024-06-28T00:00:00");

  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalHours: 0,
    countdown: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // 🔥 YEARS / MONTHS / DAYS CALCULATION
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0,
        ).getDate();
        days += prevMonth;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      // 🔥 TOTAL HOURS
      const diff = now - startDate;
      const totalHours = Math.floor(diff / (1000 * 60 * 60));

      // 💍 NEXT ANNIVERSARY
      const nextAnniversary = new Date(
        now.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
      );

      if (nextAnniversary < now) {
        nextAnniversary.setFullYear(now.getFullYear() + 1);
      }

      const diffAnniv = nextAnniversary - now;

      const d = Math.floor(diffAnniv / (1000 * 60 * 60 * 24));
      const h = Math.floor((diffAnniv / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diffAnniv / (1000 * 60)) % 60);

      const countdown = `${d}d ${h}h ${m}m`;

      setTime({
        years,
        months,
        days,
        totalHours,
        countdown,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 px-4 text-white text-center relative z-10">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Time We’ve Spent Together ⏳
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 pt-5 gap-6 max-w-6xl mx-auto">
        {[
          { value: time.years, label: "Years ❤️" },
          { value: time.months, label: "Months 💖" },
          { value: time.days, label: "Days 💫" },
          { value: time.totalHours, label: "Hours 💬" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="relative p-6 md:p-8 rounded-2xl overflow-hidden
            bg-white/3 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center shadow-lg hover:shadow-pink-500/20 transition"
          >
            {/* ✨ Gradient Glow Border */}
            <div className="absolute inset-0 rounded-2xl bg-transparent hover:opacity-100 transition duration-300 blur-xl" />

            {/* 🪞 Glass Reflection */}
            <div className="absolute inset-0 bg-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <motion.h3
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="text-3xl md:text-5xl font-bold text-purple-500"
              >
                {item.value}
              </motion.h3>

              <p className="text-gray-300 mt-3 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 💍 ANNIVERSARY COUNTDOWN */}
      <motion.div
        className="mt-20 px-8 py-6 rounded-2xl inline-block relative z-10 overflow-hidden
        bg-transparent backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center shadow-lg hover:shadow-pink-500/20 transition"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-transparent blur-2xl" />

        <p className="text-gray-400 text-sm tracking-wide">
          Next Anniversary In 💍
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-purple-500 mt-2">
          {time.countdown}
        </h3>
      </motion.div>
    </section>
  );
}
