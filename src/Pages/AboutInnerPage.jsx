import { useEffect } from "react";
import { Link } from "react-router-dom";

export const AboutInnerPage = () => {
  useEffect(() => {
    document.title = "About Inner page"; // Set the page title
  }, []);

  return (
    <h1>
      Hello, This is About Inner page <Link to="/about">go to About page again. </Link>
    </h1>
  );
};