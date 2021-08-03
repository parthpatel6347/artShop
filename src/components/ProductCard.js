import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const ProductCard = ({
  title,
  artist,
  image,
  description,
  category,
  id,
  location,
}) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <Link to={`${location.pathname}/${id}`}>
        <img src={image} alt={title} />
        <p>{title}</p>
      </Link>
      <p>{artist}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
};

export default withRouter(ProductCard);
