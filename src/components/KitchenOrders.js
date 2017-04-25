import React, { Component } from 'react';

import Kitchen from './Kitchen';
import OrderDetail from './OrderDetail';
import _ from 'lodash';
import firebase from './firebase';

class KitchenOrders extends Component {
  state = {
    order: [],
    selectedOrders: null,
    isActive: '',
    myOrders: [],
    loading: true,
  }

  componentWillMount() {

    var component = this;

    firebase.database().ref("users").on('value', (snapshot) => {
      console.log(snapshot.val())
        this.setState({ myOrders: snapshot.val(), loading: false });
    });
  }

  renderOrder = () => {
    const { myOrders } = this.state;
    console.log("what is myOrders", myOrders);
    const numbers = [];
    const orders = [];
    let food = [];
    // for (let number in myOrders) {
      const orderMap = _.map(myOrders, number => {
      const user = number;
      const confirmedOrders = user ? user.confirmed_order : undefined;
      console.log("confirmedOrders", confirmedOrders);
      if (confirmedOrders) {
        return _.map(confirmedOrders, (order, i) => {
          console.log("order in confirmedOrders", order);
          food = [];
          orders.push(order);
          let item;
          for (let product in order) {
            item = order[product];
            console.log("hello", item);
            if (item.category == "matur" && item.status_food != "2") {
              food.push(item);
            }
          }
          if (food.length > 0) {
            return (
              <Kitchen
                key={i}
                theOrder={food}
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
    console.log("what is orders", orders);
    console.log('meeee is',orderMap);
    return orderMap.reverse();
  }
  render() {
    const { state } = this;
      return (
        <div className="gag">
          <OrderDetail
            theOrder={this.state.selectedOrders}
          />
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

export default KitchenOrders;
