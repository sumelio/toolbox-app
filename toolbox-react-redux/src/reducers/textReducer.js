import { SET_TEXT, START_LOADING, SET_ERROR } from "../types/textTypes";

/**
 * Initial state of JavaScript object with text variable and loading
 */
const INITIAL_STATE = {
  text: "",
  loading: false,
  error: null
};

/**
 * This reducer updates the text variable into the state
 *
 * @param  state It is a JavaScript object where the internal
 *                state of the application is stored as its properties.
 * @param  action Indicate a change in the store.
 * @returns {number}
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, text: action.payload, loading: false };
    case START_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
