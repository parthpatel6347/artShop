import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { selectCategory } from "../redux/products/productsSelectors";

import ProductCard from "./ProductCard";

import { ProductsContainer, ProductsMain } from "../styles/ProductListStyles";

import { Title, TitleContainer } from "../styles/CheckoutStyles";

const ProductsList = ({ match, category }) => {
  let page = match.params.page;

  return (
    <ProductsMain>
      <Title>
        {page === "paintings"
          ? "Paintings"
          : page === "digital"
          ? "Digital Art"
          : page === "photos"
          ? "Photographs"
          : "Sculptures"}
      </Title>
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
