import GithubIcon from '@/public/icons/GithubIcon'
import LinkedInIcon from '@/public/icons/LinkedInIcon'
import Link from 'next/link'
import React from 'react'
import Container from './layouts/Container'

const LINKS = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/mateusz-bizo%C5%84-ab5672304/", icon: <LinkedInIcon /> },
  { name: "Github", link: "https://github.com/mateuszbizon", icon: <GithubIcon /> }
]

function Contact() {
  return (
    <section id='contact' className='section bg-primary-1 text-light-1 text-2xl md:text-3xl'>
        <Container>
          <h2 className='title-2 title-margin-bottom text-center'>Contact</h2>
          <p className='text-center mb-8'>If you want to send me message, do it at <br /> <Link href="mailto:mat-biz@wp.pl" className='text-primary-2 font-bold hover:text-light-1 hover:underline transition-all duration-300'>mat-biz@wp.pl</Link></p>
          <div className='flex items-center gap-4 w-full max-w-[300px] mx-auto mb-8'>
              <div className='bg-light-1 w-[50%] h-1'></div>
              <span>or</span>
              <div className='bg-light-1 w-[50%] h-1'></div>
          </div>
          <p className='text-center mb-5'>Visit me at:</p>
          <div className='flex gap-5 justify-center'>
            {LINKS.map(link => {
              return (
                <Link key={link.name} href={link.link} target='_blank' title={link.name} className='bg-light-1 text-black text-base p-3 md:p-4 rounded-full hover:bg-primary-2 hover:text-light-1 transition duration-300 tooltip-top' data-tip={link.name}>
                  {link.icon}
                </Link>
              )
            })}
          </div>
        </Container>
    </section>
  )
}

export default Contact