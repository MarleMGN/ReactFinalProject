import landing__img from "../assets/peakpx.jpg";
import MovieCard from "../components/MovieCard";


const Landing = ({ movies }) => {
  
  return (
    <>
      <div className="landing__img--container">
        <img src={landing__img} className="landing__img" alt="" />
        <div className="landing__img--fade"></div>
      </div>
      <div className="section__divider"></div>
      <div className="container">
        <div className="row">
          <div className="featured__movies">
            <h2>
              Featured Titles
            </h2>
            <div className="movies__grid">
              {
                movies?.slice(0, 6).map(movie => (
                  <MovieCard movie={movie} key={movie.id} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;