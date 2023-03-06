// Firebase import
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsGWEHLwZdxvRauaSCAauXpvUa1Y5_vak",
    authDomain: "netflix-2-0-clone.firebaseapp.com",
    projectId: "netflix-2-0-clone",
    storageBucket: "netflix-2-0-clone.appspot.com",
    messagingSenderId: "1065181705145",
    appId: "1:1065181705145:web:a3efaceb6fca003e98bc68"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;