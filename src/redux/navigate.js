import { Actions } from 'react-native-router-flux';
import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

export const PUSH = 'PUSH';
export const RESET = 'RESET';
export const POP = 'POP';

export const push = createAction(PUSH, (name, data) => {
  if (typeof Actions[name] === 'function') {
    Actions[name](data);
  }
  return {
    name,
    data
  };
});

export const reset = createAction(RESET, (name, data) => {
  Actions.reset(name);
  return {
    name,
    data
  };
});

export const pop = createAction(POP);

export default handleActions({
  PUSH: (state, action) => state.push(Map({ name: action.name, data: action.data })),
  RESET: (state, action) => Map({ name: action.name, data: action.data }),
  POP: (state) => state.filter((item, i) => i < state.length - 1)
}, {});
