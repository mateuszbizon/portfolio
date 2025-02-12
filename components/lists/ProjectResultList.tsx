import React from 'react'

type ProjectResultListProps = {
    results: string[]
    renderItem: (item: string, index: number) => React.ReactNode
}

function ProjectResultList({ results, renderItem }: ProjectResultListProps) {
  return (
    <ul className='space-y-1 list-disc list-inside'>
        {results.map((item, index) => renderItem(item, index))}
    </ul>
  )
}

export default ProjectResultList