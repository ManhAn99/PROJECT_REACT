import productTypes from './product.type'

const initialState = {
    products : [],
    currentProduct : null,
    filterProduct : [],
    similarProduct : {},
    currentId : ''
}

const productReducer = (state=initialState, action) => {
  switch(action.type) {
      case productTypes.GET_PRODUCTS :
        return {
          ...state,
          products : action.payload
        }
      case productTypes.GET_CURRENT_PRODUCT :
        return {
          ...state,
          currentProduct : action.payload
        }
      case productTypes.GET_FILTER_PRODUCT:
        return {
         ...state,
         filterProduct : action.payload
        }
      case productTypes.FILTER_PRODUCT_START:
        return {
          ...state,
          filterProduct : state.filterProduct.sort((a,b) => (
            action.payload === 'lowest'
            ?
            parseInt(a.price) - parseInt(b.price)
            :
            action.payload === 'highest'
            ?
            parseInt(b.price) -  parseInt(a.price)
            :
            a.name.toLowerCase().localeCompare((b.name.toLowerCase()))
          ))
        }
      case productTypes.GET_SIMILAR_PRODUCT :
        return {
          ...state,
          similarProduct : action.payload
        }
      case productTypes.GET_CURRENT_ID :
        return {
          ...state,
          currentId : action.payload
        }
    
      default :
        return state
  }
}

export default productReducer