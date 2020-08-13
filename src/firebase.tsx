import firebase from 'firebase'

const firebaseConfig: object = {
    apiKey: "AIzaSyDLxe8iLiKvjYAFpHS9bAzEU82IopQwA14",
    authDomain: "typescript-quiz.firebaseapp.com",
    databaseURL: "https://typescript-quiz.firebaseio.com",
    projectId: "typescript-quiz",
    storageBucket: "typescript-quiz.appspot.com",
    messagingSenderId: "765137182488",
    appId: "1:765137182488:web:56f58eb2229c2b8801886d"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;