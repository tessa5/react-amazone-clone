import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNx8S6OwKFLku4A8ZDGd3H-V8bfzQ6CtM",
    authDomain: "clone-dd14a.firebaseapp.com",
    projectId: "clone-dd14a",
    storageBucket: "clone-dd14a.appspot.com",
    messagingSenderId: "176200817532",
    appId: "1:176200817532:web:ed30496cfe84c2319522f9",
    measurementId: "G-2RN7MX254N"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();

    const auth = firebase.auth();

    export { db, auth};