import React from "react";
import { withRouter } from "react-router";

// import styled components
import {
  CategoryCardContainer,
  CategoryImageContainer,
  CategoryImage,
  Frame,
  CategoryName,
} from "../styles/CategoriesStyles";


const CategoryCard = ({ title, image, link, history }) => {
  return (
    <CategoryCardContainer>
      <CategoryImageContainer onClick={() => history.push(`/explore/${link}`)}>
        <Frame></Frame>
        <CategoryImage
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></CategoryImage>
      </CategoryImageContainer>
      <CategoryName to={`/explore/${link}`}>{title}</CategoryName>
    </CategoryCardContainer>
  );
};

export default withRouter(CategoryCard);
