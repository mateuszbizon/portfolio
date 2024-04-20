import React, { useState } from 'react'

function useAccordions(defaultIndex?: number) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(!defaultIndex ? 0 : defaultIndex);

    function handleSetIndexAccordion(index: number) {
        if (index == currentIndex) {
            setCurrentIndex(null)
            return;
        }

        setCurrentIndex(index);
    }

  return {
    currentIndex,
    handleSetIndexAccordion,
  }
}

export default useAccordions