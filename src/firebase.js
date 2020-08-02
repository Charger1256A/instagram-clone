import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxSJ90na23ftvrxLKjkIooSCP3YmHEiUs",
    authDomain: "instagram-clone-react-5d531.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-5d531.firebaseio.com",
    projectId: "instagram-clone-react-5d531",
    storageBucket: "instagram-clone-react-5d531.appspot.com",
    messagingSenderId: "716251991431",
    appId: "1:716251991431:web:a7b2197b48eb042001d722",
    measurementId: "G-3LNSBREJEB"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default firebaseConfig;