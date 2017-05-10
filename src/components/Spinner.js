import React from 'react'

const Spinner = () => {
	return (
		<div className="spinner">
			<img src={process.env.PUBLIC_URL + '../img/spinner.svg'} alt="" />
			<img src={process.env.PUBLIC_URL + '../img/spinner-inner.svg'} alt="" />
		</div>
	)
}

export default Spinner
