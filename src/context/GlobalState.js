import { createContext,useReducer,useContext } from "react";
import {AppReducer} from './AppReducer'
//initialstate
const initialState = {
    products : [],
    cart : [],
    order : {},
    DetailProductItem : {},
    TypeProduct : [],
    TypedProduct : []
}

//create context
export const GlobalContext = createContext(initialState)

export const useGlobalState = () => {
    return useContext(GlobalContext)
}

//create provider component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)

    const getProducts = (products) => {
        dispatch({
            type : 'GET_PRODUCTS',
            payload : products
        })
        console.log(products)
    }
    const getDetailProduct = (product) => {
        dispatch({
            type : 'GET_DETAIL_PRODUCT',
            payload : product
        })
    }
    const hideDetailProduct = () => {
        dispatch({
            type : 'HIDE_DETAIL_PRODUCT'
            
        })
    }
    const sortedPrice = (value) => {
        dispatch({
            type : 'SORT_PRICE',
            payload : value
        })
        
    }
  
    const typeProduct = (value) => {
        dispatch({
            type : 'TYPE_PRODUCT',
            payload : value
        })
        
    }
    const searchProduct = (value) => {
        dispatch({
            type : 'SEARCH_PRODUCT',
            payload : value
        })
        
    }
    const addProductToCart = (product) => {
        alert('Thank You!')
        dispatch ({
            type : 'ADD_PRODUCT_TO_CART',
            payload : product
        })
    }
    const increaseCountProduct = (id) => {
        dispatch({
            type : 'INCREASE_COUNT_PRODUCT',
            payload : id
        })
    }
    const decreaseCountProduct = (id) => {
        dispatch({
            type : 'DECREASE_COUNT_PRODUCT',
            payload : id
        })
    }
    const removeProduct = (id) => {
        dispatch({
            type : 'REMOVE_PRODUCT',
            payload : id
        })
        
    }
    const emptyCart = () => {
        dispatch({
            type : 'EMPTY_CART'
        })
    }
    const getOrder = (order) => {
        const info = Object.entries(order).map(([title,value]) => (
            {label : title,value}
        ))
        dispatch({
            type : 'GET_ORDER',
            payload : info
        })
       
    }
    const resetAll = () => {
        dispatch( {
            type : 'RESET_ALL'
        })
    }
    return (
        <GlobalContext.Provider value = {{
            data : state,
            getProducts ,
            getDetailProduct,
            hideDetailProduct,
            sortedPrice,
            typeProduct,
            searchProduct,
            addProductToCart,
            increaseCountProduct,
            decreaseCountProduct,
            removeProduct,
            emptyCart,
            getOrder,
            resetAll
        }}>
             {children}
        </GlobalContext.Provider>
    )
}