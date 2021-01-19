import { createStore } from "redux";
import { AsyncStorage } from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./components/reducers/index";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };
// const persistedReducer = persistReducer(persistConfig, RootReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

const store = createStore(RootReducer);

export default store;
