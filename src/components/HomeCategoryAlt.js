import React from "react";
import {
  CategoryContainer,
  CategoryInfo,
  CategoryTitle,
  CategoryDescription,
  CategoryFrame,
  CategoryImageContainer,
  CategoryImage,
  CategoryButton,
  CategoryInfoAlt,
  CategoryImageAlt,
  CategoryFrameAlt,
  CategoryContainerAlt,
  CategoryImageContainerAlt,
} from "../styles/HomeStyles";

const HomeCategoryAlt = ({ title, description, image, link }) => {
  return (
    <CategoryContainerAlt>
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

export default HomeCategoryAlt;
