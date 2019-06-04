import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>We are in home page</h1>
    <Link to="aboutus">learn more</Link>
  </div>
);

export default HomePage;
