import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBrv4RMCqVDgYa7pdIYuX05WXjOeCTUKg",
    authDomain: "projects-bf4e7.firebaseapp.com",
    projectId: "projects-bf4e7",
    storageBucket: "projects-bf4e7.appspot.com",
    messagingSenderId: "60140371315",
    appId: "1:60140371315:web:e3704fe95d6c8007fad906",
    measurementId: "G-VE9CVGJ7KD"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase, useAuthState };