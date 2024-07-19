import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import { PROJECTS_LIST } from '@/constants'

function ProjectsList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {PROJECTS_LIST.map((item) => {
            return (
                <ProjectCard key={item.title} project={item} />
            )
        })}
    </div>
  )
}

export default ProjectsList