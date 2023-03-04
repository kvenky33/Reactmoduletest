import displayReducer from "./reducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  displayReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
);
export default store;
