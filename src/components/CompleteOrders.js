import React, { Component } from 'react';

import Complete from './Complete';
import OrderDetail from './OrderDetail';
import OrderData from '../OrderArr';

class CompleteOrders extends Component {

  state = {
    orders: [],
    selectedOrders: OrderData[0],
    isActive: '',
  }

  renderOrder() {
    let OrderNodes = OrderData.map( (orders, i) => {
        if(orders.status_food == "3" && orders.status_drink == "3") {
         return (
           <Complete
             key={i}
             orders={orders}
             onOrdersSelect={selectedOrders =>
               {this.setState({ selectedOrders: selectedOrders, isActive: 'orders__container-clicked' })}}
             active={this.state.isActive}
           />
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
