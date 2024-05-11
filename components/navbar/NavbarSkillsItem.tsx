"use client"

import React from 'react'

const SKILLS_LIST = [
  { name: "Html" },
  { name: "Css" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "TailwindCSS" },
  { name: "Scss" },
  { name: "Git" },
  { name: "TypeScript" },
  { name: "NextJS" },
]

function NavbarSkillsItem() {
  return (
    <div className={`absolute top-[150%] left-0 md:right-0 md:left-auto p-5 bg-light-1 w-[300px] sm:w-[500px] transition-all duration-300 z-10 pointer-events-none rounded-lg`}>
        <ul className='grid grid-cols-3 gap-5 text-black'>
          {SKILLS_LIST.map(item => {
            return (
              <li key={item.name}>{item.name}</li>
            )
          })}
        </ul>
    </div>
  )
}

export default NavbarSkillsItem