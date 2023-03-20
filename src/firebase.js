import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBnkR0yPfx8lfaRW11GFb0pMIr3DBWUFXA",
    authDomain: "react-firebase-auth-6454a.firebaseapp.com",
    projectId: "react-firebase-auth-6454a",
    storageBucket: "react-firebase-auth-6454a.appspot.com",
    messagingSenderId: "891057548450",
    appId: "1:891057548450:web:b0c6ecea3ff8f10686bbfb",
    measurementId: "G-QMM4VGV5NE",
};

const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
};
