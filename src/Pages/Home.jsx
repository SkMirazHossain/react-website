import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    document.title = "Home Page"; // Set the page title
  }, []);

  return (
    <h1>
      Hello, This is Home <Link to="/about">click</Link>
    </h1>
  );
};