import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCxrQDQtymKVyw2xKsn2T1XE78fRCJj4LE",
  authDomain: "expense-tracker-e1e77.firebaseapp.com",
  databaseURL: "https://expense-tracker-e1e77.firebaseio.com",
  projectId: "expense-tracker-e1e77",
  storageBucket: "expense-tracker-e1e77.appspot.com",
  messagingSenderId: "613575190808",
  appId: "1:613575190808:web:7df0a69c85fd370377166d"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase;