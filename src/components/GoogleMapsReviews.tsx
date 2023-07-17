import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Review, defaultReviews } from '../js/reviewsData'

function reduceWords(string: string, limit: number) {
	const words = string.trim().split(' ')

	if (words.length <= limit) {
		return string
	}

	const reducedWords = words.slice(0, limit)
	const reducedString = reducedWords.join(' ')

	return `${reducedString}...`
}

const GoogleMapsReviews = () => {
	const [reviews, setReviews] = useState(defaultReviews)

	const getData = async () => {
		try {
			const data = await fetch(
				// 'https://cors-anywhere.herokuapp.com/' +
				`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ57zwmbi2QkgRVTALYHxr62g&fields=reviews&key=${
					import.meta.env.PUBLIC_PLACES_API_KEY
				}`
			)
			const res = await data.json()

			setReviews(res.result.reviews)
			return
		} catch (error) {
			console.error('Error Message:', error)
			return
		}
	}
	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<section className="my-12">
				<div className="">
					<div className="-m-4 flex flex-wrap">
						{reviews.map((review, index) => (
							<motion.div
								initial={{
									opacity: 0,
									x: index % 2 === 0 ? -100 : 100,
									y: index % 2 === 0 ? -100 : 100
								}}
								whileInView={{ opacity: 1, x: 0, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								key={index}
								className="mb-6 p-4 lg:mb-0 lg:w-1/3"
							>
								<div className="h-full text-center">
									<img
										alt="testimonial"
										className="mb-8 inline-block h-20 w-20 rounded-full border-2 border-orange-200 bg-orange-100 object-cover object-center"
										src={review.profile_photo_url}
									/>
									<a href={review.author_url} className="hover:text-orange-800">
										<p className="text-sm leading-relaxed">{reduceWords(review.text, 30)}</p>
									</a>
									<span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-orange-500"></span>
									<h2 className="title-font text-sm font-bold tracking-wider text-orange-600">
										{review.author_name}
									</h2>
									<p className="flex items-center justify-center text-orange-500">
										{Array.from({ length: review.rating }, () => 1).map((_, index) => (
											<svg
												key={index}
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="gold"
												width="24"
												height="24"
											>
												<path d="M12 17.27l-6.16 3.75 1.64-7.14L2.34 9.12l7.19-.62L12 2l2.47 6.5 7.19.62-5.14 4.76 1.64 7.14L12 17.27z" />
											</svg>
										))}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default GoogleMapsReviews
