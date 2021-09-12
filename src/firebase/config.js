import  firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyBEUuam-CQdYidS1dZ36q21oCvzGzz2Zy8",
   authDomain: "gallery--photo.firebaseapp.com",
   projectId: "gallery--photo",
   storageBucket: "gallery--photo.appspot.com",
   messagingSenderId: "181212771919",
   appId: "1:181212771919:web:25235439ae533353865c3a"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const projectStorage = firebase.storage()
 const projectFirestore = firebase.firestore()
 const timestamp = firebase.firestore.FieldValue.serverTimestamp
 export {projectStorage, projectFirestore, timestamp}