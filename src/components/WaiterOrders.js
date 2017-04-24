import React, { Component } from 'react';

import Waiter from './Waiter';
import OrderDetail from './OrderDetail';
import Spinner from './Spinner'
import _ from 'lodash';
import firebase from './firebase';

class WaiterOrders extends Component {
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
    //
    // let orders = {};
    //
    console.log("what is myOrders",myOrders)

    const numbers = [];
    const orders = [];

    for(let number in myOrders){
      const user = myOrders[number];
      const confirmedOrders = user ? user.confirmed_order : undefined;

      console.log("confirmedOrders",confirmedOrders)
      if(confirmedOrders){
        for(let order in confirmedOrders){
          orders.push(confirmedOrders[order])
        }
      }
    }

    console.log("what is orders",orders)

    return _.map(this.state.myOrders, (user, key, key1) => {
      if(user.confirmed_order) {
        return _.map(user.confirmed_order, (Order, key, key1) => {

          return _.map(Order, (theOrder, key, key1)=> {
            if(theOrder.category == "drykkur" && theOrder.status_drink != "2") {

          return (
                <Waiter
                  key={key}
                  key1={key1}
                  theOrder={theOrder}
                  onOrdersSelect={selectedOrders =>
                    {this.setState({ selectedOrders: selectedOrders, isActive: 'orders__container-clicked' })}}
                  active={this.state.isActive}
                />
              );
            }

              });
        })
      }
    });
  }
  render() {
    console.log(this.state);
    const { state } = this;
    if(this.state.loading == true) {
      return <Spinner />
    }
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

export default WaiterOrders;
