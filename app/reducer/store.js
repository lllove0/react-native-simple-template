import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import middleware from '../middleware';
import reducer from '../reducer';
import { Platform } from 'react-native';
import { composeWithDevTools } from 'remote-redux-devtools';

const enhancers = [
  applyMiddleware(...middleware),
  reduxLoop.install()
];

/* eslint-disable no-undef */
// const composeEnhancers = (__DEV__ && typeof (window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */


let composeEnhancers = compose;
if (__DEV__) {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools)({
    name: Platform.OS,
    ...require('../../package.json').remotedev,
    // actionCreators,
  });
  /* eslint-enable no-underscore-dangle */
}

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;
