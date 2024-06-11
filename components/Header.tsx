"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Container from './layouts/Container'
import profileImg from "../public/profile_photo.jpg";
import Image from 'next/image';

function Header() {
  return (
    <header id='header' className='h-screen bg-gradient-to-br from-primary-1 to-secondary-1'>
        <Container>
          <div className='flex flex-col sm:flex-row h-full'>
            <div className='flex flex-col justify-end sm:justify-center h-[50%] sm:w-[50%] sm:h-auto'>
              <motion.h1 className='title-1 text-light-1 text-center' initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>Hi! My name is <span className='text-primary-2'>Matthew</span> <br />front-end developer</motion.h1>
            </div>

            <div className='flex justify-center sm:items-center pt-10 sm:pt-0 h-[50%] sm:w-[50%] sm:h-auto'>
              <figure className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]'>
                <Image src={profileImg} alt='my photo' width={200} height={200} className='w-full h-full object-cover rounded-full shadow-md shadow-primary-2' />
              </figure>
            </div>
          </div>
        </Container>
    </header>
  )
}

export default Header