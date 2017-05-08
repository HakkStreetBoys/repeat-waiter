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

	modal = () => {
		console.log('hello')
		return <div />
	}

	render() {
		console.log(this.state)
		return (
			<div>
        {!this.state.modal &&
				<div className={'orders__delete'} onClick={this.toggle}>
          Eyða
        </div>
      }
				{this.state.modal &&
					<div className="modal">
						<div className="modal__heading">
							Ertu allveg viss að þú viljir eyða þessari pönntun?
						</div>
						<div
							className="modal__button button-yes"
							onClick={this.firebaseDelete.bind(this)}
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
export default Delete
