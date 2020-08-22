import firebase from 'firebase/app';
import 'firebase/messaging';

const config ={
  apiKey: "AIzaSyDLxe8iLiKvjYAFpHS9bAzEU82IopQwA14",
  authDomain: "typescript-quiz.firebaseapp.com",
  databaseURL: "https://typescript-quiz.firebaseio.com",
  projectId: "typescript-quiz",
  storageBucket: "typescript-quiz.appspot.com",
  messagingSenderId: "765137182488",
  appId: "1:765137182488:web:56f58eb2229c2b8801886d"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

// next block of code goes here
export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });