import urlFor from "@/lib/urlFor";
import React from "react";

type Props = {
  skill: Skill;
};

const SkillComponent = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
        className="rounded-full object-cover object-center w-14 h-14 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 md:w-16 md:h-16 z-0">
        <div className="flex justify-center items-center h-full">
          <p className="text-[9px] md:text-xs font-bold text-black opacity-100 text-center">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
