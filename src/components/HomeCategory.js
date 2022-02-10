import React from "react";
import { withRouter } from "react-router";

// import styled components
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


const HomeCategory = ({ title, description, image, link, history }) => {

  // for mobile and smaller screen sizes, clicking on the entire container will redirect to the link
  const handleClick = () => {
    if (window.innerWidth <= 630) {
      history.push(`/explore/${link}`)
    }
  }

  return (
    <CategoryContainer onClick={handleClick}>
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

export default withRouter(HomeCategory);
