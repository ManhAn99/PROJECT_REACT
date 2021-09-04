import React ,{ useEffect, createContext, useReducer} from 'react'
import { AppReducer } from './AppReducer'
//initial state

const initialState = {
    watchlist : localStorage.getItem('watch-list') 
    ? JSON.parse(localStorage.getItem('watch-list')) : [],
    watched   : localStorage.getItem('watched') 
    ? JSON.parse(localStorage.getItem('watched')) : []
}

//create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
       localStorage.setItem('watch-list',JSON.stringify(state.watchlist))
       localStorage.setItem('watched',JSON.stringify(state.watched))
    }, [state])

    //actions
    const addToWatchList = (movie) => {
        dispatch({
            type : 'ADD_TO_WATCHLIST',
            payload : movie
        })
    }
    const removeFromWatlist = (id) => {
        dispatch({
            type : 'REMOVE_FROM_WATCHLIST',
            payload : id
        })
    }
    const addToWatchedFromWatchlist = (movie) => {
        dispatch({
            type : 'ADD_TO_WATCHED_FROM_WATCHLIST',
            payload : movie
        })
    }
    const removeFromWatched = (id) => {
        dispatch({
            type : 'REMOVE_FROM_WATCHED',
            payload : id
        })
    }
    const addToWatchlistFromWatched = (movie) => {
        dispatch({
            type : 'ADD_TO_WATCHLIST_FROM_WATCHED',
            payload : movie
        })
    }
    
    return (
        <GlobalContext.Provider value ={{
            watchlist : state.watchlist,
            watched : state.watched,
            addToWatchList,
            removeFromWatlist,
            addToWatchedFromWatchlist,
            removeFromWatched,
            addToWatchlistFromWatched
        }}>
            {children}
        </GlobalContext.Provider>
    )

}