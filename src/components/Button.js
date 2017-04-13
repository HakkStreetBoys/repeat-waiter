import React, { Component } from 'react';
import axios from 'axios';

class Button extends Component {

  constructor() {
    super();
    this.state = {
      status : 1,
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
      console.log(this.state.status);
  const temp = this.state.status;
console.log(temp);
      this.setState({ status : temp %3+1 });
  }


};

export default Button;
