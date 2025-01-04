{
  /* 
export const movieList = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=b2880005&s=good&page=1`
      );
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  */
}

// movieList.js
export const movieList = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "titanic"; // Default to "titanic"
  const page = url.searchParams.get("page") || 1; // Default to page 1
  
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=b2880005&s=${query}&page=${page}`
    );
    const data = await response.json();
    return data; // Return the fetched data directly
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { error: "Failed to fetch movies" }; // Return error if fetching fails
  }
};



