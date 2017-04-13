import React, { Component } from 'react';

import Kitchen from './Kitchen';
import OrderDetail from './OrderDetail';
import OrderData from '../OrderArr';

class KitchenOrders extends Component {

  state = {
    orders: [],
    selectedOrders: null,
  }

  renderOrder() {
    console.log(this.state.selectedOrders);
    let OrderNodes = OrderData.map( (orders, i) => {
        if(orders.food != "" && orders.status != "3") {
         return (
           <Kitchen
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

export default KitchenOrders;
