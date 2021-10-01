import { CartActionTypes } from "./cartTypes";

export const toggleVisibility = () => ({
  type: CartActionTypes.TOGGLE_VISIBILITY,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const emptyCart = () => ({
  type: CartActionTypes.EMPTY_CART,
});

export const cloneCart = (cart) => ({
  type: CartActionTypes.CLONE_CART,
  payload: cart,
});

export const hideCart = () => ({
  type: CartActionTypes.HIDE_CART,
});
