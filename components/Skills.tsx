"use client";

import { skills } from "@/data"; // make sure this path matches your project structure
import { InfiniteMovingSkills } from "./ui/InfiniteMovingSkills";


const Skills = () => {
  return (
    <section id="Skills" className="py-20 px-6">
      <h1 className="heading text-center text-3xl md:text-4xl font-bold mb-10">
        <span className="text-purple">Skills</span> I Work With
      </h1>
      <InfiniteMovingSkills  skills={skills} direction="left" speed="normal" />
    </section>
  );
};

export default Skills;
