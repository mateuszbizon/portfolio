import React from 'react'
import ProjectCard from '../cards/ProjectCard';

type Props = {
    projects: ProjectType[];
}

function ProjectsContainer({ projects }: Props) {
  return (
    <div className='projects-container'>
        {projects.map(project => {
            return (
            <ProjectCard key={project.title} project={project} />
            )
        })}
    </div>
  )
}

export default ProjectsContainer