import { Group, Skill } from '@/types'
import React from 'react'
import SkillList from '../lists/SkillList'
import SkillCard from './SkillCard'

type GroupSkillCardProps = {
    item: Group<Skill>
}

function GroupSkillCard({ item }: GroupSkillCardProps) {
  return (
    <div>
        <h3 className='title-3 mb-5 text-primary-2'>{item.name}</h3>
        <SkillList skills={item.items} renderItem={(item) => (
            <SkillCard key={item.name} skill={item} />
        )} />
    </div>
  )
}

export default GroupSkillCard