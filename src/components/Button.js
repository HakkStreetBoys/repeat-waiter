import React, { Component } from 'react'
import firebase from './firebase'

class Button extends Component {
	onClick() {
		let temp = this.props.status_item
		if (temp < 2) {
			temp = temp % 2 + 1
		} else {
			temp = 0
		}
		if (this.props.button_type) {
			for (let keyStatus in this.props.key3) {
				firebase
					.database()
					.ref(
						'users/' +
							this.props.key2 +
							'/confirmed_order/' +
							this.props.key1 +
							'/' +
							this.props.key3[keyStatus]
					)
					.once('value', snapshot => {
						if (this.props.button_type === snapshot.val().category) {
							firebase
								.database()
								.ref(
									'users/' +
										this.props.key2 +
										'/confirmed_order/' +
										this.props.key1 +
										'/' +
										this.props.key3[keyStatus]
								)
								.update({
									status_item: temp,
								})
						}
					})
			}
		} else {
			for (let keyStatus in this.props.key3) {
				firebase
					.database()
					.ref(
						'users/' +
							this.props.key2 +
							'/confirmed_order/' +
							this.props.key1 +
							'/' +
							this.props.key3[keyStatus]
					)
					.update({
						status_item: temp,
					})
			}
		}
	}

	render() {
		var clicked = this.state && this.state.clicked
		const status = ['new-order', 'in-prosess', 'complete']
		const text = ['Ný Pöntun', 'Í Vinnslu', 'Afgreitt']
		const clickedInfo = clicked ? 'clicked' : undefined
		const cName = clickedInfo + ' ' + status[this.props.status_item]
		return (
			<div className={'button ' + cName} onClick={this.onClick.bind(this)}>
				{text[this.props.status_item]}
			</div>
		)
	}
}

export default Button
