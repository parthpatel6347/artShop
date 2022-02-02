import products from "../../seedTest";

let INITIAL_STATE;


if (window.localStorage.getItem('products') !== null) {
  INITIAL_STATE = JSON.parse(window.localStorage.getItem('products'))
} else {
  window.localStorage.setItem('products', JSON.stringify(products))
  INITIAL_STATE = products
}


const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
