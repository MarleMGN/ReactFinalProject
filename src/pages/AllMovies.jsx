import React, { useRef, useState } from "react";
import MovieCard from "../components/MovieCard";
import PageButtons from "../components/PageButtons";
import scarehauslogo from "../assets/scarehauslogo.png";

const AllMovies = ({
  movies,
  setMovies,
  page,
  setPage,
  totalPages,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}) => {
  const [inputVal, setInputVal] = useState("");

  function handleSearch() {
    setSearchQuery(inputVal.trim());
    setPage(1);
  }

  function handleClear() {
    setInputVal("");
    setSearchQuery("");
    setPage(1);
  }

  function handleSort(filter) {
    if (filter === "RATING") {
      setSortBy("vote_average.desc");
      setPage(1);
    }
    if (filter === "NEWEST") {
      setSortBy("release_date.desc");
      setPage(1);
    }
    if (filter === "POPULARITY") {
      setSortBy("popularity.desc");
      setPage(1);
    }

    if (filter === "A_TO_Z") {
      setMovies(movies.slice().sort((a, b) => a.title.localeCompare(b.title)));
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {totalPages > 1 && (
            <PageButtons
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              className="page__buttons"
            />
          )}
          <div className="movies__heading">
            <h2>All Movies</h2>
            <div className="allmovies__functions">
              <input
                type="text"
                className="search__bar"
                id="searchinput"
                placeholder="Search for a movie..."
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button className="search__btn" onClick={handleSearch}>
                Search
              </button>
              {searchQuery && (
                <button className="clear__btn" onClick={handleClear}>
                  Clear
                </button>
              )}
              <select
                id="filter"
                value={
                  sortBy === "vote_average.desc"
                    ? "RATING"
                    : sortBy === "release_date.desc"
                      ? "NEWEST"
                      : sortBy === "popularity.desc"
                        ? "POPULARITY"
                        : "DEFAULT"
                }
                onChange={(event) => handleSort(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="A_TO_Z">A to Z</option>
                <option value="RATING">Rating</option>
                <option value="NEWEST">Newest</option>
                <option value="POPULARITY">Popularity</option>
              </select>
            </div>
          </div>
          <div className="movies__grid">
            {movies.slice(0, 19).map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
            <div className="allmovies__logo">
              <img
                src={scarehauslogo}
                alt="Scarehaus"
                className="allmovies__logo--img"
              />
            </div>
            {movies.slice(19).map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
          {totalPages > 1 && (
            <PageButtons
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              className="page__buttons--bottom"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AllMovies;
