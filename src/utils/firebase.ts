import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { EmailPasswordCredentials } from '../types/common';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

export const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

export const signup = async ({ email, password }: EmailPasswordCredentials): Promise<firebase.auth.UserCredential> => {
  return await firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const login = async ({ email, password }: EmailPasswordCredentials): Promise<firebase.auth.UserCredential> => {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
}

export const logout = async (): Promise<void> => {
  await firebase.auth().signOut();
}

export const googleSignin = async (): Promise<void> => {
  await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}