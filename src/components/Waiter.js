import React from 'react';

const Waiter = ( orders ) => {
  const { order_number, drinks, table_number } = orders.info;
  return (
    <div className="orders__container">
      <div className="orders__item">
        <div className="orders__stripe"></div>
        <div className="orders__table_number">
          {table_number}
        </div>
        <div className="orders__order">
          {drinks}
        </div>
        <div className="orders__button button">Ný Pöntun</div>
      </div>
    </div>
  );
};

export default Waiter;
