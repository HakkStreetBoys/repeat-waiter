import React, { Component } from 'react';

import Waiter from './Waiter';
import OrderData from '../OrderArr';
import OrderDetail from './OrderDetail';
import _ from 'lodash';
import firebase from './firebase';
import userRefFor from './userRef';

class WaiterOrders extends Component {
  state = {
    myOrders: [],
    loading: true,
  }

  componentWillMount() {
    // const { adversityId } = this.props.match.params;
    const userRef = userRefFor(this.props.user);

    var component = this;

    userRef.on('value', (snapshot) => {
      // snapshot.forEach(function(orderSnapshot) {
        // console.log(orderSnapshot.val());
        // this.setState({ myOrders: this.state.myOrders.concat(snapshot.val()), loading: false });
        this.setState({ myOrders: snapshot.val(), loading: false });
      // })
    });
  }

  renderOrder = () => {
    if(this.state.loading === true) {
      return (
        <span>loader</span>
        // <Spinner />
      )
    }

    // return _.map(this.state.myOrders[0], (myOrder, key) => {
    //   console.log(myOrder)
    //   // return <li key={key}>{myOrder.title}</li>
    // });
  }

  render() {
    // const { state } = this;
    console.log(this.state)
    return (
      <div className="content-left">
        <h1>My Order</h1>
        <ul>
          {this.renderOrder()}
        </ul>
      </div>

    );
  }

}

// class WaiterOrders extends Component {
//   state = {
//     orders: [],
//     selectedOrders: null,
//   }
//
//   renderOrder() {
//     console.log(this.state.selectedOrders);
//     let OrderNodes = OrderData.map( (orders, i) => {
//         if(orders.drinks != "" && orders.status != "3") {
//          return (
//            <Waiter
//              key={i}
//              orders={orders}
//              onOrdersSelect={selectedOrders =>  {this.setState({ selectedOrders })}} />
//
//              );
//              }
//             });
//       return (
//         OrderNodes
//       );
//     }
//
//   render() {
//     return (
//       <div className="gag">
//         <OrderDetail
//           orders={this.state.selectedOrders}
//         />
//         <div className="content-left">
//           <div className="orders">{this.renderOrder()}</div>
//         </div>
//       </div>
//         );
//   }
// }
//
export default WaiterOrders;
