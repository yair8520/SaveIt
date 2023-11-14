import { auth } from "@/Config/Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// export const signOut = () =>
//   auth()
//     .signOut()
//     .then(() => console.log("User signed out!"));
export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result: { user: any }) => {
        const user = result.user;
        resolve(user);
      })
      .catch((error: any) => {
        console.error("Login error:", error);
        reject(error);
      });
  });
};
export const signInWithFaceBook = () => {
  return new Promise((resolve, reject) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result: { user: any }) => {
        const user = result.user;
        resolve(user);
      })
      .catch((error: any) => {
        console.error("Login error:", error);
        reject(error);
      });
  });
};
