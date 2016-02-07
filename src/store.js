import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { Map } from 'immutable';
import rootReducer from './redux';
import { initialize } from './redux/intializeState';
import devTools from 'remote-redux-devtools';

const middlewares = [promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
})];

let createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const configureStore = () => {
  if (process.env.NODE_ENV === 'development') {
    createStoreWithMiddleware = compose(applyMiddleware(...middlewares), devTools())(createStore);
  }
  const initialState = rootReducer(Map({}), initialize);
  return createStoreWithMiddleware(rootReducer, initialState);
};
