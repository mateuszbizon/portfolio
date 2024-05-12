"use client"

import ChevronDownIcon from '@/public/icons/ChevronDownIcon';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    item: {
        title: string;
        href?: string;
        content?: React.ReactNode;
    }
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarItem({ item, setDropdownActive }: Props) {
    const [itemActive, setItemActive] = useState(false)

  useEffect(() => {
    function closeActiveItem(e: any) {
      const isDropdownButton = e.target.matches("[data-dropdown-button]")
      
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

      setItemActive(false);
    }

    document.addEventListener("click", closeActiveItem)
    
    return () => {
      document.removeEventListener("click", closeActiveItem)
    }
  }, [])

  return (
    <>
        {!item.content ? (
            <Link key={item.href} href={`#${item.href}`} onClick={() => setDropdownActive(false)} className='navbar-item'>
                {item.title}
            </Link>
        ) : (
            <div className={`relative ${itemActive && "navbar-item-pointer"}`} data-dropdown>
                <button className={`navbar-item flex gap-2 items-center cursor-pointer ${itemActive && "text-primary-2"}`} onClick={() => setItemActive(prev => !prev)} data-dropdown-button>
                    <span className='flex gap-2 items-center'>Umiejętności</span>
                    <div className={`${itemActive ? "rotate-180" : "rotate-0"} transition-all`}>
                      <ChevronDownIcon />
                    </div>
                </button>
                {itemActive && (
                    <div className={`absolute top-[150%] left-0 md:right-0 md:left-auto p-5 bg-light-1 w-[300px] sm:w-[500px] transition-all duration-300 z-10 rounded-lg`}>
                        {item.content}
                    </div>
                )}
            </div>
        )}
    </>
  )
}

export default NavbarItem