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

const HomeCategory = ({ title, description, image, link }) => {
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
        <ButtonStyled to={`/explore/${link}`}>
          Explore {title.toLowerCase()}
        </ButtonStyled>
      </CategoryInfo>
    </CategoryContainer>
  );
};

export default HomeCategory;
