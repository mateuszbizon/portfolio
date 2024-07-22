import { SKILLS_LIST } from '@/constants'
import React from 'react'
import SkillCard from './cards/SkillCard'
import RevealInView from './RevealInView'

function Skills() {
  return (
    <section id='skills' className='section'>
        <RevealInView>
          <h2 className='title-2 title-margin-bottom gradient-text text-center lg:text-left'>Skills</h2>
        </RevealInView>
        <RevealInView>
          <div className='flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-10 gap-x-5 flex-wrap'>
              {SKILLS_LIST.map((item) => {
                return (
                  <SkillCard key={item.title} skill={item} />
                )
              })}
          </div>
        </RevealInView>
    </section>
  )
}

export default Skills