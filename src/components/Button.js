import React, { Component } from 'react';
import axios from 'axios';
import OrderData from '../OrderArr';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status : this.props.status_drink,
    }
  }

  render() {
    var clicked = this.state && this.state.clicked;
    const status = ["", "new-order", "in-prosess", "complete"];
    const text = ["", "Ný Pöntun", "Í Vinslu", "Afgreitt"]
    const clickedInfo = (clicked ? 'clicked' : undefined);
    const cName = clickedInfo + ' ' + status[this.state.status];
    return <div className={'button ' + cName}
      onClick={this.onClick.bind(this)}>{text[this.state.status]}</div>
  }

  onClick() {
    let temp = this.state.status;
    if(temp < 3) {
      temp = temp %3+1;
    }
    this.setState({ status : temp });
    this.props.getStatus(temp);
  }


};

export default Button;
