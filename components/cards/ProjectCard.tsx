import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import GithubIcon from '@/public/icons/GithubIcon';
import { Project } from '@/types';
import { buttonVariants } from '../ui/button';
import ProjectTechnologyList from '../lists/ProjectTechnologyList';
import ProjectTechnologyCard from './ProjectTechnologyCard';

type Props = {
    project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <div className='group flex flex-col border border-grey-1/30 rounded-xl'>
        <div className='relative w-full aspect-auto overflow-hidden rounded-t-xl'>
            <Link href={project.githubLink} target="_blank" title="Project github">
                <Image src={project.img} alt={project.alt} width={200} height={200} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300' />    
            </Link>
            <div className='absolute bottom-2 left-2 py-2 px-4 bg-primary-1 text-light-1 rounded-lg text-xs md:text-sm'>
                {project.isFullstack ? "Full-stack app" : "Front-end"}
            </div>
        </div>

        <div className='p-5 bg-light-1 rounded-b-xl space-y-2'>
            <Link href={project.githubLink} target='_blank' title="Project github" className='text-lg font-bold text-dark-1'>
                {project.title}
            </Link>
            <p className='text-dark-1 font-medium'>{project.description}</p>
            <p className='text-dark-1'>Project idea: {project.isCustomIdea ? (
                <Link href={project.isCustomIdea.link} title={project.isCustomIdea.name} target='_blank' className={`${buttonVariants({ variant: "link" })}`}>
                    {project.isCustomIdea.name}
                </Link>
            ) : (
                <span className='font-medium'>Own idea</span>
            )}</p>

            <div>
                <Link href={project.githubLink} target='_blank' title="Project github" className={`${buttonVariants({ variant: "link" })}`}>
                    Visit project github
                </Link>
            </div>

            <div>
                <p className='font-bold text-dark-1'>Technologies:</p>
                <ProjectTechnologyList technologies={project.technologies} renderItem={(item, index) => {
                    const lastItemIndex = project.technologies.length - 1

                    return (
                        <div key={item}>
                            <ProjectTechnologyCard technology={item} />{index !== lastItemIndex && <span>,</span>}
                        </div>
                    )
                }} />
            </div>
        </div>
    </div>
  )
}

export default ProjectCard