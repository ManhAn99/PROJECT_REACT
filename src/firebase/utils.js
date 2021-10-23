import {firebaseConfig} from './config'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
//google provider
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({promp : 'Select_account'})

//facebook provider
export const FacebookProvider = new firebase.auth.FacebookAuthProvider()
FacebookProvider.addScope('user_birthday,email')

export const handleProfileUser = async (userAuth, additionalData = {}) => {
   if(!userAuth) return

   const {uid} = userAuth
   const userRef = firestore.doc(`users/${uid}`)
   const snapShot = await userRef.get()

   if(!snapShot.exists) {
       const {displayName,email,photoURL} = userAuth
       const timestamp = new Date()
       const userRoles = ['user']
       //set data for user
       try{
         await userRef.set({
             displayName,
             email,
             userRoles,
             timestamp,
             photoURL,
             ...additionalData
         })
       }
       catch(err) {
           //console.log(err)
       }
   }
   return userRef
}

// export const getCurrentUser = () => {
//     return new Promise((resolve,reject) => {
//         const unSubcribe = auth.onAuthStateChanged(userAuth => {
//             unSubcribe()
//             resolve(userAuth)
//         }, reject)
//     })
// }