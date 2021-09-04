import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
const ResultCard = ({movie}) => {
    const {addToWatchList,watchlist,watched,addToWatchedFromWatchlist} = useContext(GlobalContext)

    let storedMovie = watchlist.find(o => o.id === movie.id)
    let watchedMovie = watched.find(o => o.id === movie.id)
    const watchlistDisable = storedMovie ? true: watchedMovie ? true : false 
    const watchedDisable = watchedMovie ? true : false
    
    return (
       <div className="result-card">
           <div className="poster-wrapper">
               {movie.poster_path ? (
                   <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                   alt={movie.title} />
               ) : (
                   <div className="filler-poster"></div>
               )}
               </div>
               <div className="info">
                   <div className="header">
                       <h3 className="title">{movie.title}</h3>
                       <h4 className="release-date">
                           {movie.release_date ?  movie.release_date.substring(0,4) : '--'}
                          
                        </h4>
                   </div>

                   <div className="controls">
                       <button className="btn"
                       onClick = {() => addToWatchList(movie)}
                       disabled = {watchlistDisable}
                       >
                           Add to watchlist
                       </button>

                       <button className="btn"
                       onClick = {() => addToWatchedFromWatchlist(movie)}
                       disabled = {watchedDisable}
                       >
                           Add to watched
                       </button>
                   </div>
                 
                       
               
               </div>
       </div>
    )
}

export default ResultCard
