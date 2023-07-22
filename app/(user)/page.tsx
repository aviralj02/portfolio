import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { getExperience, getPageInfo, getProjects, getSkills, getSocials } from '@/lib/utils';
import { client } from '@/sanity/sanity.client';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

type Props = {}

export const revalidate = 60;

const Home = async (props: Props) => {
  const pageInfo: PageInfo = await getPageInfo();
  const experiences: Experience[] = await getExperience();
  const projects: Project[] = await getProjects();
  const socials: Social[] = await getSocials();
  const skills: Skill[] = await getSkills();

  return (
    <div className='bg-[#242424] text-white h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbarStyle'>
      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpCircleIcon className='h-8 w-8 rounded-full opacity-20 hover:opacity-50 transition ease-in-out select-none' />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;