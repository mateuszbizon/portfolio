import React from 'react'
import Accordions from './ui/Accordions'

export const ABOUT_ACCORDIONS: AccordionType[] = [
  { title: "Prywatnie", text: "Urodziłem się w Lubaniu, a mieszkam w Jerzmankach (2 km od Zgorzelca) w województwie dolnośląskim. W wolnym czasie układam kostkę Rubika na czas, co jest moją wielką pasją od ponad 5 lat. Wystąpiłem w kilku zawodach, wyciągając przy tym wyniki w okolicach poniżej 18 sekund. <br /><br /> Ponadto uwielbiam słuchać muzyki oraz grać w gry komputerowe, a także - jakby mogło być inaczej, tworzę aplikacje internetowe w różnych celach." },
  { title: "Zawodowo", text: "Aktualnie szukam pracy jako front-end developer, specjalizując się w bibliotece React. Front-endu zacząłem się uczyć w technikum 2018 roku, gdzie poznawałem podstawy programowania w języku C++, a potem przeszedłem na HTML, CSS oraz JavaScript. <br /><br /> Bardziej poważnie zacząłem się interesować front-endem na studiach, gdzie poznałem Git, Github, React czy różnicę pomiędzy front-endem a back-endem." },
  { title: "Naukowo", text: "W marcu 2024 roku ukończyłem studia inżynierskie na kierunku informatyka w Collegium Witelona w Legnicy. Aktualnie nie planuję iść na dalsze studia, gdyż chcę skupić się na znalezieniu pracy, ale w przyszłości chciałbym pójść na studia magisterskie." }
]

function About() {
  return (
    <section id='about' className='section main-padding-x'>
        <h2 className='title-2 title-margin-bottom'>O mnie</h2>
        <Accordions accordions={ABOUT_ACCORDIONS} />
    </section>
  )
}

export default About