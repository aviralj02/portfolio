"use client"

import React from 'react';
import { motion } from 'framer-motion';
import urlFor from '@/lib/urlFor';

type Props = {
    pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex flex-col relative text-center md:text-left max-w-7xl px-10 justify-center gap-7 md:gap-20 items-center mx-auto'
    >
        <h3 className='uppercase tracking-[15px] text-gray-500 text-2xl -mr-[15px]'>
            About
        </h3>

        <div className='flex flex-col md:flex-row items-center md:px-4'>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src={urlFor(pageInfo?.profilePicture).url()}
                alt='profileImage'
                className='mb-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-56 md:h-72 xl:w-[300px] xl:h-[350px]'
            />

            <div className='space-y-6 md:space-y-10 px-0 md:px-20'>
                <h4 className='text-2xl md:text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#19A7CE]/50'>little</span> background
                </h4>
                <p className='text-sm md:text-base'>
                    {pageInfo.backgroundInformation}
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default About;