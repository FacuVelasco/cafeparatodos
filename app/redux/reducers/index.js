import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import shopList from './shopList';
import loading from './loading';

const rootReducer = combineReducers({ shopList, users, loading, routing: routerReducer });

export default rootReducer;