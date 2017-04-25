import React from 'react';
import { Container, Row, Col } from "reactstrap";
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
    <div
      onClick={(event, k) =>
        { const activeOrders = document.querySelectorAll("[data-reactid='"+k+"']")[0];
          activeOrders.className = activeOrders.className ===
          "orders__container"
          ? "orders__container orders__container-clicked"
          : "orders__container";
          checkOld.className = "orders__container";
          checkOld = activeOrders;
          return onOrdersSelect(theOrder);
        }}
      className="orders__container">

      <Container>
        <Row>
          <div className="orders__item">
            <Col md={{ size: 0, push: 2 }}>
              <div className="orders__stripe" />
            </Col>
            <Col md="1">
              <div className="orders__table_number">
                {table_number}
              </div>
            </Col>
            <Col md="3">
              <div className="orders__order">
                {title}
              </div>
            </Col>
            <div className="orders__button-container">
              <Col md="3">
                <Button status_drink={status_food} getStatus={getStatus} />
              </Col>
            </div>
            <Col md="4">
              <div className="orders__payment-container">
                <PaymentStatus
                  status_pay={status_pay}
                  getStatusPay={getStatus}
                />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Table;
