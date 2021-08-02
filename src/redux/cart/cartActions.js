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
