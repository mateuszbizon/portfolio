import React from 'react'
import ProjectsContainer from './ProjectsContainer'

const JAVASCRIPT_PROJECTS: ProjectType[] = [
  { title: "Newsletter sign-up", img: "/newsletter.jpg", alt: "newsletter app", link: "https://mateuszbizon.github.io/newsletter_signup/", github: "https://github.com/mateuszbizon/newsletter_signup" },
  { title: "REST countries API", img: "/countries_api.jpg", alt: "countries api app", link: "https://mateuszbizon.github.io/Countries-API/", github: "https://github.com/mateuszbizon/Countries-API" }
]

function JavaScriptProjects() {
  return (
    <ProjectsContainer projects={JAVASCRIPT_PROJECTS} />
  )
}

export default JavaScriptProjects