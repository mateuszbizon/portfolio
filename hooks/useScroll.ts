import React, { useEffect, useState } from 'react'

function useScroll(scrollYOffset: number) {
    const [elementActive, setElementActive] = useState(false)

    function handleScroll() {
        if (window.scrollY >= scrollYOffset) {
            setElementActive(true)
            return;
        }

        setElementActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return {
    elementActive,
  }
}

export default useScroll