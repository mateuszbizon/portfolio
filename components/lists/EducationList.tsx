import { Education } from '@/types'
import React from 'react'

type EducationListProps = {
    educations: Education[]
    renderItem: (item: Education, index: number) => React.ReactNode
}

function EducationList({ educations, renderItem }: EducationListProps) {
  return (
    <div className='space-y-5'>
        {educations.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default EducationList