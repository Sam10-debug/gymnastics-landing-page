
import React from 'react'
import heroImg from '../Img/hero/image.png'

function HeroSection() {
  return (
		<section className=" flex flex-col-reverse md:flex-row h-screen ">
			<div className="flex-1 relative flex flex-col justify-center items-start mt-4 md:mt-0">
				<h2 className="text-2xl mx-auto md:mx-0 text-white">ARE YOU READY TO</h2>
				<h1 className="text-5xl px-1 md:px-0 text-white font-bold text-center md:text-left leading-[72px] ">GET FIT, STRONG AND MOTIVATED!</h1>
				
				<div className="flex md:absolute bottom-2 mx-auto  md:mx-0">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z" fill="white"/>
									</svg>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z" fill="white"/>
									</svg>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z" fill="white"/>
									</svg>
									


				
				</div>
			</div>
			<div className="flex-1 flex justify-center md:justify-start">
				<img src={heroImg} alt="hero-section image" className="" />
			</div>
		</section>
  )
}

export default HeroSection