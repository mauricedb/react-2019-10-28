import { createStore } from "redux";
import { personReducer } from "./reduder";

const store = createStore(
  personReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
