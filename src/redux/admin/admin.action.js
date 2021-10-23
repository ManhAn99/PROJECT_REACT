import adminTypes from "./admin.types";
import { firestore } from "../../firebase/utils";
//toglle add form
export const toggleAddFormProduct = toggle => {
    return {
        type : adminTypes.TOGGLE_ADD_FORM ,
        payload : toggle
    }
}
//get all users
export const getUsersAndHistory = () => async dispatch => {
  try {
     await firestore.collection('users').orderBy('timestamp','desc').get()
         .then(snapshot => {
             const arrayUsers = snapshot.docs.map(doc => {
                 return {
                     ...doc.data(),
                     id : doc.id
                 }
             })
             dispatch({
                type : adminTypes.GET_ALL_USER,
                payload : arrayUsers
            })
         })

    await firestore.collection('orders').orderBy('timestamp', 'desc').get()
       .then(snapshot => {
           const arrayOrders = snapshot.docs.map(doc => {
               return {
                   ...doc.data(),
                   id : doc.id
               }
           })
           dispatch({
               type : adminTypes.GET_ALL_HISTORY_ORDERS,
               payload : arrayOrders
           })
       })
  }
  catch(err) {
      //console.log(err)
  }
}
//get current user admin
export const getCurrentUserAdmin = (currentUserAdmin) => {
    return {
        type : adminTypes.GET_CURRENT_USER_ADMIN,
        payload : currentUserAdmin
    }
}