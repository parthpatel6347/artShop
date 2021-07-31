import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-4WgCAFeKPbGPM9zQKVmpw8MwWuzDt8k",
  authDomain: "artshop-65a67.firebaseapp.com",
  projectId: "artshop-65a67",
  storageBucket: "artshop-65a67.appspot.com",
  messagingSenderId: "18129586452",
  appId: "1:18129586452:web:79103a143897492126da01",
  measurementId: "G-T5J0NSE7T8",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;