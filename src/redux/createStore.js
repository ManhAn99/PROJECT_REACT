import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const middleware = [ thunk]

const store = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer)



export default store

