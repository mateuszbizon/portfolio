import React from 'react'
import ProjectsContainer from './ProjectsContainer'
import { NEXTJS_PROJECTS } from '@/constants'

function NextJsProjects() {
  return (
    <ProjectsContainer projects={NEXTJS_PROJECTS} />
  )
}

export default NextJsProjects