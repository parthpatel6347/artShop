import React from "react";
import {
  ButtonStyled,
  CategoryContainer,
  CategoryDescription,
  CategoryFrame,
  CategoryImageContainer,
  CategoryInfo,
  CategoryTitle,
  CategoryImage,
} from "../styles/HomeStyles";

const HomeCategory = ({ title, description, image }) => {
  return (
    <CategoryContainer>
      <div>
        <CategoryImageContainer>
          <CategoryImage
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></CategoryImage>
          <CategoryFrame></CategoryFrame>
        </CategoryImageContainer>
      </div>
      <CategoryInfo>
        <CategoryTitle>{title}</CategoryTitle>
        <CategoryDescription>{description}</CategoryDescription>
        <ButtonStyled>Explore {title.toLowerCase()}</ButtonStyled>
      </CategoryInfo>
    </CategoryContainer>
  );
};

export default HomeCategory;
