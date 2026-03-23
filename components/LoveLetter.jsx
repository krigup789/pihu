// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function LoveLetter() {
//   const [open, setOpen] = useState(false);

//   return (
//     <section className="py-28 px-4 text-white text-center relative">

//       </div>
//       {/* Background glow */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-500/10 via-transparent to-transparent" />

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-5xl font-bold mb-6"
//       >
//         There’s something I want to tell you ❤️
//       </motion.h2>

//       {/* Button */}
//       {!open && (
//         <motion.button
//           onClick={() => setOpen(true)}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full text-white shadow-lg transition"
//         >
//           Open Letter 💌
//         </motion.button>
//       )}

//       {/* Letter Reveal */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
//             animate={{ opacity: 1, scale: 1, rotateX: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.7 }}
//             className="mt-12 max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
//           >
//             <p className="text-gray-300 text-lg leading-relaxed">
//               I don’t know how to say everything perfectly… but I know that
//               whatever we have is real.
//               <br />
//               <br />
//               From random talks to meaningful moments, from confusion to
//               clarity… somehow, you became the most important part of my life.
//               <br />
//               <br />
//               I may not always express it well, but I feel it deeply — every
//               single day.
//               <br />
//               <br />
//               And if there’s one thing I’m sure about… it’s that I never want to
//               lose this ❤️
//             </p>

//             <p className="mt-6 text-pink-400 font-semibold">
//               — Yours, always 💛
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

export default function LoveLetter() {
  const [open, setOpen] = useState(false);
  const letterRef = useRef(null);
  const [showEnvelope, setShowEnvelope] = useState(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && letterRef.current && !letterRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <section
      id="Love"
      className="py-28 px-4 text-white text-center relative shadow-[0_0_40px_rgba(255,105,180,0.5)] rounded-xl"
    >
      <style>{`
      @keyframes fadeIn {
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      `}</style>
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-500/20 via-transparent to-transparent" />

      {/* ❤️ Envelope */}
      {showEnvelope && (
        <div
          className="flex justify-center cursor-pointer transition-all duration-700 opacity-0 scale-95 animate-[fadeIn_0.7s_forwards]"
          onClick={() => {
            setShowEnvelope(false); // hide envelope immediately
            setOpen(true);
          }}
        >
          <div className="relative w-72 h-44">
            {/* Body */}
            <div className="absolute inset-0 bg-pink-500 rounded-lg shadow-xl" />

            {/* Flap */}
            <motion.div
              ref={letterRef}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: open ? -180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-pink-600 origin-top rounded-t-lg"
              style={{ transformStyle: "preserve-3d" }}
            />

            {/* Text */}
            <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">
              Open Letter 💌
            </p>
          </div>
        </div>
      )}

      {/* 💌 Letter Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
              opacity: open ? 1 : 0,
              y: open ? 0 : 50,
              scale: open ? 1 : 0.9,
            }}
            transition={{ duration: 0.6, delay: open ? 0.4 : 0 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="mt-12 max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
          >
            <button
              onClick={() => {
                setOpen(false);
                setOpen(false);

                // ⏳ delay envelope return
                setTimeout(() => {
                  setShowEnvelope(true);
                }, 1000); // match your exit animation duration
              }}
              className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full"
            >
              ✖
            </button>
            <TypeAnimation
              sequence={[
                `I don’t know how to say everything perfectly… but I know that whatever we have is real.

                From random talks to meaningful moments… you became the most important part of my life.

                I may not always express it well… but I feel it deeply every single day.

                And I never want to lose this ❤️`,
                1000,
              ]}
              wrapper="p"
              speed={40}
              repeat={0}
              cursor={true}
              className="text-gray-300 text-lg leading-relaxed whitespace-pre-line"
            />

            <p className="mt-6 text-pink-400 font-semibold">
              — Yours, always 💜
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
