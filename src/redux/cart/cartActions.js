import { CartActionTypes } from "./cartTypes";

export const toggleVisibility = () => ({
  type: CartActionTypes.TOGGLE_VISIBILITY,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
