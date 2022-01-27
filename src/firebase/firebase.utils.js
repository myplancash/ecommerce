import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCz9RJ6_BgP0-Akf_vJHqQW-qT-Hjcd0ZQ",
  authDomain: "ecommerce-db-23e2b.firebaseapp.com",
  projectId: "ecommerce-db-23e2b",
  storageBucket: "ecommerce-db-23e2b.appspot.com",
  messagingSenderId: "144114044469",
  appId: "1:144114044469:web:20f87283f71a601118ab7c"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  // await cause it's a async request to our database
  const snapShot = await userRef.get();
  console.log(userAuth);
  console.log(snapShot);


  // checking there is any data in that place
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    //if there isn't create a new user using the data from our userAuth object
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("error creating user", error.message)
    }
  }
  //we mught still want to user our userRef for sometjimg
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;