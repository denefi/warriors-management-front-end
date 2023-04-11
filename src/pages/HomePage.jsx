import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

// src/pages/HomePage.js
function HomePage() {
  console.log(useContext(ThemeContext));
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
