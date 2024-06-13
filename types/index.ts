export enum Technology {
    HTML = "html",
    CSS = "css",
    SCSS = "scss",
    JavaScript = "javascript",
    React = "react",
    Typescript = "typescript",
    Tailwind = "tailwind",
    Nextjs = "nextjs",
}

export type AccordionType = {
    title: string;
    text: string;
}

export type ProjectType = {
    title: string;
    img: string;
    alt: string;
    link: string;
    github: string;
    technologies: Technology[];
}