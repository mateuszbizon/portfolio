import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import { ProjectType, Technology } from '@/types'

const PROJECTS_LIST: ProjectType[] = [
    { title: "Piggy bank online", img: "/piggy_bank_online.jpg", alt: "piggy bank online app", link: "https://piggybankonline.vercel.app/", github: "https://github.com/mateuszbizon/piggy_bank_app_nextjs", technologies: [Technology.HTML, Technology.CSS, Technology.React, Technology.Typescript, Technology.Tailwind, Technology.Nextjs] },
    { title: "Comments section", img: "/comments_section.jpg", alt: "comments section app", link: "https://comments-section-react.netlify.app/", github: "https://github.com/mateuszbizon/comments_section_react", technologies: [Technology.HTML, Technology.CSS, Technology.SCSS, Technology.React, Technology.Typescript] },
    { title: "Multi-step form", img: "/multi_step_form.jpg", alt: "multi-step form app", link: "https://multi-stepformreact.netlify.app/", github: "https://github.com/mateuszbizon/multi-step-form-react", technologies: [Technology.HTML, Technology.CSS, Technology.SCSS, Technology.React, Technology.Typescript] },
    { title: "Social media dashboard", img: "/social_media_dashboard.jpg", alt: "social media dashboard app", link: "https://social-media-dashboard-nextjs-two.vercel.app/", github: "https://github.com/mateuszbizon/social_media_dashboard_nextjs", technologies: [Technology.HTML, Technology.CSS, Technology.React, Technology.Typescript, Technology.Tailwind, Technology.Nextjs] },
]

function ProjectsList() {
  return (
    <div className='projects-container'>
        {PROJECTS_LIST.map((item) => {
            return (
                <ProjectCard key={item.title} project={item} />
            )
        })}
    </div>
  )
}

export default ProjectsList