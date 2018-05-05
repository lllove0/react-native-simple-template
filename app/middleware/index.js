import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './loggerMiddleware';
import reduxMiddleware from './reduxMiddleware';

export default [
  promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware,
  reduxMiddleware
];
