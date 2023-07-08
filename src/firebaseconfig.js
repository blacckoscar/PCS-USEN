import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRSVN6rIpkPQKLz77NFcES36Fpe665T9k",
  authDomain: "nextberries-cb5b9.firebaseapp.com",
  projectId: "nextberries-cb5b9",
  storageBucket: "nextberries-cb5b9.appspot.com",
  messagingSenderId: "44749615279",
  appId: "1:44749615279:web:0b3e110f248c8e8b3ae45a",
  measurementId: "G-9QZ27VRVHL",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});

export default firebase;
