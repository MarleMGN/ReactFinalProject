import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import StarRating from "../components/StarRating";

const MovieDetails = ({ movies, genreMap, featuredMovies = [] }) => {
  const { id } = useParams();
  const allMovies = [
    ...new Map([...movies, ...featuredMovies].map((m) => [m.id, m])).values(),
  ];
  const movie = allMovies?.find((movie) => String(movie.id) === id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);
  if (!movie) {
    return <p>Loading movie...</p>;
  }

  const recommendedMovies = movies?.filter((movie) => String(movie.id) !== id);

  const shuffleArray = (movies) => {
    return [...movies].sort(() => Math.random() - 0.5);
  };

  const backdrop__base__url = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
      <div className="container">
        <div className="movies__container">
          <div className="row">
            <div className="selected__movie--wrapper">
              <div className="backdrop__img--container">
                <img
                  src={`${backdrop__base__url}${movie.backdrop_path}`}
                  className="backdrop__img"
                  alt=""
                />
                <div className="backdrop__img--fade"></div>
              </div>
              <div className="allmovies__arrow">
                <Link to="/movies" className="movies__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <Link to="/movies" className="movies__link">
                  <h2 className="movies__link--title">Movies</h2>
                </Link>
              </div>
              <div className="selected__movie">
                <figure className="selected__movie--figure">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="selected__movie--img"
                  />
                </figure>
                <div className="selected__movie--info">
                  <h3>{movie.title}</h3>
                  <div className="movie__genres">
                    {movie.genre_ids.map((id) => (
                      <span key={id} className="genre__tag">
                        {genreMap[id]}
                      </span>
                    ))}
                  </div>
                  <div className="movie__rating">
                    <span>Rating: </span>
                    <StarRating rating={movie.vote_average} />
                  </div>
                  <p>{movie.overview}</p>
                  <p>Release Date: {movie.release_date}</p>
                </div>
              </div>
            </div>
            <div className="section__divider"></div>
            <h3 className="similar__title">You May Also Like</h3>
            <div className="similar__movies">
              {shuffleArray(recommendedMovies)
                .slice(0, 4)
                .map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
