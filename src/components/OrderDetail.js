import React from 'react';

const OrderDetail = ({ theOrder }) => {

  if(!theOrder) {
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
              {'+' + theOrder.userID}
            </div>
          </div>
        </div>
        <div className="single-content__table">
          <div className="single-content__table-title">
            Borð Númer:
          </div>
          <div className="single-content__table-number">
            #{theOrder.table_number}
          </div>
        </div>
        <div className="single-content__order">
          <div className="single-content__order-title">
            Pöntun:
          </div>
          <div className="single-content__drinks">
            {theOrder.title}
          </div>
        </div>
        <div className="single-content__price">
          <div className="single-content__price-title">
            Verð samtals:
          </div>
          <div className="single-content__price-output">
            {theOrder.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
