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
    <section className="py-24 px-4 text-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Time We’ve Spent Together ⏳
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* YEARS */}
        <motion.div className="card">
          <h3 className="number">{time.years}</h3>
          <p>Years ❤️</p>
        </motion.div>

        {/* MONTHS */}
        <motion.div className="card">
          <h3 className="number">{time.months}</h3>
          <p>Months 💖</p>
        </motion.div>

        {/* DAYS */}
        <motion.div className="card">
          <h3 className="number">{time.days}</h3>
          <p>Days 💫</p>
        </motion.div>

        {/* HOURS */}
        <motion.div className="card">
          <h3 className="number">{time.totalHours}</h3>
          <p>Hours 💬</p>
        </motion.div>
      </div>

      {/* 💍 ANNIVERSARY COUNTDOWN */}
      <motion.div
        className="mt-16 p-6 rounded-2xl bg-[#1a1230] border border-purple-500/30 shadow-[0_0_40px_rgba(124,58,237,0.5)] inline-block"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-gray-400 text-sm">Next Anniversary In 💍</p>
        <h3 className="text-2xl font-bold text-purple-400 mt-2">
          {time.countdown}
        </h3>
      </motion.div>

      {/* Styles */}
      <style jsx>{`
        .card {
          padding: 2rem;
          border-radius: 1rem;
          background: #1a1230;
          border: 1px solid #2a1f4a;
          box-shadow: 0 0 30px rgba(124, 58, 237, 0.3);
          transition: 0.3s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #a78bfa;
          text-shadow: 0 0 10px rgba(124, 58, 237, 0.8);
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
