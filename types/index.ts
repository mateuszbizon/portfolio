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

export type ProjectType = {
    title: string;
    img: string;
    alt: string;
    link: string;
    github: string;
    technologies: string[];
    isFullstack: boolean;
    customIdea?: {
        title: string;
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