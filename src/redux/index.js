import { combineReducers } from 'redux';
import categories from './categories';
import splash from './splash';
import navigate from './navigate';

const rootReducer = combineReducers({
  categories,
  splash,
  navigate
});

export default rootReducer;
