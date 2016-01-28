import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';
import devTools from 'remote-redux-devtools';

const middlewares = [promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
})];


let createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const configureStore = () => {
  if (process.env.NODE_ENV === 'development') {
    createStoreWithMiddleware = compose(applyMiddleware(...middlewares), devTools())(createStore);
  }
  return createStoreWithMiddleware(rootReducer);
};
