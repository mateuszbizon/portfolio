"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Container from './layouts/Container'

function Header() {
  return (
    <header id='header' className='h-screen flex flex-col justify-center items-center px-3 bg-gradient-to-br from-primary-1 to-secondary-1'>
        <Container>
          <motion.h1 className='title-1 text-light-1 text-center' initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>Cześć! Jestem <span className='text-primary-2'>Mateusz</span> <br />Programista front-end</motion.h1>
        </Container>
    </header>
  )
}

export default Header