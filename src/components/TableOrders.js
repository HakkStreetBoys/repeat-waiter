import React, { Component } from 'react';

import Table from './Table';
import OrderData from '../OrderArr';
import OrderDetail from './OrderDetail';

class TableOrders extends Component {
  state = {
    orders: [],
    selectedOrders: null,
  }

  // OrderingTable() {
  //
  // let ACDOrdering = OrderData.map(function (orders, i) {
  //     if(this.orders.table_number == orders.table_number) {
  //      return (
  //       <div className="epic">
  //         <Table
  //           key={i}
  //           orders={orders}
  //           onOrdersSelect={selectedOrders => this.setState({ selectedOrders })} />
  //       </div>
  //          );
  //          }
  //          });
  // }

  renderOrder() {
    console.log(this.state.selectedOrders);
    let OrderNodes = OrderData.map(function (orders, i) {
        if(orders.drinks != "" && orders.status != "3") {
         return (
           <Table
             key={i}
             orders={orders}
             onOrdersSelect={selectedOrders => this.setState({ selectedOrders })} />

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
        {/* <WaiterDetail
          orders={this.state.selectedOrders}
          // onOrdersRemove={selectedOrders => this.setState({ selectedOrders: null })}
        /> */}
        <div className="orders">{this.renderOrder()}</div>
      </div>
        );
  }
}

export default TableOrders;
