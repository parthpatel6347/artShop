import React from "react";
import { withRouter } from "react-router";

// import styled components
import {
  CategoryTitle,
  CategoryDescription,
  CategoryButton,
  CategoryInfoAlt,
  CategoryImageAlt,
  CategoryFrameAlt,
  CategoryContainerAlt,
  CategoryImageContainerAlt,
} from "../styles/HomeStyles";


const HomeCategoryAlt = ({ title, description, image, link, history }) => {

  // for mobile and smaller screen sizes, clicking on the entire container will redirect to the link
  const handleClick = () => {
    if (window.innerWidth <= 630) {
      history.push(`/explore/${link}`)
    }
  }

  return (
    <CategoryContainerAlt onClick={handleClick}>
      <CategoryInfoAlt>
        <CategoryTitle>{title}</CategoryTitle>
        <CategoryDescription>{description}</CategoryDescription>
        <CategoryButton
          to={`/explore/${link}`}
          style={{ marginLeft: "auto", marginRight: "unset" }}
        >
          Explore {title.toLowerCase()}
        </CategoryButton>
      </CategoryInfoAlt>
      <div>
        <CategoryImageContainerAlt>
          <CategoryImageAlt
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></CategoryImageAlt>
          <CategoryFrameAlt></CategoryFrameAlt>
        </CategoryImageContainerAlt>
      </div>
    </CategoryContainerAlt>
  );
};

export default withRouter(HomeCategoryAlt);
