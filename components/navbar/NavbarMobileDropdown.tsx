"use client";

import React from 'react'
import Container from '../layouts/Container';
import NavbarItems from './NavbarItems';

type Props = {
    dropdownActive: boolean;
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarMobileDropdown({ dropdownActive, setDropdownActive }: Props) {
  return (
    <div className={`md:hidden absolute top-[68px] left-0 w-full py-5 bg-primary-1 ${dropdownActive ? "translate-y-0 opacity-100 pointer-events-auto" : "opacity-0 translate-y-[-30px] pointer-events-none"} transition-all duration-200 `}>
        <Container>
            <div className='flex flex-col gap-3'>
                <NavbarItems setDropdownActive={setDropdownActive} />
            </div>
        </Container>
    </div>
  )
}

export default NavbarMobileDropdown