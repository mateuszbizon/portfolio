import { ReactNode } from "react";

export type Experience = {
    name: string;
    role: string;
    company: {
        name: string;
        street: string;
        city: string;
    }
    duration: string;
    project: {
        title: string;
        description: string;
        technologies: string[]
        results: string[]
    }
}

export type Education = {
    name: string;
    title: string;
    degree: string;
    school: {
        name: string;
        city: string;
    }
    duration: string;
    description: string;
}

export type Project = {
    title: string;
    description: string;
    img: string;
    alt: string;
    githubLink: string;
    technologies: string[];
    isFullstack: boolean;
    isCustomIdea?: {
        name: string;
        link: string;
    }
}

export type SkillType = {
    title: string;
    icon: ReactNode;
}

export type AnimationInViewType = {
    hidden: {
        opacity: number;
        y?: number;
        x?: number;
    }
    visible: {
        opacity: number;
        y?: number;
        x?: number;
    }
}