import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { selectProduct } from "../redux/products/productsSelectors";

import { selectCurrentUser } from "../redux/user/userSelectors";
import { addItemToUserCart } from "../firebase/utils";

const ProductView = ({
  addItemToCart,
  cartItems,
  foundProduct,
  currentUser,
}) => {
  const { image, title, artist, description, category } = foundProduct;

  let isInCart = cartItems.find((product) => product.id === foundProduct.id);

  const handleAdd = () => {
    if (isInCart) {
      alert("Item already added");
      return;
    }
    addItemToCart(foundProduct);
    if (currentUser)
      addItemToUserCart(currentUser, [...cartItems, foundProduct]);
  };

  return (
    <div>
      product page
      <div style={{ border: "1px solid black" }}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{artist}</p>
        <p>{description}</p>
        <p>{category}</p>
        <button onClick={handleAdd}>Add to cart</button>
      </div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

const mapStateToProps = (state, ownProps) => ({
  cartItems: selectCartItems(state),
  foundProduct: selectProduct(
    ownProps.match.params.id,
    ownProps.match.params.page
  )(state),
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ProductView);
