import React, { Component } from 'react';

class PaymentStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status : this.props.status_pay,
    }
  }

  returningSatus() {
    let temp = this.state.status;
    return this.props.getStatusPay(temp);
  }

  render() {
    const status = ["unpayd", "payd"];
    const text = ["Ógreidd Pöntun", "Greidd Pöntun"];
    const image = ["../src/icons/stop.svg", "/src/icons/checked1.svg"]
    const cName = ' ' + status[this.state.status];
    return (
      <div className={'payment-status ' + cName}>{text[this.state.status]}
        <img className="payment-status__img" src={image[this.state.status]} height="20px" width="20px"/>
      </div>
    );
  }

};

export default PaymentStatus;
