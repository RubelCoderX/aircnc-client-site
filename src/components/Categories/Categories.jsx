import React from "react";
import { categories } from "./categoriesData";
import CategoriesBox from "./CategoriesBox";
import Container from "../Shared/Container/Container";

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((category, index) => (
          <CategoriesBox
            key={index}
            label={category.label}
            icon={category.icon}
            description={category.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
