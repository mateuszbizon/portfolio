"use client"

import React from 'react'
import ProjectsList from './lists/ProjectsList'

function Projects() {
  return (
    <section id='projects' className='main-padding-x section bg-light-3'>
      <h2 className='title-2 title-margin-bottom'>Projects</h2>
      <div className='w-full flex overflow-hidden'>
          <ProjectsList />
      </div>
    </section>
  )
}

export default Projects