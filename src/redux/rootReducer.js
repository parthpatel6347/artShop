import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";
import ordersReducer from "./orders/ordersReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["orders", "cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  orders: ordersReducer,
});

export default persistReducer(persistConfig, rootReducer);
