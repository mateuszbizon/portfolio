"use client"

import { PROJECTS_BTNS } from '@/constants'
import React, { useState } from 'react'

function Projects() {
    const [btnIndex, setBtnIndex] = useState(0)

  return (
    <section id='projects' className='main-padding-x section bg-light-3'>
        <h2 className='title-2 title-margin-bottom'>Projekty</h2>
        <div className='flex gap-5 overflow-auto'>
            {PROJECTS_BTNS.map((btnText, index) => {
                const isActive = btnIndex == index ? true : false;

                return (
                    <button key={btnText} className={`shrink-0 py-4 px-8 rounded-full transition md:text-xl ${!isActive ? "hover:text-primary-2" : "bg-light-1"}`} onClick={() => setBtnIndex(index)}>{btnText}</button>
                )
            })}
        </div>
    </section>
  )
}

export default Projects