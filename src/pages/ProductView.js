import React from "react";
import products from "../seedTest";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";

const ProductView = ({ match, addItemToCart }) => {
  let foundProduct = products.find((product) => product.id === match.params.id);
  const { image, title, artist, description, category } = foundProduct;
  return (
    <div>
      product page
      <div style={{ border: "1px solid black" }}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{artist}</p>
        <p>{description}</p>
        <p>{category}</p>
        <button onClick={() => addItemToCart(foundProduct)}>Add to cart</button>
      </div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(ProductView);
