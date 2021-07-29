import React from "react";
import products from "../seedTest";

const ProductView = ({ match }) => {
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
      </div>
    </div>
  );
};

export default ProductView;
