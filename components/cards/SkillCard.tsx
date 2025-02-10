import { Skill } from '@/types'
import React from 'react'

type SkillCardProps = {
    skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className='container-2 flex flex-col items-center gap-3'>
        {skill.icon && (
            <div className='size-10'>
                {skill.icon}
            </div>
        )}
        <span className='text-center font-bold text-primary-1 text-lg'>{skill.name}</span>
        <span className='text-center'>{skill.level}</span>
    </div>
  )
}

export default SkillCard