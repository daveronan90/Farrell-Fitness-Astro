import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { defaultClasses } from '../js/classesData'
import { getGoogleSheetsData } from '../js/googleSheets'

export default function ClassTimetable() {
	const [classes, setClasses] = useState(defaultClasses)

	useEffect(() => {
		getGoogleSheetsData('Timetable', setClasses)
	}, [])

	return (
		<motion.div
			initial={{
				opacity: 0,
				x: -100
			}}
			whileInView={{
				opacity: 1,
				x: 0
			}}
			transition={{ duration: 0.5 }}
			className="mb-12 flex w-full flex-col items-start justify-center md:mb-24"
		>
			<div className="mb-3 flex flex-col space-y-1 text-2xl md:mb-6 md:text-3xl">
				<h1>summer timetable</h1>
				<h2 className="text-xs text-gray-500 md:text-base">may 29 to 3 september</h2>
			</div>
			<div className="grid-rows-9 grid w-full whitespace-normal text-center text-xxxs font-black md:text-sm">
				{classes.map((row, rIdx) => (
					<div key={rIdx} className={`grid grid-cols-8 gap-[0.1rem]`}>
						{row.map((cell, cIdx) => (
							<div
								key={cIdx}
								className={`flex items-center justify-center px-4 py-2 md:py-4 ${
									cIdx === 0 && 'text-xxs text-orange-600 md:text-base '
								}
            ${rIdx === 0 && cIdx !== 0 && 'bg-orange-600 text-xxs md:text-base '}
            ${rIdx !== 0 && rIdx % 2 === 0 && 'bg-gray-600 '}
            ${cell !== null && rIdx !== 0 && cIdx !== 0 && 'border'}
            `}
							>
								{cell !== 'null' && cell}
							</div>
						))}
					</div>
				))}
			</div>
		</motion.div>
	)
}
