import { Experience } from '@/types'
import React from 'react'
import ProjectTechnologyList from '../lists/ProjectTechnologyList'
import ProjectTechnologyCard from './ProjectTechnologyCard'
import ProjectResultList from '../lists/ProjectResultList'
import ProjectResultCard from './ProjectResultCard'

type ExperienceCardProps = {
    experience: Experience
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className='container-2 space-y-1'>
        <p className='text-primary-2'>{experience.duration}</p>
        <p className='text-lg font-bold text-dark-1'>{experience.role}</p>
        <p className='text-dark-1 font-medium'>{experience.company.name} | {experience.company.street}, {experience.company.city}</p>
        <p className='text-dark-1 font-medium'>{experience.project.title}</p>
        <p className='text-dark-1'>{experience.project.description}</p>
        <div>
            <span className='text-dark-1 font-bold'>Technologies:</span>
            <ProjectTechnologyList technologies={experience.project.technologies} renderItem={(item, index) => {
                const lastItemIndex = experience.project.technologies.length - 1

                return (
                    <div key={item}>
                        <ProjectTechnologyCard technology={item} />{index !== lastItemIndex && <span>,</span>}
                    </div>
                )
            }} />
        </div>
        <div>
            <span className='text-dark-1 font-bold'>Results:</span>
            <ProjectResultList results={experience.project.results} renderItem={(item) => (
                <ProjectResultCard key={item} result={item} />
            )} />
        </div>
    </div>
  )
}

export default ExperienceCard