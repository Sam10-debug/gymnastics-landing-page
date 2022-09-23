import React from 'react'
import logo from '../Img/common/gym-logo.png'
import { LoginContext } from './Context/Context'
import {useContext} from 'react'
import {Link } from 'react-router-dom/cjs/react-router-dom.min'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function NavBar() {
	const {showMobileNav,setShowMobileNav}=useContext(LoginContext)
	console.log(showMobileNav)
	
	const ShowMobileNav=()=>{
		setShowMobileNav(prev=>!prev)
	}
	useEffect(()=>{
		AOS.init({duration: 2000})
	})


  return (
	<header className="w-full px-2  py-4 md:py-8 items-center justify-center bg-white sticky top-0 z-50 " data-aos="zoom-in-down">
		<nav className="flex w-full justify-between items-center">
			<img src={logo} alt="logo" className="w-8 h-8" />
			<ul className="hidden md:flex w-1/2 justify-between">
				<li className=""><Link to='/'>Home</Link></li>
				<li className=""><Link to='/about'>About</Link></li>
				<li className=""><Link to='/services'>Services</Link></li>
				
	
			</ul>
			<button className="hidden md:block nav-btn w-[150px] h-[50px]  font-semibold">Enter</button>
			<svg onClick={ShowMobileNav} className='md:hidden z-[9999]' width="36px"  height="36px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
			<g id="color"/>
			<g id="hair"/>
			<g id="skin"/>
			<g id="skin-shadow"/>
			<g id="line">
				<line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
				<line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
				<line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
			</g>
			</svg>

		</nav>
	</header>
  )
}

export default NavBar