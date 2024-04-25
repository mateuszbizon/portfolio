import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid';
import GithubIcon from '@/public/icons/GithubIcon';

type Props = {
    project: ProjectType;
}

function ProjectCard({ project }: Props) {
  return (
    <div className='flex flex-col'>
        <div className='overflow-hidden rounded-t-xl border border-b-light-3'>
            <Link href={project.link} target="_blank" title="Strona główna projektu">
                <Image src={project.img} alt={project.alt} width={200} height={200} className='w-full h-full object-cover hover:scale-105 transition-all duration-300' />    
            </Link>
        </div>

        <div className='flex flex-col p-5 bg-light-1 rounded-b-xl'>
            <Link href={project.link} target='_blank' title="Strona główna projektu" className='text-lg md:text-xl xl:text-2xl font-medium mb-5'>
                <span>{project.title}</span>
            </Link>

            <div className='flex justify-center gap-7'>
                <Link href={project.link} target='_blank' title="Strona główna projektu" className='flex flex-col items-center gap-1 hover:text-primary-2 transition tooltip-top' data-tip="Strona">
                    <HomeIcon className='h-6 w-6' />
                    <span className='icon-text'>Strona</span>
                </Link>
                
                <Link href={project.github} target='_blank' title="Github projektu" className='flex flex-col items-center gap-1 hover:text-primary-2 transition tooltip-top' data-tip="Github">
                    <GithubIcon />
                    <span className='icon-text'>Github</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard