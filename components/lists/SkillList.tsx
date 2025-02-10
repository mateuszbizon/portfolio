import { Skill } from '@/types'
import React from 'react'

type SkillListProps = {
    skills: Skill[]
    renderItem: (item: Skill, index: number) => React.ReactNode
}

function SkillList({ skills, renderItem }: SkillListProps) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
        {skills.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default SkillList