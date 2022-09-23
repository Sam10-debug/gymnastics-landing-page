import service1 from '../Img/services/services5.jpg'
import service2 from '../Img/services/services2.jpg'
import service3 from '../Img/services/services3.jpg'
import service4 from '../Img/services/services4.jpg'

import React from 'react'

function Services() {
  return (
	<section className="service ">
		<h1 className="text-3xl text-center mx-2 text-slate-600">What type of classes  are you interested in?</h1>
		<p className="text-center mx-1 py-4 text-slate-500">From group exercise classes, to swim lessons and art workshops, there's a perfect class for you. Select the  type of program you're looking for </p>
		<div className="container px-2 flex flex-col">
			<div className="md:h-[300px] ">
				<img src={service1} alt="gym-image" className='md:h-[300px] ' />
				<h5 className="text-center text-2xl text-slate-500 italic">Weight Lifting</h5>
			</div>
			<div className="md:h-[300px] my-4 md:my-0 ">
				<img src={service2} alt="gym-image" className='md:h-[300px]' /> 
				<h5 className="text-center text-2xl text-slate-500 italic">Battling ropes</h5>
			</div>
			<div className="md:h-[300px] my-4 md:my-0 ">
				<img src={service3} alt="gym-image" className='md:h-[300px]' /> 
				<h5 className="text-center text-2xl text-slate-500 italic">Squats</h5>
			</div>
			<div className="md:h-[300px] ">
				<img src={service4} alt="gym-image" className='md:h-[300px] ' />
				<h5 className="text-center text-2xl text-slate-500 italic">Fitness Test</h5>
			</div>
		</div>
	</section>
  )
}

export default Services