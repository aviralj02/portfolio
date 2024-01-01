"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left max-w-full sm:px-10 justify-center items-center mx-auto md:gap-5"
    >
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl -mr-[15px]">
        Experience
      </h3>

      <div className="max-w-6xl w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbarStyle">
        {experiences.map((experience: Experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
