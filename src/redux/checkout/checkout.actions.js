import checkOutTypes from "./checkout.type";
import { firestore, auth } from '../../firebase/utils' 
import firebase from 'firebase/app'
//move product to cart
export const moveProductToCart = (product) => {
    return {
        type : checkOutTypes.MOVE_PRODUCT_TO_CARTS,
        payload : product
    }
}
//increase count
export const increaseCountProduct = productId => {
    return {
        type : checkOutTypes.INCREASE_COUNT_ITEM,
        payload : productId
    }
}
//decrease count
export const decreaseCountProduct = productId => {
    return {
        type : checkOutTypes.DECREASE_COUNT_ITEM,
        payload : productId
    }
}
//delete item from cart
export const deleteItemFromCart = productId => {
    return {
        type : checkOutTypes.DELETE_ITEM_FROM_CART,
        payload : productId
    }
}
//get checked cart
export const getCarts = carts => {
    return {
        type : checkOutTypes.GET_CARTS,
        payload : carts
    }
}
//empty cart
export const emptyCart = () => {
    return {
        type : checkOutTypes.EMPTY_CART
    }
}
// move to checkout
export const moveToCheckout = (checkedProducts) => {
    return {
        type : checkOutTypes.MOVE_TO_CHECKOUT,
        payload : checkedProducts
    }
}
//get info user
export const getInfoUser = (infoUser) => {
    return {
        type : checkOutTypes.GET_INFO_USER,
        payload : infoUser
    }
}
//reset all checkout
export const resetAllCheckout = () => {
    return {
        type : checkOutTypes.RESET_ALL_CHECKOUT
    }
}
//send info checkout to firebase
export const sendInfoCheckoutToFirebase = (infoUser,infoItems,total) => async dispatch => {
    const timestamp = new Date()
    try{
      await firestore.collection('users').doc(auth.currentUser.uid).update({
          orderHistory : firebase.firestore.FieldValue.arrayUnion({user : infoUser, items : infoItems,timestamp,total})
      })
      await firestore.collection('orders').doc().set({user : infoUser, items : infoItems,timestamp,total})
      dispatch({
          type : checkOutTypes.SEND_INFO_CHECKOUT_TO_FIREBASE
      })
    }
    catch(err) {
        //console.log(err)
    }
}