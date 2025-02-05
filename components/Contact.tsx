import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { CONTACT } from '@/constants/contact'

function Contact() {
  return (
    <section id='contact' className='section'>
        <h2 className='title-2 title-margin-bottom text-center gradient-text'>Contact</h2>
        <div className='flex flex-col sm:flex-row sm:justify-center items-center gap-5 flex-wrap'>
            {CONTACT.infos.map((item) => {
                return (
                    <div key={item.name} className='container-2 flex flex-col items-center gap-4 text-dark-1'>
                        <div className='w-7 h-7'>{item.icon}</div>
                        <p className='sm:text-lg text-center'>{item.value}</p>
                    </div>
                )
            })}
        </div>
        <div className='flex justify-center gap-2 mt-10'>
            {CONTACT.socialLinks.map((item) => {
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