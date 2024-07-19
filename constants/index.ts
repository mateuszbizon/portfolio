import { ProjectType } from "@/types"

export const EXPERIENCE_LIST = [
    { title: "07/2023 - 08/2023: Sharply, Legnica (Internship)", role: "Front-end, back-end" },
    { title: "08/2022 - 09/2022: Sharply, Legnica (Internship)", role: "Front-end, back-end" },
]

export const PROJECTS_LIST: ProjectType[] = [
    { title: "Product feedback app", img: "/product_feedback.jpg", alt: "product feedback app", link: "https://productfeedbackappfm.netlify.app/", github: "https://github.com/mateuszbizon/product_feedback", technologies: ["Html", "Css", "TypeScript", "Next.js", "TailwindCSS", "MongoDB", "Clerk", "server actions"], isFullstack: true, customIdea: { title: "Frontend Mentor", link: "https://www.frontendmentor.io/challenges" }, },

    { title: "Piggy bank online", img: "/piggy_bank_online.jpg", alt: "piggy bank online app", link: "https://piggybankonline.vercel.app/", github: "https://github.com/mateuszbizon/piggy_bank_app_nextjs", technologies: ["Html", "Css", "TypeScript", "Next.js", "TailwindCSS", "MongoDB", "Clerk", "server actions"], isFullstack: true, },

    { title: "Multi-step form", img: "/multi_step_form.jpg", alt: "multi-step form app", link: "https://multi-stepformreact.netlify.app/", github: "https://github.com/mateuszbizon/multi-step-form-react", technologies: ["Html", "Css", "Scss", "TypeScript", "React"], isFullstack: false, customIdea: { title: "Frontend Mentor", link: "https://www.frontendmentor.io/challenges" }, },

    { title: "Social media dashboard", img: "/social_media_dashboard.jpg", alt: "social media dashboard app", link: "https://social-media-dashboard-nextjs-two.vercel.app/", github: "https://github.com/mateuszbizon/social_media_dashboard_nextjs", technologies: ["Html", "Css", "TypeScript", "Next.js", "Tailwind"], isFullstack: false, customIdea: { title: "Frontend Mentor", link: "https://www.frontendmentor.io/challenges" }, },
]