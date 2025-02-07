import { Education } from '@/types'
import React from 'react'

type EducationCardProps = {
    education: Education
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <div className='container-2 space-y-1'>
        <p className='text-primary-2'>{education.duration}</p>
        <p className='text-lg font-bold text-dark-1'>{education.title}, {education.degree}</p>
        <p className='text-dark-1 font-medium'>{education.school.name} in {education.school.city}</p>
        <p className='text-grey-1'>{education.description}</p>
    </div>
  )
}

export default EducationCard