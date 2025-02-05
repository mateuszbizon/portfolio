import { CONTACT_INFO_LIST, SOCIAL_LINKS_LIST } from '@/constants'
import GithubIcon from '@/public/icons/GithubIcon'
import LinkedInIcon from '@/public/icons/LinkedInIcon'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const LINKS = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/mateusz-bizo%C5%84-ab5672304/", icon: <LinkedInIcon /> },
  { name: "Github", link: "https://github.com/mateuszbizon", icon: <GithubIcon /> }
]

function Contact() {
  return (
    <section id='contact' className='section'>
      <h2 className='title-2 title-margin-bottom text-center gradient-text'>Contact</h2>
      <div className='flex flex-col sm:flex-row sm:justify-center items-center gap-5'>
        {CONTACT_INFO_LIST.map((item) => {
          return (
            <div key={item.text} className='container-2 flex flex-col items-center gap-4 w-[250px] text-dark-1'>
              <div className='w-7 h-7'>{item.icon}</div>
              <p className='sm:text-lg'>{item.text}</p>
            </div>
          )
        })}
      </div>
      <div className='flex justify-center gap-2 mt-10'>
        {SOCIAL_LINKS_LIST.map((item) => {
          return (
            <Link 
                key={item.name} 
                href={item.link} 
                target='_blank' 
                title={item.name} 
                className={`${buttonVariants({ variant: "primary-circle" })} md:[&_svg]:size-6`}
            >
                {item.icon}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Contact