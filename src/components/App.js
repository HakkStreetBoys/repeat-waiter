import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import Login from "./Login";

import firebase from "./firebase";

const auth = firebase.auth();



export default class App extends Component {

state = {
  user: undefined
};

  componentDidMount() {
        firebase.auth()
        .signInWithEmailAndPassword('palmimar@gmail.com', 'hackstreetboys')
        .catch(error => {
          this.setState({ errorMessage: error.message, isLoggingIn: false, user: user });
      });
        firebase.auth().onAuthStateChanged(user => {
        this.setState({ user });
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
            {this.props.children}
        </div>
      </div>
    );
  }
}
