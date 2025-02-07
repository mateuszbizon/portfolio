import React from 'react'

type ProjectTechnologyCardProps = {
    technology: string;
}

function ProjectTechnologyCard({ technology }: ProjectTechnologyCardProps) {
  return (
    <span className='text-dark-1 shrink-0'>{technology}</span>
  )
}

export default ProjectTechnologyCard