import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6VAofzhb8LW11Bu_HqU8HQxiwJwovY5w",
    authDomain: "crwn-db-d3451.firebaseapp.com",
    databaseURL: "https://crwn-db-d3451.firebaseio.com",
    projectId: "crwn-db-d3451",
    storageBucket: "crwn-db-d3451.appspot.com",
    messagingSenderId: "969240983855",
    appId: "1:969240983855:web:c45a228e3aa3f7457989da"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  