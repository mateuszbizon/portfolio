"use client"

import ChevronDownIcon from '@/public/icons/ChevronDownIcon'
import React, { useEffect, useRef, useState } from 'react'

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
  const [itemActive, setItemActive] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function closeSkillsItemOutside(event: MouseEvent) {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setItemActive(false)
      }
    }

    document.addEventListener("click", closeSkillsItemOutside)
    
    return () => {
      document.removeEventListener("click", closeSkillsItemOutside)
    }
  }, [])

  return (
    <button ref={buttonRef} className={`relative navbar-item-pointer-up ${itemActive ? "navbar-item-pointer-up-show" : "navbar-item-pointer-up-hide"}`} onClick={() => setItemActive(prev => !prev)}>
        <div className={`navbar-item flex gap-2 items-center cursor-pointer ${itemActive && "text-primary-2"}`}>
            <span className='flex gap-2 items-center'>Umiejętności</span>
            <div>
              <ChevronDownIcon />
            </div>
        </div>
        <div className={`absolute top-[150%] left-0 md:right-0 md:left-auto p-5 bg-light-1 w-[300px] ${itemActive ? "opacity-100" : "opacity-0"} transition-all duration-300 z-10 pointer-events-none rounded-lg`}>
            <ul className='flex gap-5 flex-wrap text-black'>
              {SKILLS_LIST.map(item => {
                return (
                  <li key={item.name}>{item.name}</li>
                )
              })}
            </ul>
        </div>
    </button>
  )
}

export default NavbarSkillsItem