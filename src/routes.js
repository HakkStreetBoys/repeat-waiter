import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import WaiterOrders from './components/WaiterOrders';
import KitchenOrders from './components/KitchenOrders';
import CompleteOrders from './components/CompleteOrders';
import TableOrders from './components/TableOrders';
import OrderData from './OrderArr';

const Greeting = () => {
  return <div>Hey there!!!!</div>
};


export default (
<Route path="/" component={App}>
  <IndexRoute component={WaiterOrders} />
  <Route path="kitchen" component={KitchenOrders} />
  <Route path="table" component={TableOrders} />
  <Route path="done" component={CompleteOrders} />
</Route>
);
