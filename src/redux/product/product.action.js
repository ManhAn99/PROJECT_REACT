import productTypes from './product.type'
import { firestore } from '../../firebase/utils' 
import firebase from 'firebase/app'
//add product
export const addProduct = (product) => async dispatch => {
  console.log(product)
  const timestamp = new Date()
  try {
    await firestore
    .collection('products')
    .doc()
    .set({...product, timestamp})
  }
  catch(err) {
    //console.log(err)
  }
}
//get product
export const getProducts = (products) => {
  return {
    type : productTypes.GET_PRODUCTS,
    payload : products
  }
}
//deleteProduct
export const deleteProduct = (productId,productImageURL) => async dispatch => {
  try {
    await firestore
    .collection('products')
    .doc(productId)
    .delete()

 await firebase.storage().refFromURL(productImageURL).delete()
  }
  catch(err) {
    //console.log(err)
  }
}
//get current product
export const getCurrentProduct = currentProduct => {
  return {
    type : productTypes.GET_CURRENT_PRODUCT,
    payload : currentProduct
  }
}
//edit product
export const editProductStart = (editProduct, productId) => async dispatch => {
  try {
    await firebase.firestore().collection('products').doc(productId).set(editProduct)
    dispatch(
      getCurrentProduct(null)
    )
  }
  catch(err) {
    //console.log(err)
  }
}
//get filter product
export const getFilterProduct = (filterProduct) => {
  return {
    type : productTypes.GET_FILTER_PRODUCT,
    payload : filterProduct
  }
}

// filter product start
export const filterProductStart = (option) => {
  return {
    type : productTypes.FILTER_PRODUCT_START,
    payload : option
  }
}
// get similar product
export const getSimilarProduct = (product) => {
  return {
    type : productTypes.GET_SIMILAR_PRODUCT,
    payload : product
  }
}
//rating product
export const ratingProduct = (rating,productId, currentUser,input) => async dispatch => {
  const timeStamp = new Date()
  try {
   await firebase
    .firestore()
    .collection('products')
    .doc(productId)
    .collection('userRate')
    .doc()
    .set({rating,currentUser,timeStamp,input})

    await firebase 
      .firestore()
      .collection('products')
      .doc(productId)
      .update({
        rate : rating
      })
  }
  catch(err) {
    //console.log(err)
  }
}

//current product id
export const getCurrentId = id => {
  return {
    type : productTypes.GET_CURRENT_ID,
    payload : id
  }
}
