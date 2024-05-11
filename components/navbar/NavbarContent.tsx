"use client"

import React from 'react'
import MenuBarsIcon from '@/public/icons/MenuBarsIcon';
import { NAV_LINKS } from './Navbar';
import NavbarItem from './NavbarItem';

type Props = {
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
    dropdownActive: boolean;
}

function NavbarContent({ setDropdownActive, dropdownActive }: Props) {
  return (
    <div className={`flex justify-between items-center text-light-1 py-5 transition duration-300`}>
        <span className='font-medium text-lg lg:text-xl'>Mateusz Bizoń</span>

        <div className='hidden md:flex gap-8 md:text-lg lg:text-xl'>
            {NAV_LINKS.map(item => {
                return (
                    <NavbarItem key={item.title} item={item} setDropdownActive={setDropdownActive} />
                )
            })}
        </div>

        <button className='md:hidden' onClick={() => setDropdownActive(prev => !prev)}>
            <div className={`${dropdownActive ? "text-primary-2" : "text-light-1"} hover:text-primary-2 transition duration-300`}>
                <MenuBarsIcon />
            </div>
        </button>
    </div>
  )
}

export default NavbarContent