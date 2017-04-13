import React from 'react';
import Button from './Button'

const Kitchen = ({ orders, onOrdersSelect }) => {
  const { order_number, food, table_number, status } = orders;
  return (
    <div onClick={() => onOrdersSelect(orders)} className="orders__container">
      <div className="orders__item">
        <div className="orders__stripe"></div>
        <div className="orders__table_number">
          {table_number}
        </div>
        <div className="orders__order">
          {food}
        </div>
        <div className="orders__button-container">
          <Button status={status} className="button" />
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
