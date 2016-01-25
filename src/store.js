import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import devTools from 'remote-redux-devtools';
import * as reducers from '../reducers';

const middlewares = [promiseMiddleware];
export const getStore = () => {
  let createStoreWithMiddleware;
  if (process.env.node_env === 'development') {
    createStoreWithMiddleware = compose(applyMiddleware(...middlewares), devTools)(createStore);
  } else {
    createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  }
  const reducer = combineReducers(reducers);
  return createStoreWithMiddleware(reducer);
};
