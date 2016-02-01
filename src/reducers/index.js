import { combineReducers } from 'redux';
import main from './main';
import splash from './splash';

const rootReducer = combineReducers({
  main,
  splash
});

export default rootReducer;
