import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCHf6UcffB7qjL6_j9m8qEFIXnkSCmJQy4",
  authDomain: "crwn-clothing-db-b6857.firebaseapp.com",
  projectId: "crwn-clothing-db-b6857",
  storageBucket: "crwn-clothing-db-b6857.appspot.com",
  messagingSenderId: "714322648864",
  appId: "1:714322648864:web:56d72aec2954c48a080145"
};


const fireBaseApp = initializeApp(firebaseConfig);
console.log('fireBaseApp',fireBaseApp)
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,'users',userAuth.uid);

  

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName,email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user',error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if (!email || !password) {
    return
  }
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthWithEmailAndPassword = async (email,password) => {
  if (!email || !password) {
    return
  }
  return await signInWithEmailAndPassword(auth,email,password);
}

export const userSignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);