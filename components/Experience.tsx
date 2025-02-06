import React from 'react'
import RevealInView from './RevealInView'
import { EXPERIENCE_LIST } from '@/constants'

function Experience() {
  return (
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
  )
}

export default Experience