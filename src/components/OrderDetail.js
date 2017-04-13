import React from 'react';
// import axios from 'axios';

const OrderDetail = ({ orders }) => {

  if(!orders) {
    return <span className="fleh"></span>;
  }

  return (
    <div className="single-content">
      <div className="single-content__info">
        <div className="single-content__costomer-info">
          <div className="single-content__phone">
            <div className="single-content__phone-title">
              Símanúmer:
            </div>
            <div className="single-content__phone-number">
              667-9823
            </div>
          </div>
        </div>
        <div className="single-content__table">
          <div className="single-content__table-title">
            Borð Númer:
          </div>
          <div className="single-content__table-number">
            #{orders.table_number}
          </div>
        </div>
        <div className="single-content__order">
          <div className="single-content__order-title">
            Pöntun:
          </div>
          <div className="single-content__drinks">
            {orders.drinks}
          </div>
          <div className="single-content__food">
            {orders.food}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
