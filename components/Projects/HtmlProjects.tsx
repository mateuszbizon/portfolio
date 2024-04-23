import { HTML_CSS_PROJECTS } from '@/constants'
import React from 'react'
import ProjectCard from '../cards/ProjectCard'

function HtmlProjects() {
  return (
    <div className='projects-container'>
      {HTML_CSS_PROJECTS.map(project => {
        return (
          <ProjectCard key={project.title} project={project} />
        )
      })}
    </div>
  )
}

export default HtmlProjects