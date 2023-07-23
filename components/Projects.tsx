"use client"

import urlFor from '@/lib/urlFor';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {

  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="mt-8 uppercase tracking-[15px] text-gray-500 text-2xl -mr-[15px]">
        Projects
      </h3>

      <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbarStyle">
        {projects.map((project: Project) => (
          <div
            className="w-screen h-fit flex-shrink-0 snap-center flex flex-col space-y-5 items-center p-5"
            key={project._id}
          >
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt={project.title}
              className="max-w-[400px] max-h-[200px] w-full object-cover object-center rounded-md"
            />

            <div className="flex flex-col px-0 md:px-5 max-w-6xl gap-5 items-center">
              <h4 className="underline decoration-[#19A7CE]/60 text-2xl font-semibold text-center">
                {project.title}
              </h4>

              <div className="flex space-x-2 justify-center items-center">
                {/* Tech Used */}
                {project.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="h-7 w-7 rounded-full object-cover object-center"
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                  />
                ))}
              </div>

              <p className="text-sm md:text-base text-center md:text-left">
                {project.summary}
              </p>

              <div className="flex gap-5">
                <Link href={project.linkToBuild} className="p-2 rounded-xl bg-black transition ease-in-out shadow-lg hover:shadow-gray-400 transform hover:-translate-y-1">
                  <CodeBracketIcon className="w-5 h-5" />
                </Link>
                {project.liveLink && (
                  <Link href={project.liveLink} className="p-2 rounded-xl bg-black transition ease-in-out shadow-lg hover:shadow-gray-400 transform hover:-translate-y-1">
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </Link>
                )}
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#19A7CE]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;