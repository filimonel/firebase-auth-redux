import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBm8QFrzFyh5xu3cb3vg2wMclJb1xs5YHs",
  authDomain: "auth-redux-abd14.firebaseapp.com",
  projectId: "auth-redux-abd14",
  storageBucket: "auth-redux-abd14.appspot.com",
  messagingSenderId: "475351338210",
  appId: "1:475351338210:web:870d3889fd2c4efd7f62bb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
