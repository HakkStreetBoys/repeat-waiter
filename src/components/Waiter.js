import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from './Button'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
		<li className={'orders__items' + cName}>
				<div className="orders__container">
					<Button
						status_item={status_item}
						key1={key1}
						key2={key2}
						key3={key3}
					/>
					<div className="orders__item">
						<div className="orders__table_number">
							Borð {table_number}
						</div>
						<div>
							<ul className="orders__order">
								{allTitle}
							</ul>
						</div>
						<div className="orders__price">
							{totalPrice} kr.
						</div>
					</div>
				</div>
		</li>
	)
}

export default Waiter
