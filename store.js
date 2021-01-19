import { createStore } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./components/reducers/index";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["todo"],
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// export default () => {
//   return { store, persistor };
// };

// const store = createStore(RootReducer);

// export default store;
