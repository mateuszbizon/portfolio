import React from 'react'
import NavbarItem from './NavbarItem'

type Props = {
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NAV_ITEMS = [
    { title: "Home", href: "home" },
    { title: "About Me", href: "about" },
    { title: "Projects", href: "projects" },
    { title: "Skills", href: "skills" },
    { title: "Contact", href: "contact" },
]

function NavbarItems({ setDropdownActive }: Props) {
  return (
    <>
        {NAV_ITEMS.map(item => {
            return (
                <NavbarItem key={item.title} item={item} setDropdownActive={setDropdownActive} />
            )
        })}
    </>
  )
}

export default NavbarItems