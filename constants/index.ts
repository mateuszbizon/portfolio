import CssColorIcon from "@/public/icons/CssColorIcon"
import EmailIcon from "@/public/icons/EmailIcon"
import GitColorIcon from "@/public/icons/GitColorIcon"
import GithubIcon from "@/public/icons/GithubIcon"
import HtmlColorIcon from "@/public/icons/HtmlColorIcon"
import LinkedInIcon from "@/public/icons/LinkedInIcon"
import NextjsColorIcon from "@/public/icons/NextjsColorIcon"
import PhoneIcon from "@/public/icons/PhoneIcon"
import ReactColorIcon from "@/public/icons/ReactColorIcon"
import SassColorIcon from "@/public/icons/SassColorIcon"
import TailwindColorIcon from "@/public/icons/TailwindColorIcon"
import TypescriptColorIcon from "@/public/icons/TypescriptColorIcon"
import { ProjectType } from "@/types"

export const EXPERIENCE_LIST = [
    { title: "07/2023 - 08/2023: Sharply, Legnica (Internship)", role: "Front-end, back-end" },
    { title: "08/2022 - 09/2022: Sharply, Legnica (Internship)", role: "Front-end, back-end" },
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

export const CONTACT_INFO_LIST = [
    { icon: EmailIcon(), text: "mat-biz@wp.pl" },
    { icon: PhoneIcon(), text: "+48 723 875 386" },
]

export const SOCIAL_LINKS_LIST = [
    { name: "Github", link: "https://github.com/mateuszbizon", icon: GithubIcon(), },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/mateusz-bizo%C5%84-ab5672304/", icon: LinkedInIcon(), },
  ]