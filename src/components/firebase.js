import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrY1uFSxGOXrX6R1iXSfDUrmwr_zIq6fE",
    authDomain: "twitter-clone-a108a.firebaseapp.com",
    projectId: "twitter-clone-a108a",
    storageBucket: "twitter-clone-a108a.appspot.com",
    messagingSenderId: "178053920299",
    appId: "1:178053920299:web:abcf0b48e5bb9ab7a01c6e",
    measurementId: "G-5WV1RW7SST"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;