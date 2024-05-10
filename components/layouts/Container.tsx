import React from 'react'

type Props = {
    children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className='w-[90%] lg:w-[80%] xl:w-[75%] mx-auto h-full'>
        {children}
    </div>
  )
}

export default Container