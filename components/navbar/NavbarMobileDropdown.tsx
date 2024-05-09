"use client";

import React from 'react'
import { NAV_LINKS } from './Navbar';
import Link from 'next/link';
import Container from '../layouts/Container';
import NavbarSkillsItem from './NavbarSkillsItem';

type Props = {
    dropdownActive: boolean;
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarMobileDropdown({ dropdownActive, setDropdownActive }: Props) {
  return (
    <div className={`md:hidden grid bg-primary-1 transition-all duration-200 ${dropdownActive ? "grid-rows-[1fr] py-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className=''>
            <Container>
                <div className='flex flex-col gap-3'>
                    {NAV_LINKS.map(item => {
                        return (
                            <Link key={item.link} href={`#${item.link}`} onClick={() => setDropdownActive(false)} className='navbar-item'>
                                {item.text}
                            </Link>
                        )
                    })}
                    <NavbarSkillsItem />
                </div>
            </Container>
        </div>
    </div>
  )
}

export default NavbarMobileDropdown