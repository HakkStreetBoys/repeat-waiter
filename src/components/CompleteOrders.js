import React, { Component } from 'react';

import Complete from './Complete';
import OrderDetail from './OrderDetail';
import OrderData from '../OrderArr';

class CompleteOrders extends Component {

  state = {
    orders: [],
    selectedOrders: null,
  }

  renderOrder() {
    console.log(this.state.selectedOrders);
    let OrderNodes = OrderData.map( (orders, i) => {
        if(orders.status == "3") {
         return (
           <Complete
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

export default CompleteOrders;
