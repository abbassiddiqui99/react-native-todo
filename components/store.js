import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducers/index";

const store = createStore(RootReducer);

export default store;
