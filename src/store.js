import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const middlewares = [promiseMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const configureStore = () => createStoreWithMiddleware(rootReducer);
