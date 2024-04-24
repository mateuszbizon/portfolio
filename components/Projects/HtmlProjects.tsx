import { HTML_CSS_PROJECTS } from '@/constants'
import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import ProjectsContainer from './ProjectsContainer'

function HtmlProjects() {
  return (
    <ProjectsContainer projects={HTML_CSS_PROJECTS} />
  )
}

export default HtmlProjects