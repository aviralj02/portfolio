import urlFor from "@/lib/urlFor";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="flex flex-col rounded-lg space-y-7 bg-[#292929] p-10 flex-shrink-0 w-[400px] md:w-[600px] snap-center md:opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="flex gap-3 items-center">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt="companyLogo"
        />
        <div className="flex flex-col">
          <h4 className="text-xl md:text-2xl font-semibold">
            {experience.company}
          </h4>
          <p className="font-normal text-lg md:text-xl mt-1">
            {experience.jobTitle}
          </p>
        </div>
      </div>

      <div className="px-4">
        <div className="flex space-x-2">
          {/* Tech Used */}
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 rounded-full object-cover object-center"
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-xs md:text-sm">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-2 ml-4 text-xs md:text-sm">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
