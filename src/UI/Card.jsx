import { NavLink } from "react-router-dom";
import "./Card.css";
/* eslint-disable react/prop-types */

// Destructuring props here
export const Card = ({ curMovie }) => {



{
/*
Here we Destructuring the curMovie Object https://prnt.sc/T3AVKM_DSy3P to avoid Dot notation.
const { Poster, imdbID } = curMovie;
This line uses object destructuring to extract the Poster and imdbID properties from the curMovie object.
After this, you can directly use Poster and imdbID in the component instead of writing "curMovie.Poster" or "curMovie.imdbID"

*** If there is multiple layer of nested object is preset we destructure the object like this https://prnt.sc/eoefH7-qMe5n

*/
  }
  const { Poster, imdbID,Title,Year,Type } = curMovie;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
          <h3><a href={`https://www.google.com/search?q=${encodeURIComponent(Title)}`} target="_blank">{Title} ({Year})</a></h3>
          <p>Type: <b>{Type}</b></p>
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};
