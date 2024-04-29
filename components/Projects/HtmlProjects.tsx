import React from "react";
import ProjectsContainer from "./ProjectsContainer";

const HTML_CSS_PROJECTS: ProjectType[] = [
  { title: "Recipe page", img: "/recipe.jpg", alt: "recipe app", link: "https://mateuszbizon.github.io/recipe_page/", github: "https://github.com/mateuszbizon/recipe_page" },
]

function HtmlProjects() {
	return <ProjectsContainer projects={HTML_CSS_PROJECTS} />;
}

export default HtmlProjects;
