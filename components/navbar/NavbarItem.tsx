"use client"

import ChevronDownIcon from '@/public/icons/ChevronDownIcon';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    item: {
        title: string;
        href: string;
        content?: React.ReactNode;
    }
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarItem({ item, setDropdownActive }: Props) {
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
    <>
        {!item.content ? (
            <Link key={item.href} href={`#${item.href}`} onClick={() => setDropdownActive(false)} className='navbar-item'>
                {item.title}
            </Link>
        ) : (
            <button ref={buttonRef} className={`relative navbar-item-pointer-up ${itemActive ? "navbar-item-pointer-up-show" : "navbar-item-pointer-up-hide"}`} onClick={() => setItemActive(prev => !prev)}>
                <div className={`navbar-item flex gap-2 items-center cursor-pointer ${itemActive && "text-primary-2"}`}>
                    <span className='flex gap-2 items-center'>Umiejętności</span>
                    <div className={`${itemActive ? "rotate-180" : "rotate-0"} transition-all`}>
                    <ChevronDownIcon />
                    </div>
                </div>
                {itemActive && (
                    item.content
                )}
            </button>
        )}
    </>
  )
}

export default NavbarItem