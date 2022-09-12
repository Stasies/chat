// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeIQsNbomTnaynsp_STn2anj71JuWHcqE",
  authDomain: "chat-2b2ce.firebaseapp.com",
  projectId: "chat-2b2ce",
  storageBucket: "chat-2b2ce.appspot.com",
  messagingSenderId: "850103016373",
  appId: "1:850103016373:web:37cc42e405514adda4d7fc",
  measurementId: "G-VVKF1Y49FZ",
  storageBucket: "chat-2b2ce.appspot.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
auth.useDeviceLanguage();
export const storage = getStorage(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
