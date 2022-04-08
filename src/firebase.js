import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzFc5FJROGbXYlYkuFIiWa-zhWQJr8EKI",
  authDomain: "instagram-clone-react-72610.firebaseapp.com",
  projectId: "instagram-clone-react-72610",
  storageBucket: "instagram-clone-react-72610.appspot.com",
  messagingSenderId: "350190362588",
  appId: "1:350190362588:web:679a25daff2e891f7b7919",
  measurementId: "G-2T6Z8415LW",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
