import CssTech from "@/components/technologies/CssTech";
import HtmlTech from "@/components/technologies/HtmlTech";
import JavascriptTech from "@/components/technologies/JavascriptTech";
import NextjsTech from "@/components/technologies/NextjsTech";
import ReactTech from "@/components/technologies/ReactTech";
import ScssTech from "@/components/technologies/ScssTech";
import TailwindTech from "@/components/technologies/TailwindTech";
import TypescriptTech from "@/components/technologies/TypescriptTech";
import { Technology } from "@/types";

export const technologyMap = {
    [Technology.HTML]: HtmlTech,
    [Technology.CSS]: CssTech,
    [Technology.SCSS]: ScssTech,
    [Technology.JavaScript]: JavascriptTech,
    [Technology.React]: ReactTech,
    [Technology.Typescript]: TypescriptTech,
    [Technology.Tailwind]: TailwindTech,
    [Technology.Nextjs]: NextjsTech,
  };