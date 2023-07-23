import urlFor from '@/lib/urlFor';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

const SkillComponent = ({ skill, directionLeft }: Props) => {
    // Need to fix framer motion animation on mobile devices
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -50 : 50,
                opacity: 0
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={urlFor(skill?.image).url()}
            alt={skill?.title}
            className='rounded-full object-cover object-center w-14 h-14 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 md:w-16 md:h-16 z-0'>
            <div className='flex justify-center items-center h-full'>
                <p className='text-[9px] md:text-xs font-bold text-black opacity-100 text-center'>{skill.title}</p>
            </div>
        </div>
    </div>
  )
}

export default SkillComponent;