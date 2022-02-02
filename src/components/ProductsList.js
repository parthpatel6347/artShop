import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { selectCategory } from "../redux/products/productsSelectors";

import ProductCard from "./ProductCard";

import {
  ProductsContainer,
  ProductsMain,
  ProductsTitle,
} from "../styles/ProductListStyles";
import NotFound from "../pages/NotFound";

const ProductsList = ({ match, category }) => {
  let page = match.params.page;

  return (
    <>
      {category ? (
        <ProductsMain>
          <ProductsTitle style={{ marginLeft: "10px" }}>
            {page === "paintings"
              ? "Paintings"
              : page === "digital"
                ? "Digital Art"
                : page === "photos"
                  ? "Photographs"
                  : "Sculptures"}
          </ProductsTitle>
          <ProductsContainer>
            {category.map(({ id, ...productData }) => (
              <ProductCard key={id} id={id} {...productData} />
            ))}
          </ProductsContainer>
        </ProductsMain>
      ) : (
        <NotFound />
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.page)(state),
});

export default withRouter(connect(mapStateToProps)(ProductsList));
