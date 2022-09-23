
import React from 'react'
import {Link } from 'react-router-dom/cjs/react-router-dom.min'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function MobileNav() {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
  return (
	<div className="flex flex-col md:hidden w-screen justify-center items-center h-full bg-white absolute top-0 z-10 " data-aos="fade-left">
		<ul className="text-3xl text-center">
				<li className="my-4" data-aos="fade-left"><Link to='/'>Home</Link></li>
				<li clLinkssName="my-4" data-aos="fade-right"><Link to='/about'>About</Link></li>
				<li className="my-4" data-aos="fade-up"><Link to='/services'>Services</Link></li>
				

			</ul>
			<button className="  my-2 nav-btn w-[150px] h-[50px]  font-semibold">Enter</button>
	</div>
  )
}

export default MobileNav