import { Skill } from '@/types'
import React from 'react'
import SkillLevel from '../SkillLevel'

type SkillCardProps = {
    skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className='container-2 flex flex-col items-center gap-5'>
        <div className='space-y-3'>
            {skill.icon && (
                <div className='size-10'>
                    {skill.icon}
                </div>
            )}
            <p className='text-center font-bold text-primary-1 text-lg'>{skill.name}</p>
        </div>
        {skill.level && (
            <SkillLevel skillLevel={skill.level} />
        )}
    </div>
  )
}

export default SkillCard