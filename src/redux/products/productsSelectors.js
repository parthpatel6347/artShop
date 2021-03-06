import { createSelector } from "reselect";

const selectProducts = (state) => state.products;

export const selectCategory = (pageParam) =>
  createSelector([selectProducts], (categories) => categories[pageParam]);

export const selectProduct = (productIDParam, pageParam) =>
  createSelector([selectCategory(pageParam)], (category) =>
    category.find((product) => product.id === productIDParam)
  );
