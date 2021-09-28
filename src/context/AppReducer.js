export const AppReducer = (state, {type,payload}) => {
    switch(type) {
        case 'GET_PRODUCTS' :
            return {
                ...state,
                products : payload,
                SortedProduct : payload,
                TypeProduct : payload
            }
        case 'GET_DETAIL_PRODUCT' :
            return {
                ...state,
                DetailProductItem : payload
            }
        case 'HIDE_DETAIL_PRODUCT' :
            return {
                ...state,
                DetailProductItem : {}
            }
        case 'TYPE_PRODUCT' :
            return {
                ...state,
                TypeProduct : payload === 'tea'
                ? state.products.filter(product => product.categories[0].name === payload)
                : payload === 'cake'
                ? state.products.filter(product => product.categories[0].name === payload)
                : payload === 'fruit'
                ? state.products.filter(product => product.categories[0].name === payload)
                : state.products,
                TypedProduct : payload === 'tea'
                ? state.products.filter(product => product.categories[0].name === payload)
                : payload === 'cake'
                ? state.products.filter(product => product.categories[0].name === payload)
                : payload === 'fruit'
                ? state.products.filter(product => product.categories[0].name === payload)
                : state.products,
            }
        case 'SORT_PRICE' :
            return {
                ...state,
                TypeProduct : payload === 'highest' 
                ? state.TypeProduct.sort((a,b) => b.price.raw - a.price.raw)  
                : payload === 'lowest' 
                ?  state.TypeProduct.sort((a,b) => a.price.raw - b.price.raw) 
                : state.TypeProduct.sort((a, b) => a.name.localeCompare(b.name)) 
            }
        case 'SEARCH_PRODUCT' :
            return {
                ...state,
                TypeProduct : payload === ''
                ? state.TypedProduct
                : state.TypeProduct.filter(product => product.name.toLowerCase().includes(payload.toLowerCase()))
            }
        case 'ADD_PRODUCT_TO_CART' :
            const existingProduct = state.cart.some(product => product.id === payload.id)
            return {
                ...state,
                cart : existingProduct 
                ? state.cart
                .map(product => product.id === payload.id ? {...product,count : product.count + 1} : product)
                : [...state.cart,{...payload,count : 1}],
                DetailProductItem : {}
            }
        case 'INCREASE_COUNT_PRODUCT' :
            return {
                ...state,
                cart : state.cart
                 .map(product => product.id === payload ? {...product,count : product.count + 1} : product)
            }
        case 'DECREASE_COUNT_PRODUCT' :
            const currentCount = state.cart.find(product => product.id === payload).count
            const newCount = currentCount <= 1 ? 1 : currentCount - 1
            return {
             ...state,
             cart : state.cart.map(product => product.id === payload ? {...product,count : newCount} : product)
            }
        case 'REMOVE_PRODUCT' :
          
            return {
            ...state,
            cart : state.cart.filter(product => product.id !== payload)
            }
        case 'EMPTY_CART' :
            return {
                ...state,
                cart : []
            }
        case 'GET_ORDER' :
            return {
                ...state,
                order : {info : payload,cart : state.cart}
            }
        case 'RESET_ALL' :
            return {
                ...state,
                cart : [],
                order : {}
            }
        default :
          return state
    }
}