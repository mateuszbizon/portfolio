"use client"

import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import useScroll from '@/hooks/useScroll';

function Navbar() {
    const { elementActive } = useScroll(100)
    const [mobileNavLinksActive, setMobileNavLinksActive] = useState(false)

  return (
    <nav className='fixed top-0 left-0 flex flex-col w-full z-10'>
        <div className={`flex justify-between items-center text-light-1 main-padding-x py-5 ${elementActive ? "bg-primary-1" : "bg-transparent"} transition duration-300`}>
            <span className='font-medium text-lg lg:text-xl'>Mateusz Bizoń</span>

            <button className='md:hidden' onClick={() => setMobileNavLinksActive(prev => !prev)}>
                <Bars3Icon className={`h-8 w-8 ${mobileNavLinksActive ? "text-primary-2" : "text-light-1"} hover:text-primary-2 transition duration-300`} />
            </button>

            <div className='hidden md:flex gap-8 md:text-lg lg:text-xl'>
                {NAV_LINKS.map(item => {
                    return (
                        <Link key={item.id} href={`#${item.id}`} className='text-light-1 hover:text-primary-2 transition duration-300'>
                            {item.text}
                        </Link>
                    )
                })}
            </div>
        </div>

        <div className={`md:hidden grid bg-primary-1 main-padding-x transition-all duration-200 ${mobileNavLinksActive ? "grid-rows-[1fr] py-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className='flex flex-col gap-3 overflow-hidden'>
                {NAV_LINKS.map(item => {
                    return (
                        <Link key={item.id} href={`#${item.id}`} className='text-light-1 hover:text-primary-2 transition duration-300'>
                            {item.text}
                        </Link>
                    )
                })}
            </div>
        </div>
    </nav>
  )
}

export default Navbar