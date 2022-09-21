
import React from 'react'


function MobileNav() {
	
  return (
	<div className="flex flex-col md:hidden w-screen justify-center items-center h-screen bg-red-400 absolute top-0 z-10 ">
		<ul className="text-3xl text-center">
				<li className="my-2"><a href='#'>Home</a></li>
				<li className="my-2"><a href='#'>About</a></li>
				<li className="my-2"><a href='#'>Services</a></li>
				<li className="my-2"><a href='#'>Book An Event</a></li>

			</ul>
			<button className="  my-2 nav-btn w-[150px] h-[50px]  font-semibold">Enter</button>
	</div>
  )
}

export default MobileNav