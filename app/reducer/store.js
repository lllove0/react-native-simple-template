import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import middleware from '../middleware';
import reducer from '../reducer';

const enhancers = [
  applyMiddleware(...middleware),
  reduxLoop.install()
];

/* eslint-disable no-undef */
const composeEnhancers = (__DEV__ && typeof (window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;
