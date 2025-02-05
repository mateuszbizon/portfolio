import CssColorIcon from "@/public/icons/CssColorIcon"
import GitColorIcon from "@/public/icons/GitColorIcon"
import HtmlColorIcon from "@/public/icons/HtmlColorIcon"
import NextjsColorIcon from "@/public/icons/NextjsColorIcon"
import ReactColorIcon from "@/public/icons/ReactColorIcon"
import SassColorIcon from "@/public/icons/SassColorIcon"
import TailwindColorIcon from "@/public/icons/TailwindColorIcon"
import TypescriptColorIcon from "@/public/icons/TypescriptColorIcon"
import { ProjectType } from "@/types"

export const EXPERIENCE_LIST = [
    { title: "second internship", duration: "07/2023 - 08/2023", place: "Sharply, Legnica", role: "Front-end, back-end (Internship)", description: "Second intership in Sharply during I worked more in team. I learned github issues, branches, pull requests and how to solve conflicts in pull request. I also faced to solve other problems. I worked with four other interns. When one of them had problem, first they asked me for help and when I didn't solve problem, it was solved by our keeper. It gave me opportunity to read more code and keep it clean." },
    { title: "first internship", duration: "08/2022 - 09/2022", place: "Sharply, Legnica", role: "Front-end, back-end (Internship)", description: "First intership in software house during I learned basics of React, how back-end works and how to connect front-end with back-end. While setting connection between front-end and back-end I faced common problem which was CORS, what it is and how to setup CORS. I learned also git with its basic commands and github." },
]

export const EDUCATION_LIST = [
    { title: "engineering studies", duration: "10/2020 - 03/2024", place: "Collegium Witelona Uczelnia Panstwowa in Legnica", type: "Computer Science, Engineering Studies", description: "Specialization: Programming web and mobile applications." },
]

export const PROJECTS_LIST: ProjectType[] = [
    { title: "Product feedback app", img: "/product_feedback.jpg", alt: "product feedback app", link: "https://productfeedbackappfm.netlify.app/", github: "https://github.com/mateuszbizon/product_feedback", technologies: ["TypeScript", "Next.js", "TailwindCSS", "MongoDB", "Clerk", "server actions", "react-hook-form", "zod"], isFullstack: true, customIdea: { title: "Frontend Mentor", link: "https://www.frontendmentor.io/challenges" }, },

    { title: "Piggy bank online", img: "/piggy_bank_online.jpg", alt: "piggy bank online app", link: "https://piggybankonline.vercel.app/", github: "https://github.com/mateuszbizon/piggy_bank_app_nextjs", technologies: ["TypeScript", "Next.js", "TailwindCSS", "MongoDB", "Clerk", "server actions", "react-hook-form", "zod"], isFullstack: true, },

    { title: "Multi-step form", img: "/multi_step_form.jpg", alt: "multi-step form app", link: "https://multi-stepformreact.netlify.app/", github: "https://github.com/mateuszbizon/multi-step-form-react", technologies: ["Scss", "TypeScript", "React", "react-hook-form", "zod"], isFullstack: false, customIdea: { title: "Frontend Mentor", link: "https://www.frontendmentor.io/challenges" }, },

    { title: "Social media dashboard", img: "/social_media_dashboard.jpg", alt: "social media dashboard app", link: "https://social-media-dashboard-nextjs-two.vercel.app/", github: "https://github.com/mateuszbizon/social_media_dashboard_nextjs", technologies: ["TypeScript", "Next.js", "TailwindCSS"], isFullstack: false, customIdea: { title: "Frontend Mentor", link: "https://www.frontendmentor.io/challenges" }, },
]

export const SKILLS_LIST = [
    { title: "Html", icon: HtmlColorIcon(), },
    { title: "Css", icon: CssColorIcon(), },
    { title: "Sass", icon: SassColorIcon(), },
    { title: "TypeScript", icon: TypescriptColorIcon(), },
    { title: "Git", icon: GitColorIcon(), },
    { title: "React", icon: ReactColorIcon(), },
    { title: "TailwindCSS", icon: TailwindColorIcon(), },
    { title: "Next.js", icon: NextjsColorIcon(), },
]