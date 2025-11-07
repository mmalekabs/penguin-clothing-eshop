import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; //getDoc & setDoc are used to get & set the data inside the doc not doc itself.

// configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4tnT9SpbiWru1tpFuzja_DlTnmLA52j4",
  authDomain: "penguin-clothing-db.firebaseapp.com",
  projectId: "penguin-clothing-db",
  storageBucket: "penguin-clothing-db.firebasestorage.app",
  messagingSenderId: "1070998173031",
  appId: "1:1070998173031:web:6a51c3c95941c007102bc2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user, additionalInfo = {}) => {
  if (!user) return;
  const userDocRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInAuthUserWithEmailAndPassword(auth, email, password);
};
