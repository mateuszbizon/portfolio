import { Group, Skill } from '@/types'
import React from 'react'

type GroupSkillCardProps = {
    item: Group<Skill>
}

function GroupSkillCard({ item }: GroupSkillCardProps) {
  return (
    <div>
        <h3 className='title-3 mb-5 text-primary-2'>{item.name}</h3>
        <p>skills</p>
    </div>
  )
}

export default GroupSkillCard