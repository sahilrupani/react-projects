import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyDw8VV5InX5knJLm2HPnHxsFPmc2P9nWOk",
    authDomain: "slack-clone-8c449.firebaseapp.com",
    databaseURL: "https://slack-clone-8c449.firebaseio.com",
    projectId: "slack-clone-8c449",
    storageBucket: "slack-clone-8c449.appspot.com",
    messagingSenderId: "795154469989",
    appId: "1:795154469989:web:3d3da35346a982fdc8228c",
    measurementId: "G-455VPPG83E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}

export default db