import React from 'react';
import Button from './button'

const Complete = ({ orders, onOrdersSelect }) => {
  const { order_number, drinks, table_number, status } = orders;
  return (
    <div onClick={() => onOrdersSelect(orders)} className="orders__container">
      <div className="orders__item">
        <div className="orders__stripe"></div>
        <div className="orders__table_number">
          {table_number}
        </div>
        <div className="orders__order">
          {drinks}
        </div>
        <div className="orders__button-container">
          <Button status={status} className="button" />
        </div>
      </div>
    </div>
  );
};

export default Complete;
