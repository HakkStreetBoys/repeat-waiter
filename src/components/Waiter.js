import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from './Button'
import Delete from './Delete'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const getStatus = status_item => {
	// console.log( "inGetStatus ", status_item );
}

let checkOld = {}
checkOld.className = ''

const Waiter = ({ theOrder, onOrdersSelect, active, key1, key2, key3 }) => {
	const {
		title,
		table_number,
		status_item,
		quantity,
		status_pay,
		price,
		userID,
	} = theOrder[0]
	const status = ['unpayd', 'payd']
	const cName = ' ' + status[status_pay]
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
				<Button
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
				<Delete
					key1={key1}
					key2={key2}
					key3={key3}
				 />
			</div>
		</ReactCSSTransitionGroup>
	)
}

export default Waiter
