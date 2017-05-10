import React from 'react'
import { Button } from 'reactstrap'

const NotFound = () => {
	return (
		<div className="not_found">
			<div className="not-found__container">
				<img src={process.env.PUBLIC_URL + '../img/taco.gif'} alt="" />
				<h1>404</h1>
				<img src={process.env.PUBLIC_URL + '../img/burger.gif'} alt="" />
			</div>
		</div>
	)
}

export default NotFound
