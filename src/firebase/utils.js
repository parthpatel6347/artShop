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

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        cart: [],
        orders: [],
        ...data,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addItemToUserCart = async (user, cartItems) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.id}`);

  try {
    await userRef.set(
      {
        cart: cartItems,
      },
      { merge: true }
    );
    console.log("cart updated");
  } catch (error) {
    console.log("error setting cart", error.message);
  }
};

export const syncCartWithUser = async (uid, cart) => {
  if (!uid) return;
  const userRef = firestore.doc(`users/${uid}`);
  try {
    await userRef.set(
      {
        cart: cart,
      },
      { merge: true }
    );
    console.log("cart updated");
  } catch (error) {
    console.log("error setting cart", error.message);
  }
};

export const getUserCart = async (uid) => {
  if (!uid) return;
  const userRef = firestore.doc(`users/${uid}`);
  let doc = await userRef.get();
  return doc.data().cart;
};

export const addOrdertoUser = async (uid, cart) => {
  if (!uid) return;
  const userRef = firestore.doc(`users/${uid}`);
  let newOrder = {
    date: new Date().toString(),
    items: cart,
  };
  try {
    await userRef.update({
      orders: firebase.firestore.FieldValue.arrayUnion(newOrder),
    });
    console.log("order added to user");
  } catch (error) {
    console.log("error setting order to user DB.", error.message);
  }
};

export const getUserOrders = async (uid) => {
  if (!uid) return;
  const userRef = firestore.doc(`users/${uid}`);
  let doc = await userRef.get();
  return doc.data().orders;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
