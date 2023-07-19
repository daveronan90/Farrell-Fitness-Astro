import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getGoogleSheetsData } from '../js/googleSheets'
import { defaultPriceList } from '../js/pricingData'

export default function PriceList() {
	const [priceList, setPriceList] = useState(defaultPriceList)

	useEffect(() => {
		getGoogleSheetsData('PriceList', setPriceList)
	}, [])

	return (
		<div className="text-xxs md:text-base">
			<div className="font-light">
				{priceList.map(({ category, services }, cIndex) => (
					<div key={cIndex} className="w-full">
						<div>
							<div className="py-4 text-base font-medium md:text-2xl">{category}</div>
						</div>
						{services.map(({ desc, duration, price }, sIndex) => (
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.2, delay: sIndex * 0.05 }}
								key={sIndex}
								className="ml-2 flex font-normal md:ml-4"
							>
								<div className="py-3">{desc}</div>
								<div className="flex-grow px-2 py-3 md:px-12">
									{duration !== 'null' && duration}
								</div>
								<div className="py-3">{`${price != '0' ? `€${price}` : ''}`}</div>
							</motion.div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}
