import GithubIcon from '@/public/icons/GithubIcon'
import LinkedInIcon from '@/public/icons/LinkedInIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AsideHeader() {
  return (
    <aside className='hidden lg:block w-aside-header-width sticky top-0 h-screen py-navbar-padding-y z-20'>
        <div className='bg-light-2 border border-grey-1/30 rounded-2xl w-full h-full p-aside-header-padding'>
          <div className='space-y-3 h-1/2'>
            <div className='text-dark-1 text-2xl font-medium'>
              <p>Mateusz</p>
              <p>Bizoń</p>
            </div>

            <figure className='w-full h-[200px]'>
              <Image src={"/profile_photo.jpg"} width={200} height={200} alt='photo of the portfolio author' className='w-full h-full object-cover rounded-3xl' />
            </figure>
          </div>

          <div className='flex flex-col justify-between h-1/2'>
            <div className='font-medium'>
              <p className='text-grey-1 text-sm'>Specialization:</p>
              <p className='text-dark-1'>Front-end developer specializing in React/Next.js</p>
            </div>

            <div className='font-medium'>
              <p className='text-grey-1 text-sm'>Based in:</p>
              <p className='text-dark-1'>Zgorzelec, Poland</p>
            </div>

            <div className='flex gap-2'>
              <Link href={"https://github.com/mateuszbizon"} target='_blank' title='Github' className='btn-1-circle'>
                <div className='icon-size-btn'><GithubIcon /></div>
              </Link>
              <Link href={"https://www.linkedin.com/in/mateusz-bizo%C5%84-ab5672304/"} target='_blank' title='LinkedIn' className='btn-1-circle'>
                <div className='icon-size-btn'><LinkedInIcon /></div>
              </Link>
            </div>
          </div>
        </div>
    </aside>
  )
}

export default AsideHeader