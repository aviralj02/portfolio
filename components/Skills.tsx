"use client"

import { motion } from 'framer-motion';
import React from 'react';
import SkillComponent from './SkillComponent';

type Props = {
  skills: Skill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left items-center max-w-[2000px] xl:px-10 justify-center mx-auto gap-5'
    >
      <div className='flex flex-col items-center'>
        <h3 className='uppercase tracking-[15px] text-gray-500 text-2xl -mr-[15px]'>
          Skills
        </h3>

        <h3 className='uppercase tracking-[3px] text-sm text-gray-500 py-5 px-7'>
          Hover over to a skill for to see name
        </h3>
      </div>

      <div className='grid grid-cols-4 md:grid-cols-6 gap-5'>
        {skills.map((skill: Skill, index: number) => (
          <SkillComponent 
            key={skill._id} 
            skill={skill}
            directionLeft={index < skills.length/2 ? true : false}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills;