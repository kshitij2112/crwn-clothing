import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdU4rYKHS3zqRd4YaNbpbf7FV_G95A10g",
    authDomain: "crwn-db-43712.firebaseapp.com",
    projectId: "crwn-db-43712",
    storageBucket: "crwn-db-43712.appspot.com",
    messagingSenderId: "387946951604",
    appId: "1:387946951604:web:7cdc71a0246c8fa870b8e1",
    measurementId: "G-P46RN8RVTB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;