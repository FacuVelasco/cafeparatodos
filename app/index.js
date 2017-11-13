import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';

import Main from './containers/Main.jsx';
import Home from './containers/Home.jsx';
import List from './containers/ShopList.jsx';

const route = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path="list" component={List} />
      </Route>
    </Router>
  </Provider>
)

render(route, document.getElementById('root'));