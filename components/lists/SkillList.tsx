import { Skill } from '@/types'
import React from 'react'

type SkillListProps = {
    skills: Skill[]
    renderItem: (item: Skill, index: number) => React.ReactNode
}

function SkillList({ skills, renderItem }: SkillListProps) {
  return (
    <div className='grid grid-cols-1 sm:flex flex-wrap gap-5'>
        {skills.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default SkillList