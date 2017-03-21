import React, { Component } from 'react';

import Kitchen from './Kitchen';
import OrderData from '../OrderArr';

class KitchenOrders extends Component {


// if (this.props.data) {
//  var commentNodes = this.props.data.map(function (comment){
//      return (
//        <div>
//          <h1>{comment.author}</h1>
//        </div>
//      );
//  });
// }



  renderOrder() {
    console.log(OrderData);
    let OrderNodes = OrderData.map(function (kitchenOrders, i) {
        if(kitchenOrders.food != "") {
         return (
           <Kitchen key={i} info={kitchenOrders} />
         );
        }
      });
      return (
        OrderNodes
      );
    }


  render() {
    return (
      <div className="orders">{this.renderOrder()}</div>
    );
  }
}

export default KitchenOrders;
