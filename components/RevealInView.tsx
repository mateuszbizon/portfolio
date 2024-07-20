"use client"

import { getInViewAnimationType } from '@/utils/getInViewAnimationType';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { ReactNode, useEffect, useRef } from 'react'

type Props = {
    children: ReactNode;
    animationType?: "animate-from-down" | "animate-from-right" | "animate-from-left";
}

function RevealInView({ children, animationType }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref}>
        <motion.div 
            variants={{
                hidden: animationType ? getInViewAnimationType(animationType).hidden : getInViewAnimationType("animate-from-down").hidden,
                visible: animationType ? getInViewAnimationType(animationType).visible : getInViewAnimationType("animate-from-down").visible,
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default RevealInView