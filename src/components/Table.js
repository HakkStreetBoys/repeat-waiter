import React from 'react';
import Button from './Button'
import PaymentStatus from './PaymentStatus'

const getStatus = (status_drink) => {
  console.log( "inGetStatus ", status_drink );
}

const getStatusPay = (status_pay) => {
  console.log( "inGetStatus ", status_pay );
}

let checkOld = {};
checkOld.className = '';

const Table = ({ theOrder, onOrdersSelect, active }) => {
  const { order_number, title, table_number, status_drink, status_food, status_pay } = theOrder;
  return (
    <div onClick={ event =>
      {event.target.className = event.target.className ===
        "orders__button-container"?"orders__button-container orders__container-clicked":"orders__button-container";
        checkOld.className = "orders__button-container";
        checkOld = event.target;
        return onOrdersSelect(theOrder)
      } } className="orders__container">

      <div className="orders__item">
        <div className="orders__stripe"></div>
        <div className="orders__table_number">
          {table_number}
        </div>
        <div className="orders__order">
          {title}
        </div>
        <div className="float-right">
          <div className="orders__button-container">
            <div className="float-left">
              <Button status_drink={status_drink} getStatus={getStatus} />
            </div>
          </div>
          <div className="orders__payment-container">
            <PaymentStatus status_pay={status_pay} getStatusPay={getStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
