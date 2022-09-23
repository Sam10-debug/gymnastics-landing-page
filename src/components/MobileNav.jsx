
import React from 'react'
import {Link } from 'react-router-dom/cjs/react-router-dom.min'


function MobileNav() {
	
  return (
	<div className="flex flex-col md:hidden w-screen justify-center items-center h-screen bg-red-400 absolute top-0 z-10 ">
		<ul className="text-3xl text-center">
				<li className="my-2"><Link to='/'>Home</Link></li>
				<li clLinkssName="my-2"><Link to='/about'>About</Link></li>
				<li className="my-2"><Link to='/services'>Services</Link></li>
				

			</ul>
			<button className="  my-2 nav-btn w-[150px] h-[50px]  font-semibold">Enter</button>
	</div>
  )
}

export default MobileNav