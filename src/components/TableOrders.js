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
    return _.map(this.state.myOrders, (user, key, key1) => {
      // console.log(myOrder);
      if (user.confirmed_order) {
        return _.map(user.confirmed_order, (Order, key, key1) => {
          return _.map(Order, (theOrder, key, key1) => {
            return (
              <Table
                key={key}
                key1={key1}
                theOrder={theOrder}
                onOrdersSelect={selectedOrders => {
                  this.setState({
                    selectedOrders: selectedOrders,
                    isActive: "orders__container-clicked"
                  });
                }}
                active={this.state.isActive}
              />
            );
          });
        });
      }
    });
  };
  render() {
    const { state } = this;
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

export default TableOrders;
