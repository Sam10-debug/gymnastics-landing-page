
import React, { useContext } from 'react'
import HeroSection from './HeroSection'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import {LoginContext} from '../components/Context/Context'


function MainPage() {
	const {showMobileNav,setShowMobileNav}= useContext(LoginContext)
  return (
	<div className="main-page md:px-8">
		{/* <NavBar /> */}
		{/* {showMobileNav&&<MobileNav />} */}
		<HeroSection />
	</div>
  )
}

export default MainPage