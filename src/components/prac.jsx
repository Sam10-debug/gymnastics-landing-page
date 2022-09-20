import axios from 'axios';
import React, { useEffect } from 'react'

function prac() {
	useEffect(()=>{
		axios.get("lol")
		.then(res=>{
			console.log(res)
		})
		.catch(err=>console.log(err))
	})
  return (
	<div>
		
	</div>
  )
}

export default prac