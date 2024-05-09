"use client"

import ChevronDownIcon from '@/public/icons/ChevronDownIcon'
import React from 'react'

function NavbarSkillsItem() {
  return (
    <div className='relative group'>
        <div>
            <span className='navbar-item flex gap-2 items-center cursor-pointer'>Umiejętności <ChevronDownIcon /></span>
        </div>
        <div className='absolute top-[150%] p-3 bg-light-1 left-0 w-[300px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none'>
            <span className='text-center'>text</span>
        </div>
    </div>
  )
}

export default NavbarSkillsItem