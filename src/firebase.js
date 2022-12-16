// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8sUUwuQibl10fCxV1cbGLbWoqAn2vaBo",
    authDomain: "guewelo.firebaseapp.com",
    projectId: "guewelo",
    storageBucket: "guewelo.appspot.com",
    messagingSenderId: "885765508070",
    appId: "1:885765508070:web:28b456e58cc902517ea427",
    measurementId: "G-DEJMLGCJSN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;