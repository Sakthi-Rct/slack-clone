import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1ryN-pFzZX1QDsdKe_iRyi0_os3PZK9Q",
  authDomain: "slack-clone-a73dd.firebaseapp.com",
  projectId: "slack-clone-a73dd",
  storageBucket: "slack-clone-a73dd.appspot.com",
  messagingSenderId: "667696684743",
  appId: "1:667696684743:web:702c5de90000c3a638a8e2",
  measurementId: "G-7BPSPSCDTN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
