import React from 'react'
import ProjectsContainer from './ProjectsContainer'
import { REACT_PROJECTS } from '@/constants'

function ReactProjects() {
  return (
    <ProjectsContainer projects={REACT_PROJECTS} />
  )
}

export default ReactProjects