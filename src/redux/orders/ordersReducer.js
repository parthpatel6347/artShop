import { OrderActionTypes } from "./ordersTypes";

const INITIAL_STATE = {
  userOrders: [],
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.SYNC_ORDERS:
      return {
        userOrders: [...action.payload],
      };
    default:
      return state;
  }
};

export default ordersReducer;
