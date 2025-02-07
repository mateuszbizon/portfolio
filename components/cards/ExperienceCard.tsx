import { Experience } from '@/types'
import React from 'react'

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
    </div>
  )
}

export default ExperienceCard