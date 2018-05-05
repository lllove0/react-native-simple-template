
/* global window */
import { applyMiddleware, createStore, compose } from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import middleware from '../middleware';
import reducer from '../reducer';
import { Platform } from 'react-native';
import { composeWithDevTools } from 'remote-redux-devtools';

const enhancers = [
  applyMiddleware(...middleware),
  reduxLoop.install()
];

let composeEnhancers = compose;
if (__DEV__) {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools)({
    name: Platform.OS,
    ...require('../../package.json').remotedev
  });
}

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;
