import React from 'react'
import Accordions from './lists/Accordions'
import { AccordionType } from '@/types'

export const ABOUT_ACCORDIONS: AccordionType[] = [
  { title: "Private", text: "I was born in Lubań (Poland) and I live in Jerzmanki (2 km from Zgorzelec) in the Lower Silesian Voivodeship in Poland. In my free time I solve Rubik's Cube on time. I have been doing this for over 5 years. I took part in several competitions and achieved results around 18 seconds. <br /><br /> In addition I love listening to music and play computer games and of course I love creating web applications for various purposes." },
  { title: "Profession", text: "I am currently looking for a job as a front-end developer, specializing in the React library. I started learning front-end at a technical school in 2018, where I learned the basics of programming in C++, and then moved on to HTML, CSS and JavaScript. <br /><br /> I became more seriously interested in front-end in college, where I learned Git, Github, React and the difference between front-end and back-end." },
  { title: "Education", text: "In March 2024 I graduated in engineering studies in computer science at Collegium Witelona in Legnica in Poland." }
]

function About() {
  return (
    <section id='about' className='section'>
      <h2 className='title-2 title-margin-bottom'>About</h2>
      <Accordions accordions={ABOUT_ACCORDIONS} />
    </section>
  )
}

export default About