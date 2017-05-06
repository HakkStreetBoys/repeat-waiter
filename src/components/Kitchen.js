import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Button from './Button'

const getStatus = status_item => {
	console.log('inGetStatus ', status_item)
}

let checkOld = {}
checkOld.className = ''

const Kitchen = ({ theOrder, onOrdersSelect, active, key1, key2, key3 }) => {
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
	const text = ['Ógreidd Pöntun', 'Greidd Pöntun']
	const image = ['../src/icons/stop.svg', '/src/icons/checked1.svg']
	const cName = ' ' + status[status_pay]
	return (
		<li className={'orders__items' + cName}>
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
					<ul className="orders__order">
						<li>
							<div className="orders__circle">{quantity}</div>
							{title}
						</li>
						<li>{price}.kr</li>
						<li>{userID}</li>
					</ul>

				</div>
			</div>
		</li>
	)
}

export default Kitchen
