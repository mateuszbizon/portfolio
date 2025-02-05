import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import GithubIcon from '@/public/icons/GithubIcon';
import HomeIcon from '@/public/icons/HomeIcon';
import { ProjectType } from '@/types';
import { buttonVariants } from '../ui/button';

type Props = {
    project: ProjectType;
}

function ProjectCard({ project }: Props) {
  return (
    <div className='group flex flex-col border border-grey-1/30 rounded-xl'>
        <div className='relative w-full aspect-auto overflow-hidden rounded-t-xl'>
            <Link href={project.link} target="_blank" title="Project page">
                <Image src={project.img} alt={project.alt} width={200} height={200} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300' />    
            </Link>
            <div className='absolute bottom-2 left-2 py-2 px-4 bg-primary-1 text-light-1 rounded-lg text-xs md:text-sm'>
                {project.isFullstack ? "Full-stack app" : "Front-end"}
            </div>
        </div>

        <div className='flex flex-col p-5 bg-light-1 rounded-b-xl'>
            <div className='mb-5 space-y-2'>
                <Link href={project.link} target='_blank' title="Project page" className='text-xl font-medium text-dark-1 hover:text-primary-1 transition duration-300'>
                    <span>{project.title}</span>
                </Link>
                <p className='text-dark-1'>Project idea: {project.customIdea ? (
                    <Link href={project.customIdea.link} title={project.customIdea.title} target='_blank' className='font-medium hover:text-primary-1 transition duration-300'>
                        {project.customIdea.title}
                    </Link>
                ) : (
                    <span className='font-medium'>Own idea</span>
                )}</p>
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-7 mb-5'>
                <Link href={project.link} target='_blank' title="Project page" className={buttonVariants({ variant: "primary" })}>
                    Web page <HomeIcon />
                </Link>
                
                <Link href={project.github} target='_blank' title="Project github" className={buttonVariants({ variant: "primary" })}>
                    Github <GithubIcon />
                </Link>
            </div>

            <div>
                <p className='mb-2 font-medium text-dark-1'>Built with:</p>
                <div className='flex flex-wrap gap-3'>
                    {project.technologies.map((item) => {
                        return (
                            <div key={item} className='py-2 px-4 rounded-lg bg-primary-1 text-light-1 text-sm'>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard