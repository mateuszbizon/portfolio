import React from 'react'

type Props = {
    children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto'>
        {children}
    </div>
  )
}

export default Container