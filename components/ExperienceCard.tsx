import urlFor from '@/lib/urlFor';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className='flex flex-col rounded-lg items-center space-y-7 bg-[#292929] p-10 flex-shrink-0 w-[400px] md:w-[800px] snap-center md:opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0,opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt="companyLogo"
      />

      <div className='px-8'>
        <h4 className='text-2xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-xl mt-1'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech Used */}
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className='h-8 w-8 rounded-full object-cover object-center' 
              src={urlFor(technology.image).url()} 
              alt={technology.title} />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300 text-sm'>
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-xs md:text-sm'>
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard;