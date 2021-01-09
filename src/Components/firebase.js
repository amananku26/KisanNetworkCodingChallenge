import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ3GwFiPeyv91RrI5nUuNSXLPc-pGpzv4",
    authDomain: "contact-app-13ea3.firebaseapp.com",
    projectId: "contact-app-13ea3",
    storageBucket: "contact-app-13ea3.appspot.com",
    messagingSenderId: "397129958648",
    appId: "1:397129958648:web:a9ad3e08d442cf9d96670d",
    measurementId: "G-NFM63BDDQ7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
export default db;
