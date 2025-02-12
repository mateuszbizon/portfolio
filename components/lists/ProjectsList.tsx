import { Project } from '@/types'
import React from 'react'

type ProjectsListProps = {
    projects: Project[]
    renderItem: (project: Project, index: number) => React.ReactNode
}

function ProjectsList({ projects, renderItem }: ProjectsListProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {projects.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default ProjectsList