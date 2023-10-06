import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
console.log("process.env.API_KEY",process.env.NEXT_PUBLIC_API_KEY)
const firebaseReference = firebase.initializeApp(firebaseConfig);
const auth = firebaseReference.auth();
// firebase.analytics()
const currentUser = firebaseReference.auth().currentUser;
const db = firebaseReference.firestore();
export { auth, firebaseReference, db, currentUser };
