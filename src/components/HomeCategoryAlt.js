import React from "react";
import {
  CategoryContainer,
  CategoryInfo,
  CategoryTitle,
  CategoryDescription,
  ButtonStyled,
  CategoryFrame,
  CategoryImageContainer,
  CategoryImage,
} from "../styles/HomeStyles";

const HomeCategoryAlt = ({ title, description, image, link }) => {
  return (
    <CategoryContainer>
      <CategoryInfo
        style={{
          alignItems: "flex-end",
          textAlign: "right",
          marginRight: "50px",
          marginLeft: "unset",
        }}
      >
        <CategoryTitle>{title}</CategoryTitle>
        <CategoryDescription>{description}</CategoryDescription>
        <ButtonStyled
          to={`/explore/${link}`}
          style={{ marginLeft: "auto", marginRight: "unset" }}
        >
          Explore {title.toLowerCase()}
        </ButtonStyled>
      </CategoryInfo>
      <div>
        <CategoryImageContainer>
          <CategoryImage
            style={{
              backgroundImage: `url(${image})`,
              left: 0,
              right: "unset",
            }}
          ></CategoryImage>
          <CategoryFrame
            style={{
              left: "unset",
              right: 0,
            }}
          ></CategoryFrame>
        </CategoryImageContainer>
      </div>
    </CategoryContainer>
  );
};

export default HomeCategoryAlt;
