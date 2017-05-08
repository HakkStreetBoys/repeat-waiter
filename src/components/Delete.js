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

  modal() {
    console.log('hello')
    return (
        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggle}>Eyða Pöntun</ModalHeader>
          <ModalBody>
            Ertu allveg viss að þú viljir eyða þessari pönntun?
            <Button color="primary" onClick={this.firebaseDelete.bind(this)}>
              Já
            </Button>
            <Button color="secondary" onClick={this.toggle}>Nei</Button>
          </ModalBody>
        </Modal>
    )
  }

	render() {
    console.log(this.state)
		return <div className={'orders__delete'} onClick={this.toggle.bind(this)} />
	}

}
export default Delete
