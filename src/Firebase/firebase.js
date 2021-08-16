import firebase from "firebase/app";
import database from 'firebase/database';

const config = {
    apiKey: "AIzaSyDJgKxrNzYZzfHDd1TNIv0X5fet9FqnHkM",
    authDomain: "my-awesome-blog-25ce5.firebaseapp.com",
    // databaseURL: "<YOUR-PROJECT-URL>",
    projectId: "my-awesome-blog-25ce5",
    storageBucket: "my-awesome-blog-25ce5.appspot.com",
    messagingSenderId: "1074480537211",
    appID: "1:1074480537211:web:e7ada9abab7977dbce0cde",
};

let firebaseCache;

export const getFirebase = () => {
    if (firebaseCache) {
        return firebaseCache;
    }

    firebase.initializeApp(config);
    firebaseCache = firebase;
    return firebase;
};