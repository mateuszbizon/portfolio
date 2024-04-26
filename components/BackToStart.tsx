"use client"

import React from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import useScroll from '@/hooks/useScroll';

function BackToStart() {
    const { elementActive } = useScroll(500);

  return (
    <Link href="#header" className={`fixed bottom-4 right-4 bg-primary-1 hover:bg-primary-2 rounded-lg p-4 ${elementActive ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-300`}>
        <ChevronDoubleUpIcon className='h-7 w-7 text-light-1' />
    </Link>
  )
}

export default BackToStart