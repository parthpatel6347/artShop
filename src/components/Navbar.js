import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h3>Navbar</h3>
      </Link>
      <ul>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
