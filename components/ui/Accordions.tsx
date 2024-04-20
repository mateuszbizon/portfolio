"use client";

import useAccordions from "@/hooks/useAccordions";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
    accordions: AccordionType[];
}

function Accordions({ accordions }: Props) {
	const { currentIndex, handleSetIndexAccordion } = useAccordions(0);

	return (
		<div className='flex flex-col'>
			{accordions.map((item, index) => {
				const isActive = currentIndex == index ? true : false;

				return (
					<div key={item.title} className='border-b border-b-light-3 first:border-t first:border-t-light-3 text-lg md:text-xl'>
						<button
							className={`flex justify-between py-5 px-6 hover:bg-light-2 transition duration-300 w-full ${isActive && "bg-light-2 text-primary-2 font-medium"}`}
							onClick={() => handleSetIndexAccordion(index)}>
							<span>{item.title}</span>
                            <ChevronDownIcon className={`h-6 w-6 transition-all duration-300  ${isActive && "rotate-[-180deg]"}`} />
						</button>
						<div className={`grid px-6 transition-all duration-200 ${isActive ? "grid-rows-[1fr] py-6" : "grid-rows-[0fr]"}`}>
                            <div className='overflow-hidden' dangerouslySetInnerHTML={{ __html: item.text }}></div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Accordions;
