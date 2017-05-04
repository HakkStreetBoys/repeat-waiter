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
          drinks = [];
          orders.push(order);
          let item;
          let item2;
          for (let product in order) {
            item = order[product];
            item2 = _.keys(order);
            if (item.category == "drykkur" && item.status_item != "2") {
              drinks.push(item);
            }
          }
          if (drinks.length > 0) {

            return ({
              timeStamp:item.createdAt,
              waiter:
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
            });
          }
        });
      }
    });
    console.log('1ordermap',orderMap)
    const user_orders = orderMap.map(item => {
      if(item){
        const items = item.filter(i => typeof i != 'undefined');
        return items;
      }
    });
    console.log('user_orders',user_orders)
    let all_waiters = [];
    user_orders.forEach((orders) => {
      if(orders){
        orders.forEach(order => {
          all_waiters.push(order);
        })
      }
    });
    console.log('all_waiters',all_waiters)
    all_waiters.sort((a,b) => {
      return a.timeStamp - b.timeStamp;
    })
    console.log('2all_waiters',all_waiters)
    all_waiters = all_waiters.map(waiter => waiter.waiter)
    return all_waiters;
  };



  render() {
    const { state } = this;
    if (this.state.loading == true) {
      return <Spinner />;
    }
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

export default WaiterOrders;
