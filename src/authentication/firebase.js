// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiFGa5Zjf-uFexYtCHBxz1Ll_9I_jT5SE",
  authDomain: "cuahn-c8472.firebaseapp.com",
  projectId: "cuahn-c8472",
  storageBucket: "cuahn-c8472.appspot.com",
  messagingSenderId: "355484731053",
  appId: "1:355484731053:web:610ebd55e10f5889c66824",
  measurementId: "G-6WM00WFWEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangDidapatakan = await createUserWithEmailAndPassword(auth, email, password);

    console.log(userYangDidapatakan.user);
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangLogin = await signInWithEmailAndPassword(auth, email, password);
    console.log("user yang login adalah", userYangLogin.user);
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth", err.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth", err.message);
  }
};

const keluarDariAplikasi = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
    console.log("Error code auth", err.code);
    console.log("Error msg auth", err.message);
  }
};

export { auth, registerDenganEmailDanPassword, loginDenganEmailDanPassword, resetPassword, keluarDariAplikasi, googleSignIn };
