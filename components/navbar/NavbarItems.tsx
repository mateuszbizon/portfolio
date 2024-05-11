import React from 'react'
import NavbarSkillsItem from './NavbarSkillsItem'
import NavbarItem from './NavbarItem'

type Props = {
    setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NAV_ITEMS = [
    { title: "O mnie", href: "about" },
    { title: "Projekty", href: "projects" },
    { title: "Mapa", href: "road-map" },
    { title: "Kontakt", href: "contact" },
    { title: "Umiejętności", href: "", content: <NavbarSkillsItem /> },
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