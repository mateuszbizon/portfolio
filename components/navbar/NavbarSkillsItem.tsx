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
    <ul className='grid grid-cols-3 gap-5 text-black'>
      {SKILLS_LIST.map(item => {
        return (
          <li key={item.name}>{item.name}</li>
        )
      })}
    </ul>
  )
}

export default NavbarSkillsItem