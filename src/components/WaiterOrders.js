import React, { Component } from 'react';

import Waiter from './Waiter';
import OrderData from '../OrderArr';
import OrderDetail from './OrderDetail';

class WaiterOrders extends Component {
  state = {
    orders: [],
    selectedOrders: OrderData[0],
    isActive: '',
  }

  isActive(){
    return ((this.state.selected) ?'active':'default');
  }

  renderOrder() {
    let OrderNodes = OrderData.map( (orders, i) => {
      if(orders.drinks != "" && orders.status_drink != "3") {
        return (
         <Waiter
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
    console.log(this.state);
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
