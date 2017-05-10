import React, { Radix } from 'react'
import Button from './Button'
import Delete from './Delete'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const getStatus = status_item => {
	// console.log( "inGetStatus ", status_item );
}

const Waiter = ({
	theOrder,
	onOrdersSelect,
	active,
	key1,
	key2,
	key3,
	button_type,
}) => {
	const { table_number, status_item, status_pay } = theOrder[0]
	const statusRejected = ['', '', 'Greiðslu hafnað!']
	const bName = statusRejected[status_pay]
	let totalPrice = 0
	const allTitle = theOrder.map((oneOrder, index) => {
		totalPrice += parseInt(oneOrder.price, Radix)
		if (oneOrder.quantity < 2) {
			return (
				<div>
					<ul className="orders__order">
						<li>
							<div className={'orders__circle'}>
								{oneOrder.quantity}
							</div>
							<div className="orders__title">
								{oneOrder.title}
							</div>
						</li>
					</ul>
				</div>
			)
		} else {
			return (
				<div>
					<ul className="orders__order">
						<li>
							<div className={'orders__circle more-then-one'}>
								{oneOrder.quantity}
							</div>
							<div className="orders__title">
								{oneOrder.title}
							</div>
						</li>
					</ul>
				</div>
			)
		}
	})
	return (
		<ReactCSSTransitionGroup
			transitionName="example"
			transitionAppear={true}
			transitionAppearTimeout={0}
			transitionEnter={false}
			transitionLeave={true}
			transitionLeaveTimeout={700}
			className={'orders__items'}
			component="li"
		>
			<div className="orders__container">
				<Delete key1={key1} key2={key2} key3={key3} status_pay={status_pay}/>
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
					<div className="orders__rejected">{bName}</div>
				</div>
			</div>

		</ReactCSSTransitionGroup>
	)
}

export default Waiter
