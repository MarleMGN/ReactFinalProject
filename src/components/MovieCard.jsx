import React from "react";
import { Link } from "react-router-dom";


const image__base__url = "https://image.tmdb.org/t/p/w500"

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/movies/${movie.id}`}>
        <img src={`${image__base__url}${movie.poster_path}`} alt={movie.title} className='movie__poster'/>
        <p className="movie__title">{movie.title}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
