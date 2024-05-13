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
            <div className={`relative navbar-item-pointer ${itemActive ? "after:opacity-100" : "after:opacity-0"}`} data-dropdown>
                <button className={`navbar-item flex gap-2 items-center cursor-pointer ${itemActive && "text-primary-2"}`} onClick={() => setItemActive(prev => !prev)} data-dropdown-button>
                    <span className='flex gap-2 items-center'>Umiejętności</span>
                    <div className={`${itemActive ? "rotate-180" : "rotate-0"} transition-all`}>
                      <ChevronDownIcon />
                    </div>
                </button>

                <div className={`absolute top-[150%] left-0 md:right-0 md:left-auto p-5 bg-light-1 w-[300px] sm:w-[500px] transition-all z-10 rounded-lg ${itemActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    {item.content}
                </div>
            </div>
        )}
    </>
  )
}

export default NavbarItem