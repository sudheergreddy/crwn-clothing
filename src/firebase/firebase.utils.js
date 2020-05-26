import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "crwn-db-9f18e.firebaseapp.com",
  databaseURL: "https://crwn-db-9f18e.firebaseio.com",
  projectId: "crwn-db-9f18e",
  storageBucket: "crwn-db-9f18e.appspot.com",
  messagingSenderId: "975645075811",
  appId: "1:975645075811:web:85d33cf53d7eb3d2e00b56",
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;