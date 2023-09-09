import React from "react";
import CategoryCard from "../components/CategoryCard";
import { CategoryContainer } from "../styles/CategoriesStyles";
import { categoryData } from "../artShopStaticData";

const Categories = () => {
  return (
    <CategoryContainer>
      {Object.keys(categoryData).map((key) => (
        <CategoryCard
          key = {key}
          title={categoryData[key].title}
          image={categoryData[key].image}
          link={categoryData[key].link}
        />
      ))}
    </CategoryContainer>
  );
};

export default Categories;
