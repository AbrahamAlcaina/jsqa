import { combineReducers } from 'redux-immutable';
import categories from './categories';
import navigate from './navigate';
import intializeState from './intializeState';

const rootReducer = combineReducers({
  categories,
  intializeState,
  navigate
});

export default rootReducer;
