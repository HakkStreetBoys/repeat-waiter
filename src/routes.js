import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import WaiterOrders from './components/WaiterOrders';
import KitchenOrders from './components/KitchenOrders';

const Greeting = () => {
  return <div>Hey there!!!!</div>
};


export default (
<Route path="/" component={App}>
  <IndexRoute component={WaiterOrders} />
  <Route path="kitchen" component={KitchenOrders} />
  <Route path="table" component={Greeting} />
  <Route path="done" component={Greeting} />
</Route>
);
