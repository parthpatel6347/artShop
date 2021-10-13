import React from "react";
import {
  CategoryContainer,
  CategoryDescription,
  CategoryFrame,
  CategoryImageContainer,
  CategoryInfo,
  CategoryTitle,
  CategoryImage,
  CategoryButton,
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
        <CategoryButton to={`/explore/${link}`}>
          Explore {title.toLowerCase()}
        </CategoryButton>
      </CategoryInfo>
    </CategoryContainer>
  );
};

export default HomeCategory;
