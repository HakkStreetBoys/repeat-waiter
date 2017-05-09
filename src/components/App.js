import React, { Component } from 'react';
import Header from './Header'
import firebase from "./firebase";

const auth = firebase.auth();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
        auth
        .signInWithEmailAndPassword('palmimar@gmail.com', 'hackstreetboys')
        .catch(error => {
          this.setState({ errorMessage: error.message, isLoggingIn: false });
      });
        firebase.auth().onAuthStateChanged(user => {
        this.setState({ user });
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
