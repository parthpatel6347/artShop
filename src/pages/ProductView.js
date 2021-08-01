import React from "react";
import products from "../seedTest";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";

const ProductView = ({ match, addItemToCart, cartItems }) => {
  let foundProduct = products.find((product) => product.id === match.params.id);
  const { image, title, artist, description, category } = foundProduct;

  let isInCart = cartItems.find((product) => product.id === foundProduct.id);

  const handleAdd = () => {
    if (isInCart) {
      alert("Item already added");
      return;
    }
    addItemToCart(foundProduct);
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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ProductView);
