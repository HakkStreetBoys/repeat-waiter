import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from './Button'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Table = ({ theOrder, onOrdersSelect, active, key1, key2, key3 }) => {
	const {
		order_number,
		title,
		table_number,
		status_item,
		status_food,
		status_pay,
		quantity,
		userID,
		price,
	} = theOrder[0]
	const status = ['unpayd', 'payd']
	const cName = ' ' + status[status_pay]
	let totalPrice = 0
	const allTitle = theOrder.map(oneOrder => {
		totalPrice += parseInt(oneOrder.price)
		return (
			<li>
				<div className="orders__circle">
					{oneOrder.quantity}
				</div>
				<div className="orders__title">
					{oneOrder.title}
				</div>
			</li>
		)
	})
	return (
			<ReactCSSTransitionGroup
				transitionName="example"
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
						key1={key1}
						key2={key2}
						key3={key3}
					/>
					<div className="orders__phone">
						{userID}
					</div>
					<div className="orders__item">
						<div className="orders__table_number">
							Borð {table_number}
						</div>
						<ul className="orders__order">
							{allTitle}
						</ul>
						<div className="orders__price">
							<li>{totalPrice} kr.</li>
						</div>
					</div>
				</div>
			</ReactCSSTransitionGroup>
	)
}

export default Table
