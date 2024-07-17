"use client"

import React from 'react'
import MenuBarsIcon from '@/public/icons/MenuBarsIcon';
import NavbarItems from './NavbarItems';

type Props = {
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
    dropdownActive: boolean;
}

function NavbarContent({ setDropdownActive, dropdownActive }: Props) {
  return (
    <div className={`flex justify-between items-center text-light-1 py-5 transition duration-300`}>
        <span className='font-medium text-lg lg:text-xl text-grey-1'>Mateusz Bizoń</span>

        <div className='hidden md:flex gap-8 md:text-lg lg:text-xl'>
            <NavbarItems setDropdownActive={setDropdownActive} />
        </div>

        <button className='md:hidden' onClick={() => setDropdownActive(prev => !prev)}>
            <div className={`text-grey-1 hover:text-dark-1 transition duration-300`}>
                <MenuBarsIcon />
            </div>
        </button>
    </div>
  )
}

export default NavbarContent