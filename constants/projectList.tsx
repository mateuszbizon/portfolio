import { Project } from "@/types";

export const PROJECT_LIST: Project[] = [
    {
        title: "Link-sharing Application",
        description: "Implemented web application for link-sharing for developers",
        img: "/devlinks.png",
        alt: "link-sharing application",
        githubLink: "https://github.com/mateuszbizon/devLinks",
        technologies: [
            "Next.js",
            "TailwindCSS",
            "Redux",
            "Express.js",
            "Prisma",
            "PostgreSql"
        ],
        results: [
            "Implemented cookie-based authentication using JWT",
            "Optimized storing images in database by integrating back-end with external cloud-based image management service"
        ],
        isFullstack: true,
        isCustomIdea: {
			name: "Frontend Mentor",
			link: "https://www.frontendmentor.io/challenges",
		},
    },
	{
		title: "Product Feedback Application",
        description: "Implemented web application for collecting feedback from users for products",
		img: "/product_feedback.jpg",
		alt: "product feedback application",
		githubLink: "https://github.com/mateuszbizon/product_feedback",
		technologies: [
			"Next.js",
			"TailwindCSS",
			"MongoDB",
			"Clerk",
		],
        results: [],
		isFullstack: true,
		isCustomIdea: {
			name: "Frontend Mentor",
			link: "https://www.frontendmentor.io/challenges",
		},
	},
	{
		title: "Piggy Bank Online Application",
        description: "Designed and implemented web application for managing personal finances",
		img: "/piggy_bank_online.jpg",
		alt: "piggy bank online application",
		githubLink: "https://github.com/mateuszbizon/piggy_bank_app_nextjs",
		technologies: [
			"Next.js",
			"TailwindCSS",
			"MongoDB",
			"Clerk",
		],
        results: [],
		isFullstack: true,
	},
	{
		title: "Multi-step Form Project",
        description: "Implemented only front-end project for multi-step form",
		img: "/multi_step_form.jpg",
		alt: "multi-step form project",
		githubLink: "https://github.com/mateuszbizon/multi-step-form-react",
		technologies: [
            "Scss",
            "Typescript", 
            "React", 
            "react-hook-form", 
            "Zod"
        ],
        results: [],
		isFullstack: false,
		isCustomIdea: {
			name: "Frontend Mentor",
			link: "https://www.frontendmentor.io/challenges",
		},
	},
];
