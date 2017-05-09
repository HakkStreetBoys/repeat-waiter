import React, { Component } from 'react'
import axios from 'axios'
import firebase from './firebase'
class Delete extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
      delete: false,
      edit: false,
		}
		this.toggle = this.toggle.bind(this)
    this.toggleDelete = this.toggleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
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
    if(this.state.delete) {
      this.setState({
        delete: !this.state.modal,
      })
    }
    if(this.state.edit) {
      this.setState({
        edit: !this.state.modal,
      })
    }
	}

  toggleDelete() {
		this.setState({
			delete: !this.state.delete,
		})
	}

  toggleEdit() {
		this.setState({
			edit: !this.state.edit,
		})
	}

  getMousePos(event) {
    let coordinates =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY
    console.log('flehhh', coordinates );
  }

	render() {
		const statusPay = ['unpayd-border', 'payd-border']
		const cName = ' ' + statusPay[this.props.status_pay]
		return (
			<div>
					<div className="orders__info" onClick={(event) => { this.toggle(); this.getMousePos(event);}} />
				{this.state.modal &&
					<div className="modal">
            <div className="modal__exit" onClick={this.toggle}></div>
						<div
							className={'orders__edit modal__button' + cName}
							onClick={this.toggleEdit}
						>
							Breyta
						</div>
						<div
							className={'orders__delete modal__button' + cName}
							onClick={this.toggleDelete}
						>
							Eyða
						</div>
					</div>}
				{this.state.delete &&
          <div className="modal">
					<div className="modal__delete">
						<div
							className="modal__button button-delete"
							onClick={this.firebaseDelete.bind(this)}
						>
							Já
						</div>
            <div
							className="modal__button button-delete"
							onClick={this.toggle}
						>
							Nei
						</div>
					</div>
        </div>
      }
      {this.state.edit &&
        <div className="modal">
          hello
        </div>
      }
			</div>
		)
	}
}
export default Delete
