import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvfSZiORsVohwIB696oyJYwxBcuh-jRRY",
  authDomain: "markers-digital-pro.firebaseapp.com",
  projectId: "markers-digital-pro",
  storageBucket: "markers-digital-pro.appspot.com",
  messagingSenderId: "99311584893",
  appId: "1:99311584893:web:63167d001bb5c569f31314",
  measurementId: "G-H43QCYF1XV"
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
