import React, { Component } from 'react'
import axios from 'axios'
import firebase from './firebase'
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
    const statusPay = ['unpayd-border', 'payd-border']
  	const cName = ' ' + statusPay[this.props.status_pay]
		return (
			<div>
        {!this.state.modal &&
				<div className={'orders__delete modal__button' + cName} onClick={this.toggle}>
          Eyða
        </div>
      }
				{this.state.modal &&
					<div className="modal">
						<div
							className="modal__button button-delete"
							onClick={this.firebaseDelete.bind(this)}
						>
							SMELLTU TIL AÐ EYÐA
						</div>
					</div>}
			</div>
		)
	}
}
export default Delete
