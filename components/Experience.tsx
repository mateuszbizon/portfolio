import React from 'react'
import RevealInView from './RevealInView'
import ExperienceList from './lists/ExperienceList'
import { EXPERIENCE_LIST } from '@/constants/experienceList'
import ExperienceCard from './cards/ExperienceCard'

function Experience() {
  return (
    <div>
        <h3 className='title-3 mb-5 text-primary-2'>Experience</h3>
        <RevealInView animationType='animate-from-left'>
            <ExperienceList experiences={EXPERIENCE_LIST} renderItem={(item) => (
                <ExperienceCard key={item.name} experience={item} />
            )} />
        </RevealInView>
    </div>
  )
}

export default Experience