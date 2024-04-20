import React from 'react'
import Accordions from './ui/Accordions'
import { ABOUT_ACCORDIONS } from "@/constants";

function About() {
  return (
    <section id='about' className='section main-padding-x'>
        <h2 className='title-2 mb-14'>O mnie</h2>
        <Accordions accordions={ABOUT_ACCORDIONS} />
    </section>
  )
}

export default About