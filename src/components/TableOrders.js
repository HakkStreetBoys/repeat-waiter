import React, { Component } from 'react';

import Table from './Table';
import OrderData from '../OrderArr';
import OrderDetail from './OrderDetail';

class TableOrders extends Component {
  state = {
    orders: [],
    selectedOrders: OrderData[0],
    isActive: '',
  }

  renderOrder() {
    let OrderNodes = OrderData.map( (orders, i) => {
      if(orders.food != "" || orders.drink != "") {
        return (
           <Table
             key={i}
             orders={orders}
             status={orders.status}
             onOrdersSelect={selectedOrders =>
               {this.setState({ selectedOrders: selectedOrders, isActive: 'orders__container-clicked' })}}
             active={this.state.isActive}
           />
        );
      }
    });

    const sorting = OrderNodes.sort((a, b) => {
      return parseFloat(a.props.orders.table_number) - parseFloat(b.props.orders.table_number);
    });

    return (
        sorting
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

export default TableOrders;
