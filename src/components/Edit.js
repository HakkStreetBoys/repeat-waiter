import React, { Component } from 'react'
import axios from 'axios'
import firebase from './firebase'
class Edit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
		}
		this.toggle = this.toggle.bind(this)
	}

	firebaseEdit() {
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
          status_item: this.props.status_item,
          quantity: this.price.quantity,
          price: this.props.price,
          status_pay: this.props.status_pay,
        });
		}
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		})
	}

	modal = () => {
		console.log('hello')
		return <div />
	}

	render() {
    const statusPay = ['unpayd-border', 'payd-border']
    const cName = ' ' + statusPay[this.props.status_pay]
		return (
			<div>
        {!this.state.modal &&
				<div className={'orders__edit modal__button' + cName} onClick={this.toggle}>
          Breyta
        </div>
      }
				{this.state.modal &&
					<div className="modal-big">
						<div className="modal-big__heading">
							Ertu allveg viss að þú viljir eyða þessari pönntun?
						</div>
						<div
							className="modal-big__button button-yes"
							onClick={this.firebaseEdit.bind(this)}
						>
							Já
						</div>
						<div className="modal__button button-no" onClick={this.toggle}>
							Nei
						</div>
					</div>}
			</div>
		)
	}
}
export default Edit
