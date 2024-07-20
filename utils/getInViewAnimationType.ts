import { AnimationInViewType } from "@/types";

export function getInViewAnimationType(animationType: string) {
    const animationsType: { [key: string]: AnimationInViewType } = {
        "animate-from-down": { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } },
        "animate-from-right": { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } },
        "animate-from-left": { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } },
    }

    return animationsType[animationType] || animationsType["animate-from-down"]
}