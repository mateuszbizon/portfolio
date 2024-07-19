import { SkillType } from '@/types'
import React from 'react'

type Props = {
    skill: SkillType;
}

function SkillCard({ skill }: Props) {
  return (
    <div className='container-2 flex flex-col items-center gap-3 w-[250px] sm:w-[150px] hover:-translate-y-5 hover:bg-primary-1 hover:border-primary-1 hover:text-light-1 transition-all duration-200'>
        <div className='h-10 w-10'>
        {skill.icon}
        </div>
        <span>{skill.title}</span>
    </div>
  )
}

export default SkillCard