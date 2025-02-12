"use client"

import React from 'react'
import MenuBarsIcon from '@/public/icons/MenuBarsIcon';
import NavbarItems from './NavbarItems';
import { Button } from '../ui/button';

type Props = {
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
    dropdownActive: boolean;
}

function NavbarContent({ setDropdownActive, dropdownActive }: Props) {
  return (
    <div className={`flex justify-between items-center text-light-1 py-navbar-padding-y lg:pl-[290px] transition duration-300`}>
        <span className='lg:hidden font-medium text-lg lg:text-xl text-grey-1'>Mateusz Bizoń</span>

        <div className='hidden md:flex gap-8 md:text-lg lg:text-xl'>
            <NavbarItems setDropdownActive={setDropdownActive} />
        </div>

        <Button variant={"secondary"} className='md:hidden [&_svg]:size-5' onClick={() => setDropdownActive(prev => !prev)}>
            <MenuBarsIcon />
        </Button>
    </div>
  )
}

export default NavbarContent