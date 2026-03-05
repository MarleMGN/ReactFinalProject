import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import MovieDetails from "./pages/MovieDetails";
import axios from "axios";
import Footer from "./components/Footer";

const API_KEY = "cc01e69bb401cb5a9344f1f01de08a15";

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("vote_average.desc");

  async function fetchFeaturedMovies() {
    const [byRating, byVotes] = await Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&without_genres=10751,16&language=en-US&sort_by=vote_average.desc&vote_count.gte=200&page=1`,
      ),
      axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&without_genres=10751,16&language=en-US&sort_by=vote_count.desc&page=1`,
      ),
    ]);

    const combined = [...byRating.data.results, ...byVotes.data.results];

    const unique = [...new Map(combined.map((m) => [m.id, m])).values()];

    const scored = unique
      .filter((m) => m.poster_path)
      .sort((a, b) => {
        const scoreA = a.vote_average * Math.log(a.vote_count);
        const scoreB = b.vote_average * Math.log(b.vote_count);
        return scoreB - scoreA;
      });

    setFeaturedMovies(scored.slice(0, 20));
  }

  async function fetchMovies() {
    const accumulated = [];
    let tmdbPage = page;
    let lastTotalPages = 1;

    while (accumulated.length < 20) {
      const url = searchQuery
        ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&page=${tmdbPage}`
        : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&without_genres=10751,16&language=en-US&sort_by=${sortBy}&vote_count.gte=50&page=${tmdbPage}`;

      const response = await axios.get(url);
      lastTotalPages = response.data.total_pages;

      if (tmdbPage === page) {
        console.log("First page API response:", response.data.results);
      }

      const filtered = response.data.results.filter(
        (m) =>
          m.genre_ids.includes(27) &&
          m.poster_path &&
          !m.genre_ids.includes(10751) &&
          !m.genre_ids.includes(16),
      );

      accumulated.push(...filtered);
      tmdbPage++;

      if (tmdbPage > lastTotalPages) break;
    }

    setMovies(accumulated.slice(0, 20));
    setTotalPages(lastTotalPages);
  }

  useEffect(() => {
    fetchFeaturedMovies();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [page, searchQuery, sortBy]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} featuredMovies={featuredMovies} />}
        />
        <Route
          path="/movies"
          element={
            <AllMovies
              movies={movies}
              setMovies={setMovies}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          }
        />
        <Route
          path="/movies/:id"
          element={
            <MovieDetails
              movies={movies}
              genreMap={genreMap}
              featuredMovies={featuredMovies}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
