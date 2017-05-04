import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Button from './Button'

const getStatus = (status_drink) => {
  // console.log( "inGetStatus ", status_drink );
}

let checkOld = {};
checkOld.className = '';

const Waiter = ({ theOrder, onOrdersSelect, active }) => {
  const { title, table_number, status_item, quantity } = theOrder[0];
  return (
    <li className="orders__items">
      <div
        onClick={(event, k) =>
          { const activeOrders = document.querySelectorAll("[data-reactid='"+k+"']");
            activeOrders.className = activeOrders.className ===
            "orders__container"
            ? "orders__container orders__container-clicked"
            : "orders__container";
            checkOld.className = "orders__container";
            checkOld = activeOrders;
            return onOrdersSelect(theOrder);
          }}
        className="orders__container">
          <Button status_item={status_item} getStatus={getStatus} />
        <div className="orders__item">
          <div className="orders__table_number">
            Borð {table_number}
          </div>
          <ul className="orders__order">
            <li>{quantity}x {title}</li>
          </ul>

        </div>
      </div>
    </li>
  );
};

export default Waiter;
