import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import MovieDetails from "./pages/MovieDetails";
import axios from "axios";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=cc01e69bb401cb5a9344f1f01de08a15&with_genres=27&page=4`,
    );
    console.log(response.data);
    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route
          path="/movies"
          element={<AllMovies movies={movies} setMovies={setMovies} />}
        />
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
