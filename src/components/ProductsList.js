import React from "react";

import ProductCard from "./ProductCard";
import products from "../seedTest";

const ProductsList = () => {
  return (
    <div>
      <h4>product list</h4>
      {products.map(({ id, ...productData }) => (
        <ProductCard key={id} id={id} {...productData} />
      ))}
    </div>
  );
};

export default ProductsList;
