import React, { Component } from 'react'

import Waiter from './Waiter'
import OrderDetail from './OrderDetail'
import Spinner from './Spinner'
import _ from 'lodash'
import firebase from './firebase'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class WaiterOrders extends Component {
	state = {
		order: [],
		selectedOrders: null,
		isActive: '',
		myOrders: [],
		loading: true,
	}

	componentWillMount() {
		var component = this
		firebase.database().ref('users').on('value', snapshot => {
			// console.log(snapshot.val());
			this.setState({ myOrders: snapshot.val(), loading: false })
		})
	}
	componentWillUnmount() {
		firebase.database().ref('users').off()
	}

	renderOrder = () => {
		const { myOrders } = this.state
		// console.log("what is myOrders", myOrders);
		const numbers = []
		const orders = []
		let drinks = []
		const orderMap = _.map(myOrders, (number, i2) => {
			const user = number
			const confirmedOrders = user ? user.confirmed_order : undefined
			// console.log("confirmedOrders", confirmedOrders);
			// console.log('i2 ',i2);
			if (confirmedOrders) {
				return _.map(confirmedOrders, (order, i) => {
					drinks = []
					orders.push(order)
					let item
					let item2
					for (let product in order) {
						item = order[product]
						item2 = _.keys(order)
						if (item.category == 'drykkur' && item.status_item != '2') {
							drinks.push(item)
						}
					}
					if (drinks.length > 0) {
						return {
							timeStamp: item.createdAt,
							waiter: (
								<Waiter
									button_type="drykkur"
									key={i}
									key1={i}
									key2={i2}
									key3={item2}
									theOrder={drinks}
									// onButtonClick={this.buttonOnClick}
									onOrdersSelect={selectedOrders => {
										this.setState({
											selectedOrders: selectedOrders,
											isActive: 'orders__container-clicked',
										})
									}}
									active={this.state.isActive}
								/>
							),
						}
					}
				})
			}
		})
		const user_orders = orderMap.map(item => {
			if (item) {
				const items = item.filter(i => typeof i != 'undefined')
				return items
			}
		})
		let all_waiters = []
		user_orders.forEach(orders => {
			if (orders) {
				orders.forEach(order => {
					all_waiters.push(order)
				})
			}
		})
		all_waiters.sort((a, b) => {
			return a.timeStamp - b.timeStamp
		})
		all_waiters = all_waiters.map(waiter => waiter.waiter)
		return all_waiters
	}

	render() {
		const { state } = this
		if (this.state.loading == true) {
			return <Spinner />
		}
		return (
			<div className="gag">
					<div className="orders">
						<ReactCSSTransitionGroup
							transitionName="bounce"
							transitionAppear={false}
							transitionAppearTimeout={700}
							transitionEnter={false}
							transitionEnterTimeout={700}
							transitionLeave={true}
							transitionLeaveTimeout={700}
							className="orders__list"
							component="ul"
						>
							{this.renderOrder()}
						</ReactCSSTransitionGroup>
					</div>
			</div>
		)
	}
}

export default WaiterOrders
