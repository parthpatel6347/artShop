import { createSelector } from "reselect";

const selectOrders = (state) => state.orders;

export const selectUserOrders = createSelector(
  [selectOrders],
  (orders) => orders.userOrders
);
