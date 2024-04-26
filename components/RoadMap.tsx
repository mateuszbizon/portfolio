import React from 'react'

const ROAD_MAP_ITEMS = ["HTML", "CSS", "JavaScript", "Git & Github", "SCSS", "Node.js", "React.js", "Express.js", "TypeScript", "TailwindCSS", "Next.js", "Docker"]

function RoadMap() {
  return (
    <section id='road-map' className='section main-padding-x'>
        <h2 className='title-2 title-margin-bottom'>Plan nauki</h2>
        <div className='relative w-1 rounded-lg bg-light-3 mx-auto' style={{ height: `${(ROAD_MAP_ITEMS.length * 100) - 100}px` }}>
            {ROAD_MAP_ITEMS.map((item, index) => {
                const isElementEven = (index + 1) % 2 == 0 ? true : false;

                return (
                    <div key={item} className={`flex gap-2 sm:gap-8 sm:text-lg absolute ${isElementEven ? "-right-2" : "-left-2"}`} style={{ top: `${index * 100}px` }}>
                        <div className={`w-5 h-5 bg-primary-1 rounded-full ${isElementEven && "order-1"}`}></div>
                        <div className='px-4 py-2 w-min text-center bg-light-1 border border-light-3 rounded-lg'>
                            {item}
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default RoadMap