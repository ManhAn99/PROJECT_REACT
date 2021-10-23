import {auth , handleProfileUser, GoogleProvider, FacebookProvider} from '../../firebase/utils'
import userTypes from './user.types'
import firebase from 'firebase/app'
import { resetAllCheckout } from '../checkout/checkout.actions'
//get current user
export const getCurrentUser = (user) => {
  return {
    type : userTypes.GET_CURRENT_USER,
    payload : user
  }
}

//sign up with email
export const signUpWithEmail =  ({name,email,phone,password})  => async dispatch => {
  try {
    const {user} = await auth.createUserWithEmailAndPassword(email,password)
    const additionalData = {displayName : name, phone}
    await handleProfileUser( user, additionalData)
    console.log(email)
  }
  catch(err) {
      alert(err.message)
  }
}

//sign out user
export const signOutUser =  ()  => async dispatch => {

   try{
     await auth.signOut()
     dispatch({
      type : userTypes.SIGN_OUT_USER,
      
    })
    dispatch(resetAllCheckout())
   }
   catch(err) {
    //  console.log(err.message)
   }
}
//sign in with email
export const signInWithEmail = ({email,password}) => async dispatch => {
 try {
   await auth.signInWithEmailAndPassword(email,password)
   dispatch({
     type : userTypes.USER_ERROR_LOG_IN,
     payload : ''
   })
 }
 catch(err) {
  dispatch({
    type : userTypes.USER_ERROR_LOG_IN,
    payload : "Email or password isn't correct"
  })
 }
}

// reset password
export const resetPasswordStart = (email) => async dispatch => {
  const config = {
    url : 'http://localhost:3000/signin'
}
 try {
   await auth.sendPasswordResetEmail(email, config)
   dispatch({
     type : userTypes.USER_RESET_SUCCESS,
     payload : true
   })
 }
 catch(err) {
  dispatch({
    type : userTypes.USER_RESET_ERROR,
    payload : 'Email not found. Try again!'
  })
 }
}

// sign in with google
export const signInWithGoogle =  () => async dispatch => {
  await auth.signInWithPopup(GoogleProvider)
}

//sign in with facebook
export const signInWithFacebook = () => async dispatch => {
  await auth.signInWithPopup(FacebookProvider)
}
// edit user
export const editUserStart = (editUser,id) => async dispatch => {
  try {
    await firebase.firestore().collection('users').doc(id).set(editUser)
    dispatch(
      editUserSuccess(true)  
    )
  }
  catch(err) {
    //console.log(err)
  }
}
//edit user success
export const editUserSuccess = success => {
  return {
    type : userTypes.EDIT_USER_SUCCESS,
    payload : success
  }
}