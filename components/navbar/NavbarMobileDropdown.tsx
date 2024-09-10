"use client";

import React from 'react'
import NavbarItems from './NavbarItems';
import NavbarShadow from './NavbarShadow';

type Props = {
    dropdownActive: boolean;
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarMobileDropdown({ dropdownActive, setDropdownActive }: Props) {
  return (
    <>
      <div className={`md:hidden fixed top-0 right-0 w-[250px] h-full py-10 bg-light-2 ${dropdownActive ? "translate-y-0 opacity-100 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"} transition-all duration-200 z-30`}>
          <div className='container-1'>
              <div className='flex flex-col items-center gap-5 text-lg'>
                  <NavbarItems setDropdownActive={setDropdownActive} />
              </div>
          </div>
      </div>

      <NavbarShadow setDropdownActive={setDropdownActive} dropdownActive={dropdownActive} />
    </>
  )
}

export default NavbarMobileDropdown