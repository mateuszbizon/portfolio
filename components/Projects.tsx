"use client"

import React from 'react'
import ProjectsList from './lists/ProjectsList'
import RevealInView from './RevealInView'

function Projects() {
  return (
    <section id='projects' className='section'>
      <RevealInView>
        <h2 className='title-2 title-margin-bottom gradient-text text-center lg:text-left'>Projects</h2>
      </RevealInView>
      <div>
          <ProjectsList />
      </div>
    </section>
  )
}

export default Projects