import { createAction, handleActions } from 'redux-actions';

const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const initialState = {
  loaded: false
};

export default handleActions({
  [LOAD_QUESTIONS]: {
    LOADING: (state) => ({ ...state, loading: true }),
    SUCCESS: (state, action) =>
        ({ ...state, loaded: true, loading: false, questions: action.payload }),
    ERROR: (state, action) => ({ ...state, loaded: false, loading: false, error: action.payload }),
  }
}, initialState);

export const load = createAction(LOAD_QUESTIONS, () => ({
  promise: () => require('../../qa.json')
}));
