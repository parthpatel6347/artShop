import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { CategoryContainer } from "../styles/CategoriesStyles";
import { categoryData } from "../artShopStaticData";

const Categories = () => {
  return (
    <CategoryContainer>
      {Object.keys(categoryData).map((key) => (
        <CategoryCard
          title={categoryData[key].title}
          image={categoryData[key].image}
          link={categoryData[key].link}
        />
      ))}
      {/* <Link to="explore/paintings">
        <h1>Painting</h1>
      </Link>
      <Link to="explore/digital">
        <h1>Digital</h1>
      </Link>
      <Link to="explore/photos">
        <h1>Photographs</h1>
      </Link>
      <Link to="explore/sculptures">
        <h1>sculptures</h1>
      </Link> */}
    </CategoryContainer>
  );
};

export default Categories;
<h1>Painting</h1>;
