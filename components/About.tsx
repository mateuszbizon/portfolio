import { EXPERIENCE_LIST } from '@/constants'
import Image from 'next/image'
import React from 'react'
import RevealInView from './RevealInView'

function About() {
  return (
    <section id='about' className='section'>
      <RevealInView>
        <h2 className='title-2 title-margin-bottom gradient-text text-center lg:text-left'>About Me</h2>
      </RevealInView>
      <div className='space-y-5'>
        <div className='lg:hidden container-2'>
          <figure className='w-[200px] h-[200px] mx-auto'>
            <Image src={"/profile_photo.jpg"} width={200} height={200} alt='photo of the portfolio author' className='w-full h-full object-cover rounded-3xl' />
          </figure>
        </div>

        <RevealInView>
          <div className='container-2'>
            <h3 className='title-3 mb-5 text-primary-1'>Private</h3>
            <article className='md:text-lg text-dark-1'>
              I was born in Lubań (Poland) and I live in Jerzmanki (2 km from Zgorzelec) in the Lower Silesian Voivodeship in Poland. In my free time I solve Rubik's Cube on time. I have been doing this for over 5 years. I took part in several competitions and achieved results around 18 seconds. <br /><br /> In addition I love listening to music and play computer games and of course I love creating web applications for various purposes.
            </article>
          </div>
        </RevealInView>

        <RevealInView>
          <div className='container-2'>
            <h3 className='title-3 mb-5 text-primary-1'>Experience</h3>
            <article className='md:text-lg text-dark-1 space-y-5'>
              {EXPERIENCE_LIST.map((item) => {
                return (
                  <div key={item.title} className='space-y-2'>
                    <p className='font-medium'>{item.title}</p>
                    <p className='pl-2'><span className='mr-2'>Role:</span>{item.role}</p>
                  </div>
                )
              })}
            </article>
          </div>
        </RevealInView>
      </div>
    </section>
  )
}

export default About