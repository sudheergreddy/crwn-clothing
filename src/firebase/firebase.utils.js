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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email} = userAuth;    
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;
