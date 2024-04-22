"use client"

import { PROJECTS_BTNS } from '@/constants'
import React, { useState } from 'react'
import HtmlProjects from './Projects/HtmlProjects'
import JavaScriptProjects from './Projects/JavaScriptProjects'
import ReactProjects from './Projects/ReactProjects'
import NextJsProjects from './Projects/NextJsProjects'

const PROJECTS = [<HtmlProjects />, <JavaScriptProjects />, <ReactProjects />, <NextJsProjects />]

function Projects() {
    const [btnIndex, setBtnIndex] = useState(0)

  return (
    <section id='projects' className='main-padding-x section bg-light-3'>
        <h2 className='title-2 title-margin-bottom'>Projekty</h2>
        <div className='flex gap-5 overflow-auto mb-10'>
            {PROJECTS_BTNS.map((btnText, index) => {
                const isActive = btnIndex == index ? true : false;

                return (
                    <button key={btnText} className={`shrink-0 py-4 px-8 rounded-full transition md:text-xl ${!isActive ? "hover:text-primary-2" : "bg-light-1"}`} onClick={() => setBtnIndex(index)}>{btnText}</button>
                )
            })}
        </div>
        <div className='w-full flex overflow-hidden'>
            {PROJECTS.map((project, index) => {
                return (
                    <div key={index} className={`w-full shrink-0 transition-all duration-300`} style={{ translate: `${-100 * btnIndex}%` }}>
                        {project}
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects