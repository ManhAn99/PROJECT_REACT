import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
const MovieControls = ({movie,type}) => {
    const {removeFromWatlist,
          addToWatchedFromWatchlist,
          removeFromWatched,
          addToWatchlistFromWatched
          }   = useContext(GlobalContext)

       
    return (
       <div className="inner-card-controls">
         {type === 'watchlist' && (
             <>
                <button className="ctrl-btn"
                onClick = {() => addToWatchedFromWatchlist(movie)}
                >
                    <i className="fa-fw far fa-eye"></i>
                </button>

                <button className="ctrl-btn"
                 onClick = {() => removeFromWatlist(movie.id)}
                >
                    <i className="fa-fw fa fa-times"></i>
                </button>
             </>
         )}
         {type === 'watched' && (
             <>
                <button className="ctrl-btn"
                onClick = {() => addToWatchlistFromWatched(movie)}
                >
                    <i className="fa-fw far fa-eye-slash"></i>
                </button>

                <button className="ctrl-btn"
                 onClick = {() => removeFromWatched(movie.id)}
                >
                    <i className="fa-fw fa fa-times"></i>
                </button>
             </>
         )}
       </div>
    )
}

export default MovieControls
