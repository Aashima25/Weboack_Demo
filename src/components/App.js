import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/aboutus" component={AboutPage} />
    </div>
  );
}

export default App;
