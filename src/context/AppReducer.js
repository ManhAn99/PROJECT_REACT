export function AppReducer(state,action) {
    switch(action.type) {
        case 'ADD_TO_WATCHLIST' :
            return {
                ...state,
                watchlist : [action.payload,...state.watchlist]
            }

        case 'REMOVE_FROM_WATCHLIST':
            return {
                ...state,
                watchlist : state.watchlist.filter(movie => movie.id !== action.payload)
            }
        case 'ADD_TO_WATCHED_FROM_WATCHLIST':
            return {
                ...state,
                watchlist : state.watchlist.filter(movie => movie.id !== action.payload.id),
                watched : [action.payload,...state.watched]
            }
        case 'REMOVE_FROM_WATCHED':
            return {
                ...state,
                watched : state.watched.filter(movie => movie.id !== action.payload)
            }
        case 'ADD_TO_WATCHLIST_FROM_WATCHED':
            return {
                ...state,
                watched : state.watched.filter(movie => movie.id !== action.payload.id),
                watchlist : [action.payload,...state.watchlist]
            }
        default :
        return state
    }
}