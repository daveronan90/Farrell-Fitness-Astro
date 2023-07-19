export interface service {
	desc: string
	duration: string
	price: string
}

export interface ServiceGroup {
	category: string
	services: service[]
}

export const defaultPriceList: ServiceGroup[] = [
	{
		category: 'price list',

		services: [
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' }
		]
	},
	{
		category: 'programming',

		services: [
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' }
		]
	},
	{
		category: 'sports message',

		services: [
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' }
		]
	},
	{
		category: 'styku body scans',

		services: [
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' },
			{ desc: '', duration: '', price: '' }
		]
	}
]
