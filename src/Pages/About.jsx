import { useEffect } from "react";
import { Link } from "react-router-dom";

export const About = () => {
  useEffect(() => {
    document.title = "About Page"; // Set the page title
  }, []);

  return <h1>Welcome to the About Page <Link to="/about/inner">Click here to see about inner page</Link></h1>;
}