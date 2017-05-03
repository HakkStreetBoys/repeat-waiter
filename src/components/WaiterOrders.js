import React, { Component } from "react";

import Waiter from "./Waiter";
import OrderDetail from "./OrderDetail";
import Spinner from "./Spinner";
import _ from "lodash";
import firebase from "./firebase";

class WaiterOrders extends Component {
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
      // console.log(snapshot.val());
      this.setState({ myOrders: snapshot.val(), loading: false });
    });
  }

  // buttonOnClick(stuff) {
  //   console.log('stuff',stuff);
  // }

  renderOrder = () => {
    const { myOrders } = this.state;
    // console.log("what is myOrders", myOrders);
    const numbers = [];
    const orders = [];
    let drinks = [];
      const orderMap = _.map(myOrders, (number, i2) => {
      const user = number;
      const confirmedOrders = user ? user.confirmed_order : undefined;
      // console.log("confirmedOrders", confirmedOrders);
      // console.log('i2 ',i2);
      if (confirmedOrders) {
        return _.map(confirmedOrders, (order, i) => {
          // console.log("order in confirmedOrders", order);

          drinks = [];
          orders.push(order);
          let item;
          let item2;
          for (let product in order) {
            item = order[product];
            item2 = _.keys(order);
            //  console.log("hello", item2);
            if (item.category == "drykkur" && item.status_drink != "2") {
              drinks.push(item);
            }
          }
          if (drinks.length > 0) {
            // console.log('i',i);
            return (
              <Waiter
                key1={i}
                key2={i2}
                key3={item2}
                theOrder={drinks}
                // onButtonClick={this.buttonOnClick}
                onOrdersSelect={selectedOrders => {
                  this.setState({
                    selectedOrders: selectedOrders,
                    isActive: "orders__container-clicked"
                  });
                }}
                active={this.state.isActive}
              />
            );
          }
        });
      }
    });
    // console.log("what is orders", orders);
    // console.log('meeee is',orderMap);
    return orderMap.reverse();
  };
  render() {
    const { state } = this;
    if (this.state.loading == true) {
      return <Spinner />;
    }
    return (
      <div className="gag">
        <OrderDetail theOrder={this.state.selectedOrders} />
        <div className="content-left">

          <div className="orders">
            <ul>
              {this.renderOrder()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WaiterOrders;
