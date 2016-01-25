const LOAD = 'LOAD';

const initialState = {
  loadded: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      return { ...state };
  }
};

export const load = () => ({
  type: LOAD
});
