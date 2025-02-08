"use client"

import React from 'react'
import ProjectsList from './lists/ProjectsList'
import RevealInView from './RevealInView'
import { PROJECT_LIST } from '@/constants/projectList'
import ProjectCard from './cards/ProjectCard'

function Projects() {
  return (
    <section id='projects' className='section'>
        <RevealInView>
            <h2 className='title-2 title-margin-bottom gradient-text text-center lg:text-left'>Projects</h2>
        </RevealInView>
        <div>
            <ProjectsList projects={PROJECT_LIST} renderItem={(item, index) => {
                const isItemEven = (index + 1) % 2 == 0 ? true : false

                return (
                    <RevealInView key={item.title} animationType={isItemEven ? "animate-from-right" : "animate-from-left"}>
                        <ProjectCard project={item} />
                    </RevealInView>
                )
            }} />
        </div>
    </section>
  )
}

export default Projects