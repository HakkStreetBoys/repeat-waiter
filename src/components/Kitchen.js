import React from 'react';
import Button from './Button'

const getStatus = (status_drink) => {
  console.log( "inGetStatus ", status_drink );
}

let checkOld = {};
checkOld.className = '';

const Kitchen = ({ orders, onOrdersSelect, active }) => {
  const { order_number, food, table_number, status_food } = orders;
  return (
    <div onClick={ event =>
      {event.target.className = event.target.className ===
        "orders__button-container"?"orders__button-container orders__container-clicked":"orders__button-container";
        checkOld.className = "orders__button-container";
        checkOld = event.target;
        return onOrdersSelect(orders)
      } }
      className="orders__container">

      <div className="orders__item">
        <div className="orders__stripe"></div>
        <div className="orders__table_number">
          {table_number}
        </div>
        <div className="orders__order">
          {food}
        </div>
        <div className="orders__button-container">
          <Button status_drink={status_food} getStatus={getStatus} className="button" />
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
