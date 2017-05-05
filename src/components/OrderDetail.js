import React from 'react';

const OrderDetail = ({ theOrder }) => {

  if(!theOrder) {
    return <span className="fleh"></span>;
  }
  let price = 0;
  let quantity = 0;
  const title = theOrder.map(order => {
    price += parseInt(order.price);
    quantity = parseInt(order.quantity)
    return (
      <li>{quantity}x {order.title}</li>
    )
  });

  return (
    <div className="single-content">
      <div className="single-content__info">
        <div className="single-content__costomer-info">
          <div className="single-content__phone">
            <div className="single-content__phone-title">
              Símanúmer:
            </div>
            <div className="single-content__phone-number">
              {'+' + theOrder[0].userID}
            </div>
          </div>
        </div>
        <div className="single-content__table">
          <div className="single-content__table-title">
            Borð Númer:
          </div>
          <div className="single-content__table-number">
            #{theOrder[0].table_number}
          </div>
        </div>
        <div className="single-content__order">
          <div className="single-content__order-title">
            Pöntun:
          </div>
          <div className="single-content__drinks">
            <ul>
              {title}
            </ul>
          </div>
        </div>
        <div className="single-content__price">
          <div className="single-content__price-title">
            Verð samtals:
          </div>
          <div className="single-content__price-output">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
