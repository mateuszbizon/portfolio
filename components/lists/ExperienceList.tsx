import { Experience } from '@/types'
import React from 'react'

type ExperienceListProps = {
    experiences: Experience[]
    renderItem: (item: Experience, index: number) => React.ReactNode
}

function ExperienceList({ experiences, renderItem }: ExperienceListProps) {
  return (
    <div className='space-y-5'>
        {experiences.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default ExperienceList