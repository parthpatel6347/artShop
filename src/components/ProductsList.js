import React from "react";
import { withRouter } from "react-router";

import ProductCard from "./ProductCard";
import products from "../seedTest";

const ProductsList = ({ match }) => {
  let page = match.params.page;
  let foundProducts = products[page];

  return (
    <div>
      <h4>
        {page === "paintings"
          ? "Paintings"
          : page === "digital"
          ? "Digital Art"
          : page === "photos"
          ? "Photographs"
          : "Sculptures"}
      </h4>
      {foundProducts.map(({ id, ...productData }) => (
        <ProductCard key={id} id={id} {...productData} />
      ))}
    </div>
  );
};

export default withRouter(ProductsList);
