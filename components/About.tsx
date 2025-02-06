import { EDUCATION_LIST, EXPERIENCE_LIST } from '@/constants'
import Image from 'next/image'
import React from 'react'
import RevealInView from './RevealInView'
import { ABOUT } from '@/constants/about'

function About() {
  return (
    <section id='about' className='section'>
        <RevealInView>
            <h2 className='title-2 title-margin-bottom gradient-text text-center lg:text-left'>About Me</h2>
        </RevealInView>
        <div className='flex flex-col sm:flex-row justify-start sm:items-start items-center gap-5 mb-10'>
            <div className='w-[250px] sm:w-2/5 lg:hidden sm:order-2'>
                <RevealInView animationType='animate-from-right'>
                    <div className='container-2'>
                        <figure>
                            <Image src={"/profile_photo.jpg"} width={200} height={200} alt='photo of the portfolio author' className='w-full aspect-square object-cover rounded-3xl' />
                        </figure>
                    </div>
                </RevealInView>
            </div>

            <div className='sm:w-3/5 lg:w-auto'>
                <RevealInView animationType='animate-from-left'>
                    <div className='container-2'>
                        <p className='md:text-lg text-dark-1' dangerouslySetInnerHTML={{ __html: ABOUT.mainContent }}></p>
                    </div>
                </RevealInView>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div>
                <h3 className='title-3 mb-5 text-primary-2'>Experience</h3>
                <RevealInView animationType='animate-from-left'>
                    <div className='space-y-5'>
                        {EXPERIENCE_LIST.map((item) => {
                            return (
                                <div key={item.title} className='container-2 space-y-5'>
                                    <span className='bg-primary-1 text-light-1 py-2 px-4 rounded-lg'>{item.duration}</span>
                                    <div className='space-y-2'>
                                        <p className='text-lg font-medium text-dark-1'>{item.role}</p>
                                        <p className='text-primary-2'>{item.place}</p>
                                    </div>
                                    <p className='text-grey-1'>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </RevealInView>
            </div>

            <div>
                <h3 className='title-3 mb-5 text-primary-2'>Education</h3>
                <RevealInView animationType='animate-from-right'>
                    <div className='space-y-5'>
                        {EDUCATION_LIST.map((item) => {
                            return (
                                <div key={item.title} className='container-2 space-y-5'>
                                    <span className='bg-primary-1 text-light-1 py-2 px-4 rounded-lg'>{item.duration}</span>
                                    <div className='space-y-2'>
                                        <p className='text-lg font-medium text-dark-1'>{item.type}</p>
                                        <p className='text-primary-2'>{item.place}</p>
                                    </div>
                                    <p className='text-grey-1'>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </RevealInView>
            </div>
        </div>
    </section>
  )
}

export default About