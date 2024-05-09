"use client"

import React, { useState } from 'react'
import useScroll from '@/hooks/useScroll';
import Container from '../layouts/Container';
import NavbarContent from './NavbarContent';
import NavbarMobileDropdown from './NavbarMobileDropdown';

export const NAV_LINKS = [
    { text: "O mnie", link: "about" },
    { text: "Projekty", link: "projects" },
    { text: "Mapa", link: "road-map" },
    { text: "Kontakt", link: "contact" },
]

function Navbar() {
    const { elementActive } = useScroll(100)
    const [mobileNavLinksActive, setMobileNavLinksActive] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 flex flex-col w-full z-10 ${elementActive ? "bg-primary-1" : "bg-transparent"}`}>
        <Container>
            <NavbarContent dropdownActive={mobileNavLinksActive} setDropdownActive={setMobileNavLinksActive} />
        </Container>
        <NavbarMobileDropdown dropdownActive={mobileNavLinksActive} setDropdownActive={setMobileNavLinksActive} />
    </nav>
  )
}

export default Navbar