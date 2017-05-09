import React from 'react'
import Button from './Button'
import Delete from './Delete'
import Edit from './Edit'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const getStatus = status_item => {
	// console.log( "inGetStatus ", status_item );
}



let checkOld = {}
checkOld.className = ''

const Waiter = ({ theOrder, onOrdersSelect, active, key1, key2, key3, button_type }) => {
	const {
		title,
		table_number,
		status_item,
		quantity,
		status_pay,
		price,
		userID,
	} = theOrder[0]
	const status = ['unpayd', 'payd', 'unpayd']
	const statusRejected = ['','','Greiðslu hafnað!']
	const cName = ' ' + status[status_pay]
	const bName = statusRejected[status_pay]
	let totalPrice = 0
	const allTitle = theOrder.map(oneOrder => {
		totalPrice += parseInt(oneOrder.price)
		return (
			<div>
				<ul className="orders__order">
					<li>
						<div className="orders__circle">
							{oneOrder.quantity}
						</div>
						<div className="orders__title">
							{oneOrder.title}
						</div>
					</li>
				</ul>
			</div>
		)
	})
	return (
		<ReactCSSTransitionGroup
			transitionName="bounce"
			transitionAppear={true}
			transitionAppearTimeout={0}
			transitionEnter={false}
			transitionLeave={true}
			transitionLeaveTimeout={700}
			className={'orders__items' + cName}
			component="li"
		>
			<div className="orders__container">
				{/* {this.state.modal && <Delete />} */}
				<Delete />
				<div className="orders__rejected">{bName}</div>
				<Button
					button_type={button_type}
					status_item={status_item}
					getStatus={getStatus}
					key1={key1}
					key2={key2}
					key3={key3}
				/>
				<div className="orders__item">
					<div className="orders__table_number">
						Borð {table_number}
					</div>
					{allTitle}
					<div className="orders__price">
						{totalPrice} kr.
					</div>
				</div>
			</div>
			{/* <Delete status_pay={status_pay} key1={key1} key2={key2} key3={key3} />
			<Edit status_pay={status_pay} key1={key1} key2={key2} key3={key3} /> */}

		</ReactCSSTransitionGroup>
	)
}

export default Waiter
