import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import { PROJECTS_LIST } from '@/constants'
import RevealInView from '../RevealInView'

function ProjectsList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {PROJECTS_LIST.map((item, index) => {
            const isItemEven = (index + 1) % 2 == 0 ? true : false

            return (
                <RevealInView key={item.title} animationType={isItemEven ? "animate-from-right" : "animate-from-left"}>
                  <ProjectCard project={item} />
                </RevealInView>
            )
        })}
    </div>
  )
}

export default ProjectsList