import { SHOW, HIDE } from "./action";
const defaultState = {
  display: true,
};
const displayReducer = function (state = defaultState, action) {
  switch (action.type) {
    case SHOW: {
      return {
        ...state,
        display: true,
      };
    }
    case HIDE: {
      return {
        ...state,
        display: false,
      };
    }
    default:
      return state;
  }
};
export default displayReducer;
