import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_QUESTIONS_LOADING: (state) => state.set({ loading: true }),
  LOAD_QUESTIONS_SUCCESS: (state, action) =>
    state
      .update(categories => categories
      .set('loading', false)
      .set('loaded', true)
      .set('categories', Immutable.fromJS(action.payload.categories))),
  LOAD_QUESTIONS_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_QUESTIONS, () => ({
  promise: new Promise(resolve => {
    const questions = require('../../qa.json');
    // simutale load from server
    setTimeout(() => resolve(questions), 500);
  })
}));
