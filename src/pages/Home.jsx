import React, { useMemo } from 'react'
import Landing from '../components/Landing'
import Highlights from '../components/Highlights'
import killer_background from '../assets/killer_background.jpg'

const Home = ({ movies, featuredMovies = [] }) => {


  const featured = useMemo(() => {
    if (!featuredMovies.length) return [];
    const shuffled = [...featuredMovies].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  }, [featuredMovies]);


  return (
    <div>
      <Landing movies={movies} featured={featured}/>
      <div className="section__divider"></div>
      <Highlights />
      <div className="section__divider"></div>
      <div className="killer__img--container">
        <img src={killer_background} className="killer__img" alt="" />
        <div className="landing__img--fade"></div>
      </div>
    </div>
  )
}

export default Home
