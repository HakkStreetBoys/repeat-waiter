import React, { Component } from 'react';

import Kitchen from './Kitchen';
import OrderDetail from './OrderDetail';
import OrderData from '../OrderArr';

class KitchenOrders extends Component {

  state = {
    orders: [],
    selectedOrders: OrderData[0],
    isActive: '',
  }

  renderOrder() {
    let OrderNodes = OrderData.map( (orders, i) => {
        if(orders.food != "" && orders.status_food != "3") {
         return (
           <Kitchen
             key={i}
             orders={orders}
             status={status}
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

export default KitchenOrders;
