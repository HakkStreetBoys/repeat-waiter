import React, { Component } from 'react'
import firebase from './firebase'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Delete extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
		}
		this.toggle = this.toggle.bind(this)
	}

	firebaseDelete() {
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
				.remove()
		}
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		})
	}

	render() {
		const statusRejected = ['', '', 'decline-payment']
		const bName = statusRejected[this.props.status_pay]
		const status = ['unpayd', 'payd', 'unpayd']
		const cName = ' ' + status[this.props.status_pay]
		return (
			<div className="modal__container">
				<div className={"orders__info " + cName} onClick={this.toggle} />
				{this.state.modal &&
					<ReactCSSTransitionGroup
						transitionName="bounce"
						transitionAppear={true}
						transitionAppearTimeout={1000}
						transitionEnter={false}
						transitionLeave={true}
						transitionLeaveTimeout={1000}
						className={'modal ' + bName}
						component="div"
					>
						<div className="modal__exit" onClick={this.toggle} />
						<div
							className={'modal__button'}
							onClick={this.firebaseDelete.bind(this)}
						>
							Eyða Pöntun
						</div>
					</ReactCSSTransitionGroup>
				}
			</div>
		)
	}
}
export default Delete
