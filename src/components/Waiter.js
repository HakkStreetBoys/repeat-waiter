import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Button from './Button'

const getStatus = (status_item) => {
  // console.log( "inGetStatus ", status_item );
}

let checkOld = {};
checkOld.className = '';

const Waiter = ({ theOrder, onOrdersSelect, active, key1, key2, key3 }) => {
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
          <Button status_item={status_item} getStatus={getStatus} key1={key1} key2={key2} key3={key3} />
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
