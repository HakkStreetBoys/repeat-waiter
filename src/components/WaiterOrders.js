import React, { Component } from 'react';

import Waiter from './Waiter';
import OrderData from '../OrderArr';

class WaiterOrders extends Component {

  renderOrder() {
    console.log(OrderData);
    let OrderNodes = OrderData.map(function (orders, i) {
        if(orders.drinks != "") {
         return (
           <Waiter key={i} info={orders} />
         );
        }
      });
      return (
        OrderNodes
      );
    }

  render() {
    return (

        <div className="orders">{this.renderOrder()}</div>

        );
  }
}

export default WaiterOrders;
