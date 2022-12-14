
import React from 'react'
import heroImg from '../Img/hero/image.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function HeroSection() {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})

  return (
		<section className=" flex flex-col-reverse md:flex-row h-screen ">
			<div className="flex-1 relative flex flex-col justify-center items-start mt-4 md:mt-0">
				<h2 className="text-2xl mx-auto md:mx-0 text-white" data-aos="fade-down">ARE YOU READY TO</h2>
				<h1 className="text-5xl px-1 md:px-0 text-white font-bold text-center md:text-left leading-[72px] " data-aos="zoom-in-up">GET FIT, STRONG AND MOTIVATED!</h1>
				
				<div className="flex md:absolute bottom-2 mx-auto  md:mx-0">
				


				
				</div>
			</div>
			<div className="flex-1 flex justify-center md:justify-start">
				<img src={heroImg} alt="hero-section image" className="" data-aos="zoom-in" />
			</div>
		</section>
  )
}

export default HeroSection