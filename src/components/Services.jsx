import service1 from '../Img/services/services5.jpg'
import service2 from '../Img/services/services2.jpg'
import service3 from '../Img/services/services3.jpg'
import service4 from '../Img/services/services4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import React from 'react'

function Services() {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
  return (
	<section className="service ">
		<h1 className="text-3xl text-center mx-2 font-bold text-white" data-aos="fade-left">What type of classes  are you interested in?</h1>
		<p className="text-center mx-1 py-4 text-slate-500" data-aos="fade-left">From group exercise classes, to swim lessons and art workshops, there's a perfect class for you. Select the  type of program you're looking for </p>
		<div className="container px-2 flex flex-col" data-aos="zoom-in">
			<div className="md:h-[300px] " data-aos="fade-left">
				<img src={service1} alt="gym-image" className='md:h-[300px] ' />
				<h5 className="text-center text-2xl text-slate-500 italic">Weight Lifting</h5>
			</div>
			<div className="md:h-[300px] my-4 md:my-0 " data-aos="fade-right">
				<img src={service2} alt="gym-image" className='md:h-[300px]' /> 
				<h5 className="text-center text-2xl text-slate-500 italic">Battling ropes</h5>
			</div>
			<div className="md:h-[300px] my-4 md:my-0 " data-aos="fade-up">
				<img src={service3} alt="gym-image" className='md:h-[300px]' /> 
				<h5 className="text-center text-2xl text-slate-500 italic">Squats</h5>
			</div>
			<div className="md:h-[300px] " data-aos="fade-down">
				<img src={service4} alt="gym-image" className='md:h-[300px] ' />
				<h5 className="text-center text-2xl text-slate-500 italic">Fitness Test</h5>
			</div>
		</div>
	</section>
  )
}

export default Services