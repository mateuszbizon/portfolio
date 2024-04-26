"use client"

import React from 'react'
import { motion } from 'framer-motion'

const ROAD_MAP_ITEMS = ["HTML", "CSS", "JavaScript", "Git & Github", "SCSS", "Node.js", "React.js", "Express.js", "TypeScript", "TailwindCSS", "Next.js", "Docker"]

function RoadMap() {
    const learningElement: string = "Next.js"  

  return (
    <section id='road-map' className='section main-padding-x'>
        <h2 className='title-2 title-margin-bottom'>Plan nauki</h2>
        <div className='relative w-1 rounded-lg bg-light-3 mx-auto' style={{ height: `${(ROAD_MAP_ITEMS.length * 100) - 50}px` }}>
            {ROAD_MAP_ITEMS.map((item, index) => {
                const isElementEven = (index + 1) % 2 == 0 ? true : false;

                return (
                    <div key={item} className={`absolute ${isElementEven ? "-right-2" : "-left-2"}`} style={{ top: `${index * 100}px` }}>
                        <div className='relative flex gap-2 sm:gap-8 '>
                            <div className={`w-5 h-5 bg-primary-1 rounded-full ${isElementEven && "order-1"}`}></div>

                            <div className='px-4 py-2 w-min text-center sm:text-lg bg-light-1 border border-light-3 rounded-lg'>
                                {item}
                            </div>

                            {item === learningElement && (
                                <motion.div className={`absolute top-0 ${isElementEven ? "-right-24 sm:-right-28" : "-left-24 sm:-left-28"} px-4 py-2 w-min text-center text-primary-2 font-medium bg-light-1 border border-primary-1 rounded-lg`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, repeat: Infinity }}>
                                    Jestem tutaj!
                                </motion.div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default RoadMap