"use client"

import React from 'react'
import ProjectsList from './lists/ProjectsList'

function Projects() {
  return (
    <section id='projects' className='section'>
      <h2 className='title-2 title-margin-bottom gradient-text text-center lg:text-left'>Projects</h2>
      <div>
          <ProjectsList />
      </div>
    </section>
  )
}

export default Projects