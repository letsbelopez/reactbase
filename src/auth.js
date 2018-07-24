import firebase from "firebase";
import { firebaseApp } from "./base";

export const authenticateWithProvider = provider => {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  return firebaseApp.auth().signInWithPopup(authProvider);
};

export const createUserWithEmailAndPassword = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const resetPassword = email =>
  firebase.auth().sendPasswordResetEmail(email);

export const updatePassword = newPassword =>
  firebase.auth().currentUser.updatePassword(newPassword);

export const signOut = async () => {
  console.log("loggin out");
  await firebase.auth().signOut();
};
