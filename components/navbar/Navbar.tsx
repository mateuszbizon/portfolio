"use client"

import React, { useState } from 'react'
import useScroll from '@/hooks/useScroll';
import NavbarContent from './NavbarContent';
import NavbarMobileDropdown from './NavbarMobileDropdown';

function Navbar() {
    const { elementActive } = useScroll(100)
    const [mobileNavLinksActive, setMobileNavLinksActive] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 flex flex-col w-full z-10 bg-light-2`}>
        <div className='container-1'>
            <NavbarContent dropdownActive={mobileNavLinksActive} setDropdownActive={setMobileNavLinksActive} />
        </div>
        <NavbarMobileDropdown dropdownActive={mobileNavLinksActive} setDropdownActive={setMobileNavLinksActive} />
    </nav>
  )
}

export default Navbar