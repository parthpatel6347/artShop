import { CartActionTypes } from "./cartTypes";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActionTypes.CLONE_CART:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
