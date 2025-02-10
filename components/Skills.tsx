import React from 'react'
import RevealInView from './RevealInView'
import GroupSkillList from './lists/GroupSkillList'
import { SKILL_LIST } from '@/constants/skillList'
import GroupSkillCard from './cards/GroupSkillCard'

function Skills() {
  return (
    <section id='skills' className='section'>
        <RevealInView>
            <h2 className='title-2 mb-5 gradient-text text-center lg:text-left'>Skills</h2>
        </RevealInView>
        <GroupSkillList items={SKILL_LIST} renderItem={(item) => (
            <GroupSkillCard key={item.name} item={item} />
        )} />
    </section>
  )
}

export default Skills