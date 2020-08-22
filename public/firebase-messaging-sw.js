importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

const config ={ apiKey: "AIzaSyCxrQDQtymKVyw2xKsn2T1XE78fRCJj4LE",
authDomain: "expense-tracker-e1e77.firebaseapp.com",
databaseURL: "https://expense-tracker-e1e77.firebaseio.com",
projectId: "expense-tracker-e1e77",
storageBucket: "expense-tracker-e1e77.appspot.com",
messagingSenderId: "613575190808",
appId: "1:613575190808:web:7df0a69c85fd370377166d",
measurementId: "G-3YX0LK5E8F"};


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