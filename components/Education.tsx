import React from 'react'
import RevealInView from './RevealInView'
import EducationList from './lists/EducationList'
import { EDUCATION_LIST } from '@/constants/educationList'
import EducationCard from './cards/EducationCard'

function Education() {
  return (
    <div>
        <h3 className='title-3 mb-5 text-primary-2'>Education</h3>
        <RevealInView animationType='animate-from-right'>
            <EducationList educations={EDUCATION_LIST} renderItem={(item) => (
                <EducationCard key={item.name} education={item} />
            )} />
        </RevealInView>
    </div>
  )
}

export default Education