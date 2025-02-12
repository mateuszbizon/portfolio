import React from 'react'

type ProjectResultCardProps = {
    result: string;
}

function ProjectResultCard({ result }: ProjectResultCardProps) {
  return (
    <li className='text-dark-1 marker:text-primary-1'>{result}</li>
  )
}

export default ProjectResultCard