"use client"

import React, { useEffect, useState } from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

function BackToStart() {
    const [buttonUpActive, setButtonUpActive] = useState(false)
    const buttonUpScrollYOffset = 500;

    function handleScroll() {
        if (window.scrollY >= buttonUpScrollYOffset) {
            setButtonUpActive(true);
            return;
        }

        setButtonUpActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

  return (
    <Link href="#header" className={`fixed bottom-4 right-4 bg-primary-1 hover:bg-primary-2 rounded-lg p-4 ${buttonUpActive ? "opacity-100 z-10" : "opacity-0 -z-10"} transition-all duration-300`}>
        <ChevronDoubleUpIcon className='h-7 w-7 text-light-1' />
    </Link>
  )
}

export default BackToStart