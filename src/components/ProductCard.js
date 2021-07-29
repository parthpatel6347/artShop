import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, artist, image, description, category, id }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <p>{title}</p>
      </Link>
      <p>{artist}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
};

export default ProductCard;
