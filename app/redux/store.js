import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const defaultState = {
  shopList: {
    items: [],
    favorites: [],
    categorys: {}
  },
  users: {},
  loading: false,
}

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

const store = createStore(rootReducer, defaultState, enhancers);  

export const history = syncHistoryWithStore(hashHistory, store);

export default store;