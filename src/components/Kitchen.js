import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Button from './Button'

const getStatus = (status_drink) => {
  console.log( "inGetStatus ", status_drink );
}

let checkOld = {};
checkOld.className = '';

const Kitchen = ({ theOrder, onOrdersSelect, active }) => {
  const { title, table_number, status_food, quantity } = theOrder[0];
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
            <Col md="2">
              <div className="orders__table_number">
                {table_number}
              </div>
            </Col>
            <Col md="3">
              <div className="orders__order">
                {quantity}x {title}{theOrder.length > 1? <img className="orders__plus" src="/src/icons/plus.svg" /> :null}
              </div>
            </Col>
            <Col md="3">
            </Col>
            <Col md={{ size: 3, push: 2 }} lg={{ size: 3, push: 2 }}>
              <div className="orders__button-container">
                <Button status_drink={status_food} getStatus={getStatus} />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
      );
      };

      export default Kitchen;
