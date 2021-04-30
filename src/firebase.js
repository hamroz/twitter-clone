
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2UZdaxX3VbShh3esM9ZDYM88FhaMUzX0",
    authDomain: "university-of-new-mexico-63ec0.firebaseapp.com",
    databaseURL: "https://university-of-new-mexico-63ec0.firebaseio.com",
    projectId: "university-of-new-mexico-63ec0",
    storageBucket: "university-of-new-mexico-63ec0.appspot.com",
    messagingSenderId: "498656842571",
    appId: "1:498656842571:web:a84969573fcbcc2ecdcece",
    measurementId: "G-B1B53HCQ5H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;