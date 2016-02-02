import { createAction, handleActions } from 'redux-actions';

const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const initialState = {
  loaded: false
};

export default handleActions({
  LOAD_QUESTIONS_LOADING: (state) => ({ ...state, loading: true }),
  LOAD_QUESTIONS_SUCCESS: (state, action) =>
    ({ ...state, loaded: true, loading: false, questions: action.payload }),
  LOAD_QUESTIONS_ERROR: (state, action) =>
    ({ ...state, loaded: false, loading: false, error: action.payload })
}, initialState);

function loadQuestions() {
  return new Promise(resolve => {
    const questions = require('../../qa.json');
    resolve(questions);
  });
}

export const load = createAction(LOAD_QUESTIONS, () => ({
  promise: loadQuestions()
}));
