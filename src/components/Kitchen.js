import React from 'react';

const Kitchen = ( kitchenOrders ) => {
  const { order_number, food, table_number } = kitchenOrders.info;

  return (
    <div className="orders__container">
      <div className="orders__item">
        <div className="orders__stripe"></div>
        <div className="orders__table_number">
          {table_number}
        </div>
        <div className="orders__order">
          {food}
        </div>
        <div className="orders__button button">Ný Pöntun</div>
      </div>
    </div>
  );
};

export default Kitchen;
