import { Group, Skill } from '@/types'
import React from 'react'

type GroupSkillListProps = {
    items: Group<Skill>[]
    renderItem: (item: Group<Skill>, index: number) => React.ReactNode
}

function GroupSkillList({ items, renderItem }: GroupSkillListProps) {
  return (
    <div className='space-y-20'>
        {items.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default GroupSkillList