import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <Link to="explore/paintings">
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
      </Link>
    </div>
  );
};

export default Categories;
<h1>Painting</h1>;
