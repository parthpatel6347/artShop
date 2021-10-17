import { OrderActionTypes } from "./ordersTypes";

export const syncOrders = (orders) => ({
  type: OrderActionTypes.SYNC_ORDERS,
  payload: orders,
});

export const clearOrders = () => ({
  type: OrderActionTypes.CLEAR_ORDERS,
});
