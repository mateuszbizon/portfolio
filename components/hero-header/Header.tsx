"use client"

import React from 'react'
import Link from 'next/link';
import ChevronDownIcon from '@/public/icons/ChevronDownIcon';
import BriefCaseIcon from '@/public/icons/BriefCaseIcon';
import DownloadIcon from '@/public/icons/DownloadIcon';
import { buttonVariants } from '../ui/button';

function Header() {
  return (
    <header id='home' className='flex flex-col w-full justify-center lg:flex-row lg:justify-between lg:items-end gap-7 h-screen pb-[calc(theme(padding.aside-header-padding)+theme(padding.navbar-padding-y))]'>
        <div>
            <h1 className='title-1 gradient-text mb-8 text-center lg:text-left'>I'm Matthew Bizoń <br />Front-end Developer</h1>
            <div className='flex justify-center items-center lg:justify-start gap-5'>
                <Link href={"#projects"} className={buttonVariants({ variant: "primary" })}>
                    My Works <BriefCaseIcon />
                </Link>
                <Link href={"/CV_Mateusz_Bizoń_developer.pdf"} className={buttonVariants({ variant: "secondary" })} download>
                    Download CV <DownloadIcon />
                </Link>
            </div>
        </div>
        <div className='flex justify-center'>
            <Link href={"#about"} className={`${buttonVariants({ variant: "primary-circle" })} p-6 [&_svg]:size-6`}>
                <ChevronDownIcon />
            </Link>
        </div>
    </header>
  )
}

export default Header