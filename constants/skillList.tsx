import { Group, Skill } from "@/types";

export const SKILL_LIST: Group<Skill>[] = [
    {
        name: "Programming Languages",
        items: [
            {
                name: "HTML",
                level: "solid",
            },
            {
                name: "CSS",
                level: "solid",
            },
            {
                name: "SCSS",
                level: "solid",
            },
            {
                name: "Typescript",
                level: "solid",
            },
        ]
    },
    {
        name: "Frameworks",
        items: [
            {
                name: "React",
                level: "solid",
            },
            {
                name: "Next.js",
                level: "solid",
            },
            {
                name: "TailwindCSS",
                level: "solid",
            },
            {
                name: "Express.js",
                level: "basic",
            },
        ]
    },
    {
        name: "Databases",
        items: [
            {
                name: "PostgreSQL",
                level: "basic",
            },
            {
                name: "MongoDB",
                level: "basic",
            },
        ]
    },
    {
        name: "Libraries",
        items: [
            {
                name: "TanStack Query",
            },
            {
                name: "Shadcn",
            },
            {
                name: "Redux",
            },
            {
                name: "Zod",
            },
        ]
    },
    {
        name: "Tools",
        items: [
            {
                name: "Visual Studio Code",
                level: "solid",
            },
            {
                name: "Figma",
                level: "basic",
            },
        ]
    },
    {
        name: "Soft Skills",
        items: [
            {
                name: "Team work",
            },
        ]
    },
]