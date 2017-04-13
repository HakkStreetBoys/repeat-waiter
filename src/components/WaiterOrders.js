import React, { Component } from 'react';

import Waiter from './Waiter';
import OrderData from '../OrderArr';
import OrderDetail from './OrderDetail';

class WaiterOrders extends Component {
  state = {
    orders: [],
    selectedOrders: null,
  }

  renderOrder() {
    console.log(this.state.selectedOrders);
    let OrderNodes = OrderData.map( (orders, i) => {
        if(orders.drinks != "" && orders.status != "3") {
         return (
           <Waiter
             key={i}
             orders={orders}
             onOrdersSelect={selectedOrders =>  {this.setState({ selectedOrders })}} />

             );
             }
            });
      return (
        OrderNodes
      );
    }

  render() {
    return (
      <div className="gag">
        <OrderDetail
          orders={this.state.selectedOrders}
        />
        <div className="content-left">
          <div className="orders">{this.renderOrder()}</div>
        </div>
      </div>
        );
  }
}

export default WaiterOrders;
