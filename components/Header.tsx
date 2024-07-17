"use client"

import React from 'react'
import Link from 'next/link';
import ChevronDownIcon from '@/public/icons/ChevronDownIcon';
import BriefCaseIcon from '@/public/icons/BriefCaseIcon';
import DownloadIcon from '@/public/icons/DownloadIcon';

function Header() {
  return (
    <header id='home' className='flex flex-col w-full justify-center gap-7 h-screen pb-5'>
        <div>
          <h1 className='title-1 gradient-text mb-8 text-center'>I'm Matthew Bizoń <br />Front-end developer</h1>
          <div className='flex justify-center items-center gap-5'>
            <Link href={"#projects"} className='btn-1'>
              My Works <div className='icon-size-btn'><BriefCaseIcon /></div>
            </Link>
            <Link href={"/CV_Mateusz_Bizoń_developer.pdf"} className='btn-2' download>
              Download CV <div className='icon-size-btn'><DownloadIcon /></div>
            </Link>
          </div>
        </div>
        <Link href={"#about"} className='btn-1-circle w-max p-6 mx-auto'>
          <div className='icon-size'><ChevronDownIcon /></div>
        </Link>
    </header>
  )
}

export default Header