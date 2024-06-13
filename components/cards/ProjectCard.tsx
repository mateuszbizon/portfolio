import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import GithubIcon from '@/public/icons/GithubIcon';
import HomeIcon from '@/public/icons/HomeIcon';
import { technologyMap } from '@/utils/technologyMap';
import { ProjectType } from '@/types';

type Props = {
    project: ProjectType;
}

function ProjectCard({ project }: Props) {
  return (
    <div className='flex flex-col'>
        <div className='overflow-hidden rounded-t-xl border border-b-light-3'>
            <Link href={project.link} target="_blank" title="Project page">
                <Image src={project.img} alt={project.alt} width={200} height={200} className='w-full h-full object-cover hover:scale-105 transition-all duration-300' />    
            </Link>
        </div>

        <div className='flex flex-col p-5 bg-light-1 rounded-b-xl'>
            <div className='mb-5'>
                <Link href={project.link} target='_blank' title="Project page" className='text-lg md:text-xl xl:text-2xl font-medium'>
                    <span>{project.title}</span>
                </Link>
            </div>

            <div className='flex justify-center gap-7 mb-5'>
                <Link href={project.link} target='_blank' title="Project page" className='flex flex-col items-center gap-1 hover:text-primary-2 transition tooltip-top' data-tip="Page">
                    <HomeIcon />
                    <span className='icon-text'>Page</span>
                </Link>
                
                <Link href={project.github} target='_blank' title="Project github" className='flex flex-col items-center gap-1 hover:text-primary-2 transition tooltip-top' data-tip="Github">
                    <GithubIcon />
                    <span className='icon-text'>Github</span>
                </Link>
            </div>

        <div>
            <p className='md:text-lg mb-2 font-medium'>Technologies used:</p>
            <div className='flex flex-wrap gap-3'>
                    {project.technologies.map((item) => {
                        const TechComponent = technologyMap[item];
                        return (
                            <TechComponent key={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard