import { motion } from 'framer-motion'
import { useState } from 'react'

interface ServiceIconProps {
	icon: string
	description: string
	url: string
}

export default function ServiceIcon({ icon, description, url }: ServiceIconProps) {
	const [toggle, setToggle] = useState(false)
	return (
		<li
			className="flex w-1/2 flex-col items-center justify-center space-y-4 p-4 text-center text-gray-500 hover:cursor-pointer hover:text-orange-600 lg:w-1/4"
			onClick={() => setToggle((prev) => !prev)}
		>
			<img src={`/icons/${icon}.svg`} alt={icon} className="h-24" />
			<div className="">{description}</div>
			{toggle && (
				<motion.div
					initial={{ scale: 0, x: -100 }}
					animate={{ scale: 1, x: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center"
				>
					<img src={url} alt="image" />
				</motion.div>
			)}
		</li>
	)
}
