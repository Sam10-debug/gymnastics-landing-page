
import React from 'react'
import man1 from '../Img/common/m.jfif'
import man2 from '../Img/common/man-2.jpg'
import woman from '../Img/common/woman.jpg'

function About() {
  return (
	<section className="about p-4  h-screen">
		<h2 className="py-4 font-bold text-3xl text-center text-white">We are a team of expert gym Instructos</h2>
		<p className="text-center py-6 md:mx-32 leading-[250%] text-slate-400">You don't want just a gym membership.You want a membership that means something.And that means you need support, expert help and a community.
		Best Body Fitness isn't just a gym.It's a full service fitness membership made for you
		</p>
		<div className="flex flex-col md:flex-row">
			<div className="flex flex-col justify-center items-center md:w-1/3 h-[280px] relative">
				<img src={man1} alt="img" className="h-[280px] w-[250px] " />
				<div className="absolute bottom-[0%] bg-white w-[250px] flex  flex-col justify-center items-center">
					<h2 className="font-bold text-2xl">Della Wilde</h2>
					<p className="text-slate-400">Chief Executive Officer</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center md:w-1/3 h-[280px] relative my-4 md:my-0">
				<img src={man2} alt="img" className="h-[280px]  w-[250px]" />
				<div className="absolute bottom-[0%] bg-white w-[250px] flex flex-col justify-center items-center">
					<h2 className="font-bold text-2xl">Arisha Riley</h2>
					<p className="text-slate-400">Vice President</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center md:w-1/3 h-[280px] relative">
				<img src={woman} alt="img" className="h-[280px]  w-[250px] " />
				<div className="absolute bottom-[0%] bg-white w-[250px] flex flex-col justify-center items-center">
					<h2 className="font-bold text-2xl">Blaine Myers</h2>
					<p className="text-slate-400">Chief Financial Officer</p>
				</div>
			</div>
		</div>
	</section>
  )
}

export default About