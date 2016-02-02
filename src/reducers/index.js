import { combineReducers } from 'redux';
import categories from './categories';
import splash from './splash';

const rootReducer = combineReducers({
  categories,
  splash
});

export default rootReducer;
