"use client"

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

type Props = {
  socials: Social[];
}

const Header = ({ socials }: Props) => {
  return (
    <header className='sticky flex items-start top-0 p-5 justify-between max-w-7xl mx-auto xl:items-center z-30'>
      <motion.div 
        className='flex flex-row items-center'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        {/* Socials */}
        {socials.map((social: Social) => (
          <SocialIcon
            target='_blank'
            key={social.title}
            url={social.url}
            network={social.network}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      
      <Link href="#contact">
        <motion.div 
          className='flex flex-row items-center text-gray-300 cursor-pointer pt-[10px] gap-4'
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <EnvelopeIcon className='opacity-70 h-7 w-7' />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
      </Link>

    </header>
  );
}

export default Header;