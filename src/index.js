import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth' 
 
firebase.initializeApp({
  apiKey: "AIzaSyB8jviZcvsum2BUvgXXUE1ZdtrcRINalz4",
  authDomain: "realtime-chat-9d782.firebaseapp.com",
  projectId: "realtime-chat-9d782",
  storageBucket: "realtime-chat-9d782.appspot.com",
  messagingSenderId: "676423891505",
  appId: "1:676423891505:web:a595b2614770c4841d3310",
  measurementId: "G-LCY3VZ4P3F"
});

const auth = firebase.auth();
const firestore = firebase.firestore()

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{firebase,  auth, firestore}}>
    <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
