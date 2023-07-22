"use client"

import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {}

type Inputs = {
  name: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmitForm: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aviraljain1311@gmail.com?subject=${formData.subject}&body=Hi! My name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left max-w-7xl px-10 justify-center gap-12 mx-auto items-center'>
      <h3 className='uppercase tracking-[15px] text-gray-500 text-2xl -mr-[15px]'>
        Contact
      </h3>

      <div className='space-y-10 w-full max-w-xl'>
        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='h-5 w-5 md:h-7 md:w-7 animate-pulse text-[#19A7CE]' />
          <p className='text-lg md:text-xl'>+1234567890</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeIcon className='h-5 w-5 md:h-7 md:w-7 animate-pulse text-[#19A7CE]' />
          <p className='text-lg md:text-xl'>aviraljain1311@gmail.com</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <MapPinIcon className='h-5 w-5 md:h-7 md:w-7 animate-pulse text-[#19A7CE]' />
          <p className='text-lg md:text-xl'>Gurugram, Haryana</p>
        </div>

        <form
          className='flex flex-col space-y-2 mx-auto'
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <input className='contactInput' type="text" placeholder='Name' {...register('name')} required />

          <input className='contactInput' type="text" placeholder='Subject' {...register('subject')}/>
          
          <textarea className='contactInput' placeholder='Message' {...register('message')} required />

          <button className='bg-[#19A7CE] py-3 px-5 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe;