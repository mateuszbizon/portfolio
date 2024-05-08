import React from 'react'
import ProjectsContainer from './ProjectsContainer'

export const NEXTJS_PROJECTS: ProjectType[] = [
  { title: "Social media dashboard", img: "/social_media_dashboard.jpg", alt: "social media dashboard app", link: "https://social-media-dashboard-nextjs-two.vercel.app/", github: "https://github.com/mateuszbizon/social_media_dashboard_nextjs" },
  { title: "Piggy bank online", img: "/piggy_bank_online.jpg", alt: "piggy bank online app", link: "https://piggybankonline.vercel.app/", github: "https://github.com/mateuszbizon/piggy_bank_app_nextjs" }
]

function NextJsProjects() {
  return (
    <ProjectsContainer projects={NEXTJS_PROJECTS} />
  )
}

export default NextJsProjects