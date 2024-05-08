import React from 'react'
import ProjectsContainer from './ProjectsContainer'

export const REACT_PROJECTS: ProjectType[] = [
  { title: "Multi-step form", img: "/multi_step_form.jpg", alt: "multi-step form app", link: "https://multi-stepformreact.netlify.app/", github: "https://github.com/mateuszbizon/multi-step-form-react" },
  { title: "Comments section", img: "/comments_section.jpg", alt: "comments section app", link: "https://comments-section-react.netlify.app/", github: "https://github.com/mateuszbizon/comments_section_react" },
  { title: "Skarbonka Alanka", img: "/piggy_bank_alanek.jpg", alt: "skarbonka alanka app", link: "https://skarbonkaalanka.netlify.app/", github: "https://github.com/mateuszbizon/skarbonka_alanka" }
]

function ReactProjects() {
  return (
    <ProjectsContainer projects={REACT_PROJECTS} />
  )
}

export default ReactProjects