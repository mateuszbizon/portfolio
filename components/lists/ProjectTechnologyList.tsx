import React from 'react'

type ProjectTechnologyListProps = {
    technologies: string[]
    renderItem: (item: string, index: number) => React.ReactNode
}

function ProjectTechnologyList({ technologies, renderItem }: ProjectTechnologyListProps) {
  return (
    <div className='flex gap-x-1 flex-wrap'>
        {technologies.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default ProjectTechnologyList