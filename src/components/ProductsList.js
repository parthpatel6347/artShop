import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { selectCategory } from "../redux/products/productsSelectors";

import ProductCard from "./ProductCard";

const ProductsList = ({ match, category }) => {
  let page = match.params.page;

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
      {category.map(({ id, ...productData }) => (
        <ProductCard key={id} id={id} {...productData} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.page)(state),
});

export default withRouter(connect(mapStateToProps)(ProductsList));
