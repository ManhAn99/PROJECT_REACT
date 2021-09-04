import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import MovieCard from './MovieCard'
const WatchList = () => {
    const {watchlist} = useContext(GlobalContext)
    return (
      <div className="movie-page">
          <div className="container">
              <div className="header">
                  <h1 className="heading">My Watchlist</h1>
                  <span className="count-pill">
                      {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}
                  </span>
              </div>
              
              {watchlist.length > 0 ? (
                <div className="movie-grid">
                  {watchlist.map(movie => (
                      <MovieCard movie ={movie} key = {movie.id} type = 'watchlist'/>
                  ))}
              </div>
              ) : (
                  <h2 className="no-movies">No movies in your list</h2>
              )}
          </div>
      </div>
    )
}

export default WatchList
