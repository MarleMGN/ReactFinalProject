import React, { useEffect } from "react";
import "./Home.css";
import landing__img from "../../assets/peakpx.jpg";
import axios from "axios";

// https://api.themoviedb.org/3/discover/movie?api_key=cc01e69bb401cb5a9344f1f01de08a15&with_genres=27&page=1
// Movies API (pages can be changed
// dynamically at the end for more movies)
// https://image.tmdb.org/t/p/w500/${movie.poster_path}
// Poster API

const Home = () => {

  async function fetchMovies() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cc01e69bb401cb5a9344f1f01de08a15&with_genres=27&page=1`)
  }
  
  
  useEffect(() => {
    
  })

  return (
    <>
      <div className="landing__img--container">
        <img src={landing__img} className="landing__img" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="featured__movies">
            <h2>
              Featured Titles
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
