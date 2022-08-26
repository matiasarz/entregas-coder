// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAx7_6pKlq5CX_hOInpw_EwLr8PfvZKFGI",
  authDomain: "react-eccomerce-b170c.firebaseapp.com",
  projectId: "react-eccomerce-b170c",
  storageBucket: "react-eccomerce-b170c.appspot.com",
  messagingSenderId: "22677576642",
  appId: "1:22677576642:web:37b8ddf1f976213650945b",
  measurementId: "G-D89S58XSEC"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app)
const analytics = getAnalytics(app);

export default firestoreDB;