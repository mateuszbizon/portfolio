import React from 'react'

const LEVEL_CIRCLE = (
    <div className='size-4 rounded-full border border-grey-1'></div>
)

const LEVEL_CIRCLE_FILLED = (
    <div className='size-4 rounded-full border border-grey-1 bg-primary-1'></div>
)

const CIRCLES = new Array(5).fill(LEVEL_CIRCLE)
const CIRCLES_FILLED = new Array(5).fill(LEVEL_CIRCLE_FILLED)

type SkillLevelProps = {
    skillLevel?: string
}

function SkillLevel({ skillLevel }: SkillLevelProps) {
    function getSkillLevelNumber() {
        const skillLevels: { [key: string]: number } = {
            "newbie": 1,
            "basic": 2,
            "solid": 3,
            "advanced": 4,
            "expert": 5,
        }

        if (!skillLevel) {
            return 0
        }

        return skillLevels[skillLevel]
    }

  return (
    <div className='space-y-3'>
        <div className='flex gap-3'>
            <div className='flex gap-3'>
                {CIRCLES_FILLED.slice(0, getSkillLevelNumber())}
            </div>
            <div className='flex gap-3'>
                {CIRCLES.slice(0, CIRCLES.length - getSkillLevelNumber())}
            </div>
        </div>
        <p className='text-center'>{skillLevel}</p>
    </div>
  )
}

export default SkillLevel