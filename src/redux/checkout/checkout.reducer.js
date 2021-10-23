import checkOutTypes from "./checkout.type";

const initialState = {
    carts : [],
    checkedProducts : [],
    infoUser : {}
}

const checkoutReducer = (state = initialState, action) =>  {
    switch(action.type) {
       case checkOutTypes.MOVE_PRODUCT_TO_CARTS :
         const existingProduct = state.carts.some(product => product.id === action.payload.id)
         return {
             ...state,
             carts : existingProduct 
             ? 
             state.carts
             .map(product => product.id === action.payload.id 
                ? {...product,count : product.count + action.payload.count} 
               : product
            )
             :
             [...state.carts,action.payload]

         }
        case checkOutTypes.INCREASE_COUNT_ITEM :
          return {
            ...state,
            carts : state.carts
            .map(product => product.id === action.payload ? {...product,count : product.count + 1} : product)
          }
        case checkOutTypes.DECREASE_COUNT_ITEM :
          const currentCount = state.carts.find(product => product.id === action.payload).count
          return {
            ...state,
            carts : currentCount === 1 
            ? state.carts.map(product => product.id === action.payload ? {...product,count : 1} : product)
            : state.carts.map(product => product.id === action.payload ? {...product, count : product.count - 1} : product)
          }
        case checkOutTypes.DELETE_ITEM_FROM_CART :
          return {
            ...state,
            carts : state.carts.filter(product => product.id !== action.payload)
          }
        case checkOutTypes.GET_CARTS :
          return {
            ...state,
            carts : action.payload
          }
        case checkOutTypes.EMPTY_CART:
          return {
            ...state,
            carts : []
          }
        case checkOutTypes.MOVE_TO_CHECKOUT :
          return {
            ...state,
            checkedProducts : action.payload
          }
        case checkOutTypes.GET_INFO_USER :
          return {
            ...state,
            infoUser : action.payload
          }
        case checkOutTypes.RESET_ALL_CHECKOUT :
          return {
            ...state,
            carts : [],
            checkedProducts : [],
            infoUser : {}
          }
        case checkOutTypes.SEND_INFO_CHECKOUT_TO_FIREBASE :
          return {
            ...state,
            carts : state.carts.filter(product => !state.checkedProducts.includes(product)),
            checkedProducts : []
          }
       default :
         return state
    }
}

export default checkoutReducer