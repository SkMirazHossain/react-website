{
  /* 
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../UI/Card";

export const Movie = () => {
useEffect(() => {
    document.title = "Movie Page"; // Set the page title
  }, []);
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <>
    <h2>Movie list</h2>
    <ul className="container grid grid-four--cols">
        
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
    </>
  );
};
*/
}



import { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { Card } from "../UI/Card";

export const Movie = () => {
  const { Search, totalResults } = useLoaderData(); // Extract movie list and total results
  console.log(Search);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "titanic";
  
  const [page, setPage] = useState(Number(new URLSearchParams(location.search).get("page")) || 1); // Set initial page state from URL

  // Reset page to 1 when the query changes
  useEffect(() => {
    setPage(1); // Reset page to 1 when query changes (new search)
  }, [query]);

  useEffect(() => {
    document.title = "Movie Page"; // Set the page title
  }, []);

  // Function to handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (query) {
      navigate(`/movies?query=${query}&page=1`); // Reset to page 1 when a new search is made
    }
  };

  // Function to handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent going out of bounds
    setPage(newPage); // Update state
    navigate(`/movies?query=${query}&page=${newPage}`); // Update URL with new page
  };

  const totalPages = Math.ceil(totalResults / 10); // Assuming 10 results per page

  return (
    <>
      <h2>Movie List</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: "1rem" }}>
        <input
          name="query"
          type="text"
          placeholder="Search movies..."
          defaultValue={query}
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem" }}>
          Search
        </button>
      </form>

      <ul className="container grid grid-four--cols">
        {Search?.map((curMovie) => (
          <Card key={curMovie.imdbID} curMovie={curMovie} />
        ))}
      </ul>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};
