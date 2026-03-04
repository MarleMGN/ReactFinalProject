import React, { useRef } from "react";
import MovieCard from "../components/MovieCard";

const AllMovies = ({ movies, setMovies }) => {
  function filterMovies(filter) {
    console.log(filter);
    if (filter === "A_TO_Z") {
      setMovies(movies.slice().sort((a, b) => a.title.localeCompare(b.title)));
    }
    if (filter === "RATING") {
      setMovies(movies.slice().sort((a, b) => b.vote_average - a.vote_average));
    }
    if (filter === "NEWEST") {
      setMovies(
        movies
          .slice()
          .sort((a, b) => new Date(b.release_date) - new Date(a.release_date)),
      );
    }
  }

  const originalMovies = useRef(null);

  if (!originalMovies.current && movies?.length > 0) {
    originalMovies.current = movies;
}

  function searchMovies() {
    const searchInput = document
      .getElementById("searchinput")
      .value.toLowerCase();

      if (searchInput === "") {
        setMovies(originalMovies.current);
        return;
      }


    const filteredMovies = originalMovies.current.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput),
    );
    
    setMovies(filteredMovies);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="movies__heading">
            <h2>All Movies</h2>
            <div className="allmovies__functions">
              <input
                type="text"
                className="search__bar"
                id="searchinput"
                placeholder="Search for a movie..."
                onKeyDown={(e) => e.key === "Enter" && searchMovies()}
              />
              <button className="search__btn" onClick={searchMovies}>Search</button>
              <select
                name=""
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => filterMovies(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="A_TO_Z">A to Z</option>
                <option value="RATING">Rating</option>
                <option value="NEWEST">Newest</option>
              </select>
            </div>
          </div>
          <div className="movies__grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMovies;
