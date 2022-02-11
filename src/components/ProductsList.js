import React from "react";
import { withRouter } from "react-router";

// redux imports
import { connect } from "react-redux";
import { selectCategory } from "../redux/products/productsSelectors";

// import styled components
import {
  ProductsContainer,
  ProductsMain,
  ProductsTitle,
} from "../styles/ProductListStyles";

import ProductCard from "./ProductCard";
import NotFound from "../pages/NotFound";


const ProductsList = ({ match, category }) => {
  let page = match.params.page;

  return (
    <>
      {category ? (
        <ProductsMain>

          {/* set header as per the url param */}
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
        <NotFound /> // Render a not found page if url param does not match any category names.
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // get category from the url param
  category: selectCategory(ownProps.match.params.page)(state),
});

export default withRouter(connect(mapStateToProps)(ProductsList));
