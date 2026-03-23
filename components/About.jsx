"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="relative py-20 px-4 md:px-10 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our Story ❤️
        </motion.h2>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-6"
        >
          <p>
            It all started on 28 June 2024… Just a normal day, a normal meeting
            — nothing special.
          </p>

          <p>
            Mujhe bilkul idea nahi tha ki wahi ek aisi story banega, jisme main
            itna deeply involve ho jaunga.
          </p>

          <p>
            July me ek raat bas casually baat shuru hui… aur pata hi nahi chala
            kab woh baat subah 4 baje tak chalti rahi ❤️
          </p>

          <p>
            Phir dheere dheere hum milne lage, ghoomne lage — Mussoorie, Paonta
            Sahib, FRI… har jagah ek alag memory thi.
          </p>

          <p>
            Aur phir aaya Dhanolti trip 🏔️ Shayad sabse special moments me se
            ek… waha ke views, shanti, aur tumhare saath har second — main kabhi
            nahi bhool sakta.
          </p>

          <p>Tumhare saath har chhota moment bhi special ban gaya 💖</p>

          <p>
            Phir kuch phases aise bhi aaye… jab sab thoda door ho gaya. Sach
            bolu toh woh time mere liye bohot tough tha.
          </p>

          <p>
            Par phir dheere dheere sab wapas normal hone laga… aur har naye
            moment ke saath, main tumhe thoda aur samajhne laga.
          </p>

          <p>
            Aur phir aaya 10 May… 💌 jab humne pehli baar ek dusre ko letters
            diye. Shayad wahi moment tha jahan feelings aur real ho gayi.
          </p>

          <p>
            Phir aaya 14 July… Mujhe laga main bas milne ja raha hoon 😅 par
            baad me samjha — madam ji ka pura plan tha 😂 Us din ke baad sab
            kuch aur clear hone laga.
          </p>

          <p>
            29 August 2025… the day I finally expressed what I truly felt ❤️
          </p>

          <p className="text-white font-medium">
            Us din se lekar aaj tak — I am genuinely happy with you 💛
          </p>

          <p className="italic text-gray-400">
            Hum perfect nahi the… par shayad isi liye hum real the 🤍 Aur main
            is story ko kabhi end nahi karna chahta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
