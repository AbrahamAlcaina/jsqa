const LOAD = 'LOAD';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state };
    default:
      return state;
  }
}

export const load = () => ({
  type: LOAD
});
