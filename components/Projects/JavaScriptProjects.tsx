import React from 'react'
import ProjectsContainer from './ProjectsContainer'
import { JAVASCRIPT_PROJECTS } from '@/constants'

function JavaScriptProjects() {
  return (
    <ProjectsContainer projects={JAVASCRIPT_PROJECTS} />
  )
}

export default JavaScriptProjects