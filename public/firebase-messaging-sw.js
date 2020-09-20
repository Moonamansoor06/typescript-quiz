importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

const config ={ apiKey: "AIzaSyDLxe8iLiKvjYAFpHS9bAzEU82IopQwA14",
authDomain: "typescript-quiz.firebaseapp.com",
databaseURL: "https://typescript-quiz.firebaseio.com",
projectId: "typescript-quiz",
storageBucket: "typescript-quiz.appspot.com",
messagingSenderId: "765137182488",
appId: "1:765137182488:web:56f58eb2229c2b8801886d"};


firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});