"use client"

import React from 'react'
import { motion } from 'framer-motion'

function HeaderElements() {
  return (
    <>
        <motion.div className='absolute -top-[150px] right-0 size-[200px] sm:size-[250px] md:size-[300px] lg:size-[400px] bg-gradient-to-tr from-primary-1/10 to-primary-2/20 rounded-full' animate={{ y: ["0%", "-20%", "0%"] }} transition={{ repeat: Infinity, duration: 10 }}></motion.div>

        <motion.div className='absolute bottom-0 -left-[130px] size-[200px] sm:size-[230px] md:size-[260px] lg:size-[300px] bg-gradient-to-bl from-primary-1/10 to-primary-2/20 rounded-full' animate={{ y: ["0%", "-40%", "0%"] }} transition={{ repeat: Infinity, duration: 10, delay: 5 }}></motion.div>
    </>
  )
}

export default HeaderElements