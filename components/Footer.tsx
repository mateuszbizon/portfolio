import React from 'react'

function Footer() {
    const currentDate = new Date()

  return (
    <footer className='py-6 border-t border-t-light-3 bg-primary-1 text-light-1 text-lg'>
      <p className='text-center'>&copy; {currentDate.getFullYear()} | Mateusz Bizoń</p>
    </footer>
  )
}

export default Footer