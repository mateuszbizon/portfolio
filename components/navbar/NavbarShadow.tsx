import React from 'react'

type Props = {
    dropdownActive: boolean;
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavbarShadow({ setDropdownActive, dropdownActive }: Props) {
  return (
    <div className={`md:hidden fixed top-0 left-0 w-full h-full ${dropdownActive ? "bg-grey-1/30 pointer-events-auto" : "bg-grey-1/0 pointer-events-none"} transition duration-200`} onClick={() => setDropdownActive(false)}>

    </div>
  )
}

export default NavbarShadow