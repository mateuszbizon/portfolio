"use client"

import React from 'react'
import ChevronUpIcon from '@/public/icons/ChevronUpIcon';
import Link from 'next/link';
import useScroll from '@/hooks/useScroll';

function BackToStart() {
    const { elementActive } = useScroll(500);

  return (
    <Link href="#header" className={`fixed bottom-12 right-4 bg-primary-1 hover:bg-primary-2 rounded-lg p-4 ${elementActive ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-300`}>
        <div className='text-light-1'>
          <ChevronUpIcon />
        </div>
    </Link>
  )
}

export default BackToStart