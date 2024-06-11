import React from 'react'
import NavbarSkillsItem from './NavbarSkillsItem'
import NavbarItem from './NavbarItem'

type Props = {
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NAV_ITEMS = [
    { title: "About", href: "about" },
    { title: "Projects", href: "projects" },
    { title: "Road-map", href: "road-map" },
    { title: "Contact", href: "contact" },
    { title: "Skills", content: <NavbarSkillsItem /> },
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