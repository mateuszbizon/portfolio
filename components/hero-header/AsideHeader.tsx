import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { CONTACT } from '@/constants/contact'
import { ABOUT } from '@/constants/about'

function AsideHeader() {
  return (
    <aside className='hidden lg:block w-aside-header-width sticky top-0 h-screen py-navbar-padding-y z-20'>
        <div className='container-2 w-full h-full'>
            <div className='space-y-3 h-1/2'>
                <div className='text-dark-1 text-2xl font-medium'>
                    <p>{ABOUT.name}</p>
                    <p>{ABOUT.surname}</p>
                </div>

                <figure className='w-full h-[200px]'>
                    <Image src={"/profile_photo.jpg"} width={200} height={200} alt='photo of the portfolio author' className='w-full h-full object-cover rounded-3xl' />
                </figure>
            </div>

            <div className='flex flex-col justify-between h-1/2'>
                <div className='space-y-2 font-medium'>
                    <p className='text-dark-1 text-lg'>{ABOUT.intro}</p>

                    {CONTACT.infos.map((item) => (
                        <div key={item.name}>
                            <p className='text-grey-1 text-sm'>{item.name}:</p>
                            <p className='text-dark-1'>{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className='flex gap-2'>
                    {CONTACT.socialLinks.map((item) => {
                        return (
                            <Link 
                                key={item.name} 
                                href={item.link} 
                                target='_blank' 
                                title={item.name} 
                                className={buttonVariants({ variant: "primary-circle" })}
                            >
                                {item.icon}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    </aside>
  )
}

export default AsideHeader