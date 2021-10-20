import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
 
var firebaseConfig = {
  apiKey: "AIzaSyDvKrouovSIjr0aUu1wflANO0tvWD1O1gg",
  authDomain: "alumni-portal-9a686.firebaseapp.com",
  projectId: "alumni-portal-9a686",
  storageBucket: "alumni-portal-9a686.appspot.com",
  messagingSenderId: "37378494677",
  appId: "1:37378494677:web:b60196d67aa2480b53925c"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };