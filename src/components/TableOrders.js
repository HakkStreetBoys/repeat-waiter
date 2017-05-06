import React, { Component } from "react";

import Table from "./Table";
import OrderDetail from "./OrderDetail";
import _ from "lodash";
import firebase from "./firebase";

class TableOrders extends Component {
  state = {
    order: [],
    selectedOrders: null,
    isActive: "",
    myOrders: [],
    loading: true
  };

  componentWillMount() {
    var component = this;
    firebase.database().ref("users").on("value", snapshot => {
      this.setState({ myOrders: snapshot.val(), loading: false });
    });
  }

  renderOrder = () => {
    const { myOrders } = this.state;
    const numbers = [];
    const orders = [];
    let drinks = [];
      const orderMap = _.map(myOrders, (number, i2) => {
      const user = number;
      const confirmedOrders = user ? user.confirmed_order : undefined;
      if (confirmedOrders) {
        return _.map(confirmedOrders, (order, i) => {
          drinks = [];
          orders.push(order);
          let item;
          let item2;
          for (let product in order) {
            item = order[product];
            item2 = _.keys(order);
            if (item.category == "matur" || item.category == "drykkur") {
              drinks.push(item);
            }
          }
          if (drinks.length > 0) {

            return ({
              // timeStamp:item.createdAt,
              tableNumber:item.table_number,
              waiter:
                <Table
                  key1={i}
                  key2={i2}
                  key3={item2}
                  theOrder={drinks}
                  onOrdersSelect={selectedOrders => {
                    this.setState({
                      selectedOrders: selectedOrders,
                      isActive: "orders__container-clicked"
                    });
                  }}
                  active={this.state.isActive}
                />
            });
          }
        });
      }
    });
    const user_orders = orderMap.map(item => {
      if(item){
        const items = item.filter(i => typeof i != 'undefined');
        return items;
      }
    });
    let all_waiters = [];
    user_orders.forEach((orders) => {
      if(orders){
        orders.forEach(order => {
          all_waiters.push(order);
        })
      }
    });
    // all_waiters.sort((a,b) => {
    //   return a.timeStamp - b.timeStamp;
    // })
    all_waiters.sort((a,b) => {
      return a.tableNumber - b.tableNumber;
    })
    all_waiters = all_waiters.map(waiter => waiter.waiter)
    return all_waiters.reverse();
  };
  // renderOrder = () => {
  //   const { myOrders } = this.state;
  //   console.log("what is myOrders", myOrders);
  //   const numbers = [];
  //   const orders = [];
  //   let food = [];
  //   // for (let number in myOrders) {
  //     const orderMap = _.map(myOrders, number => {
  //     const user = number;
  //     const confirmedOrders = user ? user.confirmed_order : undefined;
  //     console.log("confirmedOrders", confirmedOrders);
  //     if (confirmedOrders) {
  //       return _.map(confirmedOrders, (order, i) => {
  //         console.log("order in confirmedOrders", order);
  //         food = [];
  //         orders.push(order);
  //         let item;
  //         for (let product in order) {
  //           item = order[product];
  //           console.log("hello", item);
  //           if (item.category == "matur" || item.category == "drykkur") {
  //             food.push(item);
  //           }
  //         }
  //         if (food.length > 0) {
  //           return (
  //             <Table
  //               key={i}
  //               theOrder={food}
  //               onOrdersSelect={selectedOrders => {
  //                 this.setState({
  //                   selectedOrders: selectedOrders,
  //                   isActive: "orders__container-clicked"
  //                 });
  //               }}
  //               active={this.state.isActive}
  //             />
  //           );
  //         }
  //       });
  //     }
  //   });
  //   console.log("what is orders", orders);
  //   console.log('meeee is',orderMap);
  //   return orderMap.reverse();
  // };
  render() {
    const { state } = this;
    return (
      <div className="gag">
        <OrderDetail theOrder={this.state.selectedOrders} />

        <div className="orders">
          <ul className="orders__list">
            {this.renderOrder()}
          </ul>
        </div>
      </div>
    );
  }
}

export default TableOrders;
