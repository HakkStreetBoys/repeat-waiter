import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import WaiterOrders from './components/WaiterOrders';
import Login from './components/Login';
import KitchenOrders from './components/KitchenOrders';
import CompleteOrders from './components/CompleteOrders';
import TableOrders from './components/TableOrders';
import OrderData from './OrderArr';

export default (
<Route path="/" component={App}>
  <IndexRoute component={WaiterOrders} />
  <Route path="login" component={Login} />
  <Route path="kitchen" component={KitchenOrders} />
  <Route path="table" component={TableOrders} />
  <Route path="done" component={CompleteOrders} />
</Route>
);
