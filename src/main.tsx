import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv5P0FdRKcA3Ndqt7rqGE49peB0DuXNzs",
  authDomain: "flexreactfendwcollectionupdate.firebaseapp.com",
  projectId: "flexreactfendwcollectionupdate",
  storageBucket: "flexreactfendwcollectionupdate.appspot.com",
  messagingSenderId: "699999729586",
  appId: "1:699999729586:web:256e5e465e4738234a56ab",
  measurementId: "G-2VNN09XG49"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const analytics = getAnalytics(app);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
