import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { selectCategory } from "../redux/products/productsSelectors";

import ProductCard from "./ProductCard";

import { ProductsContainer, ProductsMain } from "../styles/ProductListStyles";

const ProductsList = ({ match, category }) => {
  let page = match.params.page;

  return (
    <ProductsMain>
      <h4>
        {page === "paintings"
          ? "Paintings"
          : page === "digital"
          ? "Digital Art"
          : page === "photos"
          ? "Photographs"
          : "Sculptures"}
      </h4>
      <ProductsContainer>
        {category.map(({ id, ...productData }) => (
          <ProductCard key={id} id={id} {...productData} />
        ))}
      </ProductsContainer>
    </ProductsMain>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.page)(state),
});

export default withRouter(connect(mapStateToProps)(ProductsList));
