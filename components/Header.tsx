import React from 'react'

function Header() {
  return (
    <header className='h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary-1 to-secondary-1'>
        <h1 className='title-1 text-light-1 text-center'>Cześć! Jestem <span className='text-primary-2'>Mateusz</span> <br />Programista front-end</h1>
    </header>
  )
}

export default Header