importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

 if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
       console.log('Service worker registration failed, error:', err);
      });
     }
var firebase:any=firebase
firebase.initializeApp({
   messagingSenderId: "613575190808",
  })

const messaging = firebase.messaging()
messaging.onMessage(function(payload){
  console.log("on message", payload);
})
