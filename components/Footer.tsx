import React from 'react'
import Container from './layouts/Container'

function Footer() {
    const currentDate = new Date()

  return (
    <footer className='py-6 border-t border-t-light-3 bg-primary-1 text-light-1 text-lg'>
        <Container>
          <p className='text-center'>&copy; {currentDate.getFullYear()} | Mateusz Bizoń</p>
        </Container>
    </footer>
  )
}

export default Footer