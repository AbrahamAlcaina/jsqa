import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const middlewares = [promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
})];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const configureStore = () => createStoreWithMiddleware(rootReducer);
