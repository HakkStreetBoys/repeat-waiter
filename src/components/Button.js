import React, { Component } from 'react';
import axios from 'axios';
import firebase from "./firebase";
class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status : this.props.status_item,
    }
  }

  render() {
    var clicked = this.state && this.state.clicked;
    const status = ["new-order", "in-prosess", "complete"];
    const text = ["Ný Pöntun", "Í Vinnslu", "Afgreitt"]
    const clickedInfo = (clicked ? 'clicked' : undefined);
    const cName = clickedInfo + ' ' + status[this.state.status];
    return <div className={'button ' + cName}
      onClick={this.onClick.bind(this)}>{text[this.state.status]}</div>

  }

  onClick() {
    let temp = this.state.status;
    // this.props.userRef.child('orders').set({status_food: temp};
    if(temp < 2) {
      temp = temp %2+1;
    }
    this.setState({ status : temp });
    this.props.getStatus(temp);
  }



};

export default Button;
