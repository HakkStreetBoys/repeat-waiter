import React from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "./Button";
import PaymentStatus from "./PaymentStatus";

const getStatus = status_item => {
  console.log("inGetStatus ", status_item);
};

const getStatusPay = status_pay => {
  console.log("inGetStatus ", status_item);
};

let checkOld = {};
checkOld.className = "";

const Complete = ({ theOrder, onOrdersSelect, active, key1, key2, key3 }) => {
  const { order_number, title, table_number, status_item, status_food, status_pay, quantity, userID, price } = theOrder[0];
  const status = ["unpayd", "payd"];
  const text = ["Ógreidd Pöntun", "Greidd Pöntun"];
  const image = ["../src/icons/stop.svg", "/src/icons/checked1.svg"]
  const cName = ' ' + status[status_pay];
  return (
    <li className={ "orders__items" + cName }>
      <div
        onClick={(event, k) =>
          { const activeOrders = document.querySelectorAll("[data-reactid='"+k+"']");
            activeOrders.className = activeOrders.className ===
            "orders__container"
            ? "orders__container orders__container-clicked"
            : "orders__container";
            checkOld.className = "orders__container";
            checkOld = activeOrders;
            // return onOrdersSelect(theOrder);
          }}
        className="orders__container">
          <Button status_item={status_item} getStatus={getStatus} key1={key1} key2={key2} key3={key3} />
        <div className="orders__phone">
          {userID}
        </div>
        <div className="orders__item">
          <div className="orders__table_number">
            Borð {table_number}
          </div>
          <ul className="orders__order">
            <li>
              <div className="orders__circle">
                {quantity}
              </div>
              <div className="orders__title">
                {title}
              </div>
            </li>
            <div className="orders__price">
              <li>{price} kr.</li>
            </div>
          </ul>

        </div>
      </div>
    </li>
  );
};

export default Complete;
