import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAvNfR8SmWjxlW6wOhofrsAfc8JKwPYa6c",
  authDomain: "shop-db-feb88.firebaseapp.com",
  databaseURL: "https://shop-db-feb88.firebaseio.com",
  projectId: "shop-db-feb88",
  storageBucket: "shop-db-feb88.appspot.com",
  messagingSenderId: "1074958420829",
  appId: "1:1074958420829:web:e5ae5ec597a3714b1f76b4",
  measurementId: "G-Q4941HS6GM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // if data is not present in the collection
  if (!snapShot.exists) {
    const { displayName, email } = userAuth; // we want the displayName and email from the user
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider); // we want the google provider

export default firebase;
