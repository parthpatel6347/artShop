import React from "react";
import {
  ButtonStyled,
  CategoryContainer,
  CategoryDescription,
  CategoryInfo,
  CategoryTitle,
} from "../styles/HomeStyles";

const HomeCategory = () => {
  return (
    <CategoryContainer>
      <CategoryInfo>
        <CategoryTitle>Paintings</CategoryTitle>
        <CategoryDescription>
          The most exquisite collection paintings from top artists around the
          world
        </CategoryDescription>
        <ButtonStyled>Explore paintings</ButtonStyled>
      </CategoryInfo>
    </CategoryContainer>
  );
};

export default HomeCategory;
