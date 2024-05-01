import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1gG6iZpA1LXjLGglikOcPRT5O7f2VleQ",
  authDomain: "chat-ffeb5.firebaseapp.com",
  projectId: "chat-ffeb5",
  storageBucket: "chat-ffeb5.appspot.com",
  messagingSenderId: "783526469954",
  appId: "1:783526469954:web:e89d8bf6d49212e09be8db",
  measurementId: "G-73NTK3RCTZ"
};

const analytics = getAnalytics(app)
export const db = getFirestore()


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseConfig)
